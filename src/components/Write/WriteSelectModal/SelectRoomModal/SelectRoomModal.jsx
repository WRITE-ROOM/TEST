import React, { useEffect, useState } from "react";
import { SimpleContainer } from "../../../Header/Dropdown.style";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import * as M from "./SelectRoomModal.style";

import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setCurrentModal,
  setSelectedRoom,
  resetSelectedCategory,
} from "../../../../redux/selectModal";
import NewRoomModal from "../../../Main/NewRoomModal/NewRoomModal";
import axios from "axios";
import { setCategory } from "../../../../redux/category";

const SelectRoomModal = () => {
  const dispatch = useDispatch();
  const [showMoreRoom, setShowMoreRoom] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const rooms = useSelector((state) => state.room.room);

  // 선택된 룸의 카테고리 리스트들
  const roomId = useSelector((state) => state.selectModal.selectedRoom.roomId);

  const handleSelectedRoom = (room) => {
    dispatch(
      setSelectedRoom({ roomTitle: room.roomTitle, roomId: room.roomId })
    );
    dispatch(resetSelectedCategory());
    dispatch(setCurrentModal("Category"));

  };


  const categoryList = useSelector((state) => state.category.categoryList);

  // useEffect(() => {
  //   if (roomId) {
  //     fetchCategoryList();
  //   }
  // }, [roomId]);

  return (
    <M.Container>
      <SimpleContainer $width="320px" $top="0" $padding="16px 16px 8px 16px">
        <M.Rooms>
          {rooms.slice(0, 3).map((room, index) => (
            <M.Room key={index} onClick={() => handleSelectedRoom(room)}>
              {room.roomTitle}
            </M.Room>
          ))}
          {showMoreRoom &&
            rooms.slice(3).map((room, index) => (
              <M.Room key={index} onClick={() => handleSelectedRoom(room)}>
                {room.roomTitle.length > 18
                  ? room.roomTitle.slice(0, 18) + "..."
                  : room.roomTitle}
              </M.Room>
            ))}
        </M.Rooms>

        <M.ShowMore onClick={() => setShowMoreRoom(true)}>
          <IoIosArrowDown />
        </M.ShowMore>

        <M.CreateRoom onClick={openModal}>
          <FiPlus size={18} />
          <p>룸 추가하기</p>
        </M.CreateRoom>
        {isModalOpen && <NewRoomModal
          onClose={closeModal}
          doNotNavigate={true}
        />}
      </SimpleContainer>
    </M.Container>
  );
};

export default SelectRoomModal;