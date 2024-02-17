import React, { useEffect, useState } from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./WordBookmark.style.js"
import * as R from "../MyBookmark.style.js"
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addWordBookmark, deleteWordBookmark, resetWordBookmark, setWordBookmark } from '../../../../redux/wordBookmark.jsx';

export default function WordBookMark() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [count, setCount] = useState();
  const [isBookmarked, setIsBookmarked] = useState([]); //isBookmarked
  const [bookmarkMaterialList, setBookmarkMaterialList] = useState([]); // 북마크한 단어 배열
  const wordBookmark = useSelector((state) => state.wordBookmark);

  const userId = localStorage.getItem('id');
  const receivedToken = localStorage.getItem('token')

  let dispatch = useDispatch();
  const handlePageChange = (page) => {
    setPage(page);
  };
  const handleBookmarkChange = (index) => {
    setIsBookmarked(prevBookmarks => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks[index] = !updatedBookmarks[index];
      return updatedBookmarks;
    });
  };
  const getWordBookmark = async () => {
    const receivedToken = localStorage.getItem('token')
    try {
      const res = await axios.get(`/bookmarks/topics?page=${page-1}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
        });
      const data = res.data.result;
      const topics = res.data.result.bookmarkMaterialList;
      dispatch(resetWordBookmark());
      dispatch(setWordBookmark(topics)); 
      setBookmarkMaterialList(data.bookmarkMaterialList);
      setIsBookmarked(Array(topics.length).fill(true));
      setCount(data.totalElements);
      setTotalPage(data.totalPage); 

    } catch (error) {
        console.error(error);
    }
  };
  const postBookmarkstatus = async(word) => {
    try {
      const res = await axios.post(`/bookmarks/topics?content=${word}`, {}, 
      {
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
        }
      });
      const isAlreadyBookmarked = wordBookmark.some(bookmark => bookmark.content === word);
      if (isAlreadyBookmarked) {
        window.alert('이미 북마크한 단어입니다.');
      }
      else {
        const serverBookmarkId = res.data.result.bookmarkId;
        const newBookmark = {
          id: serverBookmarkId,
          content: word
        }
        dispatch(addWordBookmark(newBookmark)); 
        window.alert('북마크에 추가했어요.');
      }
    } catch (error) {
      console.log(error);
    }
  }
  const DeleteBookmark = async(word) => {
    const clickedBookmark = wordBookmark.find((bookmark) => bookmark.content === word);
    const bookmarkId = clickedBookmark.id;
    try {
      const res = await axios.delete(`/bookmarks/topics/${bookmarkId}`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
        }
      });
      const data = res.data.result;
      dispatch(deleteWordBookmark({id : data.bookmarkId}));
      window.alert('북마크에서 해제했어요.');
    } catch (error) {
      console.log(error);
    }
  }

  const toggleBookmark = ({index, word}) => {
    handleBookmarkChange(index);
    if (isBookmarked[index]) {
      DeleteBookmark(word);
    }
    else {
      postBookmarkstatus(word);
    }    
  };

  useEffect(() => {
    getWordBookmark();
  }, [page]) 

  return (
    <S.Container>
      <S.BookContainer>
      {[...Array(3).keys()].map((section, sectionIndex) => (
        <div key={section} style={{display: 'flex'}}>
          <S.TopicBox>
          {bookmarkMaterialList.slice(sectionIndex * 13, (sectionIndex + 1) * 13).map((word, index) => (
            <S.RecWord key={index}>
              <p>{word.content}</p> 
              {isBookmarked[sectionIndex * 13 + index] ? (
                <S.IsBookMark onClick={() => toggleBookmark({index: sectionIndex * 13 + index, word: word.content})}/>
              ) : (
                <S.NotBookMark onClick={() => toggleBookmark({index: sectionIndex * 13 + index, word: word.content})}/>
              )}
            </S.RecWord>
          ))}
          </S.TopicBox>
          {sectionIndex < 2 && <R.Line />}
        </div>
        ))}
      </S.BookContainer>
      <R.PagenationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={39}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={handlePageChange}
        />
      </R.PagenationBox>
    </S.Container>
    );
  };

