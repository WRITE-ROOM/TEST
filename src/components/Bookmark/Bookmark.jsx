import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import * as B from "./Bookmark.style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addNoteBookmark,
  deleteNoteBookmark,
  resetNoteBookmark,
  setNoteBookmark,
} from "../../redux/noteBookmark";
import { useNavigate } from "react-router-dom";

const Bookmark = ({
  defaultColor,
  roomId,
  noteId,
  bookmarkId,
  myProfile,
  IsNoteBookmark,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(IsNoteBookmark || myProfile); // 마이프로필에서 노트북마크 확인
  const [noteBookmarkId, setNoteBookmarkId] = useState(bookmarkId);
  const noteBookmark = useSelector((state) => state.noteBookmark); // 노트북마크 리덕스
  const clickedBookmark = noteBookmark.find(
    (bookmark) => bookmark.noteId === noteId
  );

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleBookmark = () => {
    // 북마크 추가 / 삭제
    if (isBookmarked === true || noteBookmarkId !== undefined) postBookmark();
    else deleteBookmark(noteId);
  };

  const accessToken = localStorage.getItem("token");

  const postBookmark = async () => {
    setIsBookmarked(true);
    try {
      const res = await axios.post(
        `/notes/bookmark/${roomId}/${noteId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
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

      // window.location.reload();
    } catch (error) {
      if (error.response.data.code === "BOOKMARK4003")
        window.alert("이미 북마크한 노트입니다.");
      console.log(error);
    }
  };

  const deleteBookmark = async (noteId) => {
    setIsBookmarked(false);
    setNoteBookmarkId(undefined)
    try {
      const res = await axios.delete(`/notes/bookmark/delete/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
    setNoteBookmarkId(bookmarkId);
  }, [noteBookmarkId]);
  return (
    <B.Container onClick={(e) => e.stopPropagation()}>

      {isBookmarked === true
      || noteBookmarkId !== undefined
       ? (
        <FaBookmark
          size={18}
          color="rgba(181, 169, 148, 1)"
          onClick={() => {
            deleteBookmark(noteId);
          }}
        />
      ) : (
        <B.NotBookMark
          size={18}
          // color={defaultColor ? defaultColor : "black"}
          onClick={() => postBookmark()}
        />
      )}
    </B.Container>
  );
};

export default Bookmark;
