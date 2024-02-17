import * as S from "./ImageRoomNoteBox.style";
import Bookmark from "../Bookmark/Bookmark";
import { HiMiniUserCircle } from "react-icons/hi2";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useEffect, useState } from "react";
import RoomModal from "../RoomModal/RoomModal";
import Setting from "../Setting/Setting";
import { TagContainer, Tag } from "../../pages/Note.style";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../redux/note";

const ImageRoomNoteBox = ({
  note,
  roomId,
  noteCoverImg,
  openRoomSNB,
  openSNB,
}) => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {
    noteId,
    noteTitle,
    noteSubtitle,
    noteContent,
    writer,
    createdAt,
    tagList,
    userProfileImg,
  } = note;

  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const [maxLength, setMaxLength] = useState(100);

  const handleSelectNote = () => {
    navigate(`/rooms/${roomId}/notes/${noteId}`);
    addNote(note);
  };

  const stripHtmlTags = () => {
    const doc = new DOMParser().parseFromString(noteContent, "text/html");
    const textContent = doc.body.textContent || "";
    return textContent;
  };

  return (
    <S.Container onClick={() => handleSelectNote()}>
      <S.ContentsBox>
        <S.Top>
          <S.Left>
            {userProfileImg ? (
              <img src={userProfileImg} alt="profileImg" />
            ) : (
              <HiMiniUserCircle size={46} color="#e5e5e5" />
            )}

            <div className="info">
              <S.Writer>{writer}</S.Writer>

              <S.Info>
                <S.Date>{createdAt.split("T")[0]}</S.Date>

                <TagContainer>
                  <ul>
                    {tagList &&
                      tagList.map((tag, index) => {
                        return <Tag key={index}>{tag.tagName}</Tag>;
                      })}
                  </ul>
                </TagContainer>
              </S.Info>
            </div>
          </S.Left>

          <S.Right>
            <Bookmark
              roomId={roomId}
              noteId={note.noteId}
              IsNoteBookmark={note.isbookmarked}
              // defaultColor="black"
            />
            <Setting
              type="dots"
              note={note}
              roomId={parseInt(roomId)}
              categoryName={note.categoryContent}
              noteCoverImg={noteCoverImg}
            />
          </S.Right>
        </S.Top>

        <S.TextBox>
          <h1>{noteTitle}</h1>
          <p>
            <span>{noteSubtitle}</span>
            {noteContent && noteContent.length < maxLength
              ? stripHtmlTags()
              : stripHtmlTags().slice(0, maxLength) + "..."}
          </p>
        </S.TextBox>
      </S.ContentsBox>

      {noteCoverImg && <S.NoteImg src={noteCoverImg}></S.NoteImg>}
    </S.Container>
  );
};

export default ImageRoomNoteBox;
