import React, { useState } from "react";
import { BiCog } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as S from "./Setting.style";
import DeleteNoteModal from "../DeleteNoteModal/DeleteNoteModal";
import { addNote, setNoteCoverImg } from "../../redux/note";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTag } from "../../redux/tag";
import { updateMode } from "../../redux/writeMode";
import {
  setSelectedRoomId,
  setSelectedCategoryName,
} from "../../redux/selectModal";

const Setting = ({ type, note, roomId, categoryName, noteCoverImg }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSettingMenu, setShowSettingMenu] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  // 노트 삭제 모달 띄우기
  const handleDeleteModal = () => {
    setShowSettingMenu(!showSettingMenu);
    setOpenModal(!openModal);
  };

  const handleClick = (e) => {
    setShowSettingMenu(!showSettingMenu);
  };

  // 노트 수정
  const handleUpdateNote = () => {
    dispatch(addNote(note));
    dispatch(setTag(note.tagList));
    if (noteCoverImg) {
      dispatch(setNoteCoverImg(noteCoverImg));
    }
    dispatch(updateMode());
    dispatch(setSelectedRoomId(roomId));
    dispatch(setSelectedCategoryName(categoryName));
    navigate("/write");
  };

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <S.SettingButton onClick={handleClick}>
        {type === "config" ? (
          <BiCog size={22} color="#fff" />
        ) : (
          <S.Menu size={22} />
        )}
      </S.SettingButton>

      {showSettingMenu && (
        <DropdownContainer $top="30px">
          <ul>
            <li onClick={handleUpdateNote}>
              <p>수정하기</p>
            </li>
            <li onClick={handleDeleteModal}>
              <p>삭제하기</p>
            </li>
          </ul>
        </DropdownContainer>
      )}

      {openModal && (
        <DeleteNoteModal
          noteId={note.noteId}
          roomId={roomId}
          setOpenModal={setOpenModal}
        />
      )}
    </S.Container>
  );
};

export default Setting;
