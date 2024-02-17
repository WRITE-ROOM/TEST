import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import * as N from "./Note.style";
import * as W from "../components/Myprofile/MyBookmark/WordBookmark/WordBookmark.style";
import EmojiContainer from "../components/Emoji/EmojiContainer";
import Setting from "../components/Setting/Setting";
import Bookmark from "../components/Bookmark/Bookmark";
import * as D from "../components/Header/Dropdown.style";
import NewNoteButton from "../components/FloatingButton/NewNoteButton";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../redux/note";

import axios from "axios";
import { useParams } from "react-router-dom";
import { selectRoomInfoState } from "../redux/roomInfo";
import { addNoteBookmark, deleteNoteBookmark } from "../redux/noteBookmark";

const Note = () => {
  const dispatch = useDispatch();
  window.scrollTo(0, 0);

  // note의 정보 조회하는 api 연결 -> addNote
  const note = useSelector((state) => state.note);
  const noteBookmark = useSelector((state) => state.noteBookmark);

  const [showTags, setShowTags] = useState(false);

  const accessToken = localStorage.getItem("token");

  const noteId = parseInt(useParams().noteId, 10);
  const roomId = parseInt(useParams().roomId, 10);

  const fetchNote = async () => {
    try {
      const res = await axios.get(`/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(addNote(res.data.result));
    } catch (error) {
      console.log(error);
    }
  };

  const emojiCounts = note.emojiList ? note.emojiList.emojiCounts : 0;

  const roomInfoSelector = useSelector(selectRoomInfoState);
  const clickedNote =
    roomInfoSelector.noteList.find((room) => room.noteId === noteId) ||
    noteBookmark.find((room) => room.noteId === noteId);
  const clickedBookmark = noteBookmark.find((room) => room.noteId === noteId);
  let isBookmarked = clickedNote ? clickedNote.isbookmarked : null;
  let noteBookmarkId = clickedBookmark
    ? clickedBookmark.noteBookmarkId
    : undefined;

  const postBookmark = async () => {
    isBookmarked = true;
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
        noteId: noteId,
      };
      dispatch(addNoteBookmark(newBookmark));
      noteBookmarkId = serverBookmarkId;

      window.alert("북마크에 추가했어요.");
      // window.location.reload();
    } catch (error) {
      if (error.response.data.code === "BOOKMARK4003")
        window.alert("이미 북마크한 노트입니다.");
      console.log(error);
    }
  };

  const deleteBookmark = async (noteId) => {
    isBookmarked = false;
    noteBookmarkId = undefined;
    try {
      const res = await axios.delete(`/notes/bookmark/delete/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        dispatch(deleteNoteBookmark({ noteId: noteId }));
        window.alert("북마크에서 해제했어요.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [roomId, noteId]);

  return (
    <N.Container>
      <N.Header>
        <N.CoverImage img={note.noteCoverImg} />
        <N.Tools>
          {/* <Bookmark color="white" roomId={roomId} noteId={noteId} bookmarkId={clickedBookmark || undefined} IsNoteBookmark={clickedNote.isbookmarked || undefined} defaultColor="white" /> */}
          {isBookmarked === true || noteBookmarkId !== undefined ? (

            <W.IsBookMark
              color="rgba(181, 169, 148, 1)"
              onClick={() => deleteBookmark(noteId)}
            />
          ) : (
            <W.NotBookMark onClick={() => postBookmark()} />

          )}
          <Setting
            type="config"
            note={note}
            roomId={parseInt(roomId)}
            categoryName={note.categoryName}
          />
        </N.Tools>

        <N.NoteInfo>
          <N.Upper>
            <div>
              <h1>{note.noteTitle}</h1>
              <p>{note.createdAt.split("T")[0]}</p>
            </div>

            <p>by.{note.writer}</p>
          </N.Upper>

          <N.StyledHr color="white" />

          <N.Lower>
            <p>{note.noteSubtitle}</p>
            <N.TagContainer>
              <ul>
                {note.tagList &&
                  note.tagList
                    .slice(0, 4)
                    .map((tag, index) => (
                      <N.Tag key={index}>{tag.tagName}</N.Tag>
                    ))}
                {note.tagList && note.tagList.length > 4 && (
                  <N.Tag
                    className="showMoreTag"
                    onMouseEnter={() => {
                      setShowTags(true);
                    }}
                    onMouseLeave={() => {
                      setShowTags(false);
                    }}
                  >
                    <MdMoreHoriz size={20} />
                    {showTags && (
                      <D.SimpleContainer $width="70px" $padding="8px">
                        <N.HiddenTag>
                          {note.tagList.slice(4).map((tag, index) => (
                            <N.Tag key={index}>{tag.tagName}</N.Tag>
                          ))}
                        </N.HiddenTag>
                      </D.SimpleContainer>
                    )}
                  </N.Tag>
                )}
              </ul>
            </N.TagContainer>
          </N.Lower>
        </N.NoteInfo>
      </N.Header>

      <N.Content
        dangerouslySetInnerHTML={{ __html: note.noteContent }}
      ></N.Content>

      <N.StyledHr color="#E5E5E5" />

      <EmojiContainer emojiCounts={emojiCounts} />
      <NewNoteButton />
    </N.Container>
  );
};

export default Note;
