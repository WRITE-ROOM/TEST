import React, { useEffect, useState } from 'react'
import * as S from "./NoteBookmark.style"
import * as R from "../MyBookmark.style"
import * as W from "../WordBookmark/WordBookmark.style"
import Bookmark from '../../../Bookmark/Bookmark'
import { HiMiniUserCircle } from "react-icons/hi2";
import axios from 'axios';
import { addNote, resetNote } from '../../../../redux/note';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { TagContainer, Tag } from '../../../../pages/Note.style';
import Setting from '../../../Setting/Setting';
import Naver from '../../../../assets/naver.png'
import { useNavigate } from 'react-router-dom';
import { addNoteBookmark, deleteNoteBookmark, resetNoteBookmark, setNoteBookmark } from '../../../../redux/noteBookmark';
import { setWordBookmark } from '../../../../redux/wordBookmark';


export default function NoteBookmark() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [count, setCount] = useState();
  const [isBookmarked, setIsBookmarked] = useState([]); //isBookmarked
  const [bookmarkMaterialList, setBookmarkMaterialList] = useState([]); // 북마크한 단어 배열
  const [maxLength, setMaxLength] = useState(100);
  
  const receivedToken = localStorage.getItem('token')

  const note = useSelector((state) => state.note);
  const noteBookmark = useSelector((state) => state.noteBookmark);

  let navigate = useNavigate();
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

  const toggleBookmark = ({index, roomId, noteId}) => {
    handleBookmarkChange(index);
    if (isBookmarked[index]) {
      deleteBookmark(noteId);
    }
    else {
      postBookmark(roomId, noteId);
    }    
  };

  const stripHtmlTags = (index) => {
    const doc = new DOMParser().parseFromString(bookmarkMaterialList[index].noteContent, "text/html");
    const textContent = doc.body.textContent || "";
    return textContent;
  };

  const fetchBookmark = async () => {
    try {
      const res = await axios.get(`/notes/bookmark/list?page=${page-1}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
        });
      const data = res.data.result;
      const notes = data.noteListForNoteBookmarkLists;

      dispatch(resetNoteBookmark());
      dispatch(setNoteBookmark(notes)); 

      setBookmarkMaterialList(data.noteListForNoteBookmarkLists); // 북마크한 노트 리스트
      setIsBookmarked(Array(data.listSize).fill(true)); // 북마크 여부
      setCount(data.totalElements); // 총 리스트 개수
      setTotalPage(data.totalPage); // 총 페이지

    } catch (error) {
        console.error(error);
    }
  };
  
  const postBookmark = async (roomId, noteId) => {
    try {
      const clickedBookmark = noteBookmark.find((bookmark) => bookmark.noteId === noteId)
      const res = await axios.post(
        `/notes/bookmark/${roomId}/${noteId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      const serverBookmarkId = res.data.result.noteBookmarkId;
      const newBookmark = {
        noteBookmarkId: serverBookmarkId,
        noteId: noteId
      }
      dispatch(addNoteBookmark(newBookmark)); 
      window.alert('북마크에 추가했어요.');
      
    } catch (error) {
      if (error.response.data.code === "BOOKMARK4003")
        window.alert('이미 북마크한 노트입니다.');
      console.log(error);
    }
  };

  const deleteBookmark = async (noteId) => {
    try {
      const res = await axios.delete(`/notes/bookmark/delete/${noteId}`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      if (res.status === 200) {
        dispatch(deleteNoteBookmark({noteId : noteId}));
        window.alert("북마크에서 해제했어요.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookmark();
  }, [page])

  return (
    <S.App>
      {bookmarkMaterialList.map((bookmark, index) => (
        <S.Container key={index}>
        <S.ContentsBox>
          <S.Top>
            <S.Left onClick={() => navigate(`/rooms/${bookmark.roomId}/notes/${bookmark.noteId}`)}>
              {bookmark.writerImg ? (
                <img src={bookmark.writerImg} alt="profileImg" />
              ) : (
                <HiMiniUserCircle size={46} color="#e5e5e5" />
              )}
              <div className="info">
                <S.Writer>{bookmark.writer}</S.Writer>
  
                <S.Info>
                  <S.Date>{bookmark.createdAt.split("T")[0]}</S.Date>
  
                  <TagContainer>
                  <ul>
                    {bookmark.tagList &&
                      bookmark.tagList.map((tag) => {
                        return <Tag key={tag.tagId}>{tag.tagName}</Tag>;
                      })}
                  </ul>
                  </TagContainer>
                </S.Info>
              </div>
            </S.Left>
  
            <S.Right>
              {/* <Bookmark roomId={bookmark.roomId} noteId={bookmark.noteId} bookmarkId={bookmark.noteBookmarkId} defaultColor="black" myProfile={true}/> */}
              {isBookmarked[index] ? (
                <W.IsBookMark color="rgba(181, 169, 148, 1)" onClick={() => {toggleBookmark({index: index, noteId: bookmark.noteId})}}/>
              ) : (
                <W.NotBookMark onClick={() => {toggleBookmark({index: index, roomId: bookmark.roomId, noteId: bookmark.noteId})}}/>
              )}
              {/* <Setting
                type="dots"
                note={note}
                roomId={parseInt(bookmark.roomId)}
                categoryName={note.categoryContent}
              /> */}
            </S.Right>
          </S.Top>
  
          <S.TextBox onClick={() => navigate(`/rooms/${bookmark.roomId}/notes/${bookmark.noteId}`)}>
            <h1>{bookmark.noteTitle}</h1>
            <p>
              <span>{bookmark.noteSubtitle}</span>
              {bookmark.noteContent && bookmark.noteContent.length < maxLength
                ? stripHtmlTags(index)
                : stripHtmlTags(index).slice(0, maxLength) + "..."}
            </p>
          </S.TextBox>
        </S.ContentsBox>
  
        {bookmark.noteImg && <S.NoteImg src={bookmark.noteImg}></S.NoteImg>}
      </S.Container>
      ))}
        <R.PagenationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
          />
        </R.PagenationBox>
    </S.App>
  )
}
