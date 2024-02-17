import React, { useCallback, useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import * as S from "./RecTopic.style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, deleteBookmark } from "../../redux/bookmark";
import { addWordBookmark, deleteWordBookmark, resetWordBookmark, setWordBookmark } from "../../redux/wordBookmark";
import { FadeLoader } from "react-spinners";
import { setNoteTitle } from "../../redux/note";
import { useNavigate } from "react-router-dom";

export default function RecTopic({ onToggle }) {
  const navigate = useNavigate();
  const [inputWord, setInputWord] = useState("");
  const [displayKeyword, setDisplayKeyword] = useState(false);
  const [displaySynonym, setDisplaySynonym] = useState(false);
  const [topics, setTopics] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [keywords, setKeywords] = useState([]);
  const [searchKeyword, setSearchkeyword] = useState("");
  const [isKeywordSearchOpen, setIsKeywordSearchOpen] = useState(false);

  const [synonyms, setSynonyms] = useState([]);
  const [searchSynonym, setSearchSynonym] = useState("");
  const [isSynonymSearchOpen, setIsSynonymSearchOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [keyWordLoading, setKeywordLoading] = useState();
  const [synonymLoading, setSynonymLoading] = useState();

  const user = useSelector((state) => state.user);
  const bookmark = useSelector((state) => state.bookmark);
  const userId = localStorage.getItem("id");
  const receivedToken = localStorage.getItem("token");
  // const receivedToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo"


  const handleKeyPressKeyword = (e) => {
    if (e.key === "Enter") {
      setIsKeywordSearchOpen(true);
      setSearchkeyword(inputWord);
    }
  };

  const handleKeyPressSynonym = (e) => {
    if (e.key === "Enter") {
      setIsSynonymSearchOpen(true);
      setSearchSynonym(inputWord);
    }
  };

  const handleBookmarkChange = (index) => {
    setIsBookmarked((prevBookmarks) => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks[index] = !updatedBookmarks[index];
      return updatedBookmarks;
    });
  };

  const getTopics = async() => {
    setLoading(true)
    try {
      const res = await axios.get(`/search/topics`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      const vocas = res.data.result[0].voca.split(', ');
      setTopics(vocas);
      setLoading(false);
    } catch (error) {  
      console.log(error)
      setLoading(false);
    }
  }
  const getKeyword = async() => {
    setKeywordLoading(true);
    try {
      const Voca = searchKeyword;
      const res = await axios.get(`/search/similarKeywords?voca=${Voca}`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      const vocas = res.data.result[0].voca.split(', ');
      setKeywords(vocas);
      setKeywordLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const getSynonym = async() => {
    setSynonymLoading(true);
    try {
      const Voca = searchSynonym;
      const res = await axios.get(`/search/synonyms?voca=${Voca}`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      const vocas = res.data.result[0].voca.split(', ');
      setSynonyms(vocas);
      setSynonymLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTopics();
  }, [])

  useEffect(() => {
    if (isKeywordSearchOpen) {
      getKeyword();
    }
  }, [searchKeyword, isKeywordSearchOpen]);

  useEffect(() => {
    if (isSynonymSearchOpen) {
      getSynonym();
    }
  }, [searchSynonym, isSynonymSearchOpen]);

  const RecWord = ({ word, index, isBookmarked, onBookmarkChange }) => {
    let dispatch = useDispatch();
    const wordBookmark = useSelector((state) => state.wordBookmark);

    const togglePostBookmark = () => {
      onBookmarkChange(index);
      postBookmarkstatus(word);
    };
    const toggleDeleteBookmark = () => {
      onBookmarkChange(index);
      DeleteBookmark(word);
    };

    const postBookmarkstatus = async(word) => {
      try {
        const res = await axios.post(
          `/bookmarks/topics?content=${word}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${receivedToken}`,
            },
          }
        );
        const serverBookmarkId = res.data.result.bookmarkId;
        const newBookmark = {
          id: serverBookmarkId,
          content: word
        }
        dispatch(addWordBookmark(newBookmark));
        window.alert('북마크에 추가했어요.');
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
    };

    return (
      <S.RecWord>
        <p
          onClick={() => {
            dispatch(setNoteTitle(word));
            navigate("/write");
          }}
        >
          {word}
        </p>
        {isBookmarked ? (
          <FaBookmark
            color="rgba(181, 169, 148, 1)"
            onClick={toggleDeleteBookmark}
          />
        ) : (
          <S.NotBookMark onClick={togglePostBookmark} />
        )}
      </S.RecWord>
    );
  };

  return (
    <S.Container>
      <S.Left>
        <button onClick={onToggle}>
          <MdKeyboardDoubleArrowRight
            style={{ cursor: "pointer" }}
            color="rgba(147, 147, 147, 1)"
            size="20"
          />
        </button>
      </S.Left>
      <S.Right>
        <S.Wrapper>
          <S.Top>
            <S.WordTitle>오늘의 소재</S.WordTitle>
            <button>
              <S.Refresh
                size="30"
                onClick={() => {
                  getTopics();
                }}
              />
            </button>
          </S.Top>
          <S.RecBottom>
            {loading ? (
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'50px 0 0 0'}}>
                <FadeLoader color="rgba(181, 169, 148, 1)" size={50} />
              </div> 
              ) : (
              <div>
                {topics.map((word, index) => (
                  <RecWord
                    key={index}
                    word={word}
                    index={index}
                    isBookmarked={isBookmarked[index]}
                    onBookmarkChange={handleBookmarkChange}  
                  />
                ))}
              </div>
              )
            }
          </S.RecBottom>
        </S.Wrapper>

        <S.Wrapper>
          <S.Top>
            <S.WordTitle>유사 키워드 검색</S.WordTitle>
          </S.Top>
          <S.WordSearch>
            <IoSearchOutline color="rgba(147, 147, 147, 1)" size="23" />
            <input
              placeholder="키워드를 검색해 보세요"
              onChange={(e) => {
                setInputWord(e.target.value);
              }}
              onKeyUp={handleKeyPressKeyword}
            ></input>
          </S.WordSearch>
          {keyWordLoading ? (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'50px 0 0 0'}}>
            <FadeLoader color="rgba(181, 169, 148, 1)" size={50} />
          </div> 
          ) : (
            <>
              {isKeywordSearchOpen && (
                <S.WordBottom>
                  <S.BottomWords>
                    <p>{searchKeyword}</p>
                    <p>{keywords[0]}</p>
                    <p>{keywords[1]}</p>
                  </S.BottomWords>
                  <S.BottomLine />
                  <S.BottomWords>
                    <p>{keywords[2]}</p>
                    <p>{keywords[3]}</p>
                    <p>{keywords[4]}</p>
                  </S.BottomWords>
                </S.WordBottom>
              )}
            </>
          )}
          
        </S.Wrapper>

        <S.Wrapper>
          <S.Top>
            <S.WordTitle>유사 어휘 검색</S.WordTitle>
          </S.Top>
          <S.WordSearch>
            <IoSearchOutline color="rgba(147, 147, 147, 1)" size="23" />
            <input
              placeholder="어휘를 검색해 보세요"
              onChange={(e) => {
                setInputWord(e.target.value);
              }}
              onKeyUp={handleKeyPressSynonym}
            ></input>
          </S.WordSearch>
          {synonymLoading ? (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'50px 0 0 0'}}>
            <FadeLoader color="rgba(181, 169, 148, 1)" size={50} />
          </div> 
          ) : (
            <>
            {isSynonymSearchOpen && (
              <S.WordBottom>
                <S.BottomWords>
                  <p>{searchSynonym}</p>
                  <p>{synonyms[0]}</p>
                  <p>{synonyms[1]}</p>
                </S.BottomWords>
                <S.BottomLine />
                <S.BottomWords>
                  <p>{synonyms[2]}</p>
                  <p>{synonyms[3]}</p>
                  <p>{synonyms[4]}</p>
                </S.BottomWords>
              </S.WordBottom>
            )}
            </>
          )}
        </S.Wrapper>
      </S.Right>
    </S.Container>
  );
}
