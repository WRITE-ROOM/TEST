import React, { useEffect, useState } from "react";
import * as S from "./MainInfo.style";
import MainMenuModal from "../MainMenuModal/MainMenuModal";
import UserModal from "../UserModal/UserModal";
import { HiMiniUserCircle } from "react-icons/hi2";
import { useSelector } from "react-redux";

export default function MainInfo({ room, roomIndex, roomId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const rooms = useSelector((state) => state.room.room);
  const userList = room.userRoomList.slice(0, 3);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const truncateTitle = (title) => {
    const maxLength = 18;
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };
  return (
    <div>
      <S.Container>
        <S.Left>
          <S.RoomName>{truncateTitle(room.roomTitle)}</S.RoomName>
          <S.editTime>{room.updatedAt} 편집</S.editTime>
        </S.Left>
        <S.Right>
          <div 
            style={{ display: "flex" }} 
            onMouseEnter={() => setUserModalOpen(true)}
            onMouseLeave={() => setUserModalOpen(false)}>
            {userList.map((user, index) => (
              <S.Users size="18" color="rgba(181, 169, 148, 1)" />
            ))}
          </div>
          {/* <div style={{ display: "flex" }}>
              <S.Users size="18" color="rgba(181, 169, 148, 1)" />
              <S.Users size="18" color="rgba(181, 169, 148, 1)" />
              <S.Users size="18" color="rgba(181, 169, 148, 1)" />
          </div> */}
          <S.Menu onClick={handleOpenModal} />
        </S.Right>
      </S.Container>
      {userModalOpen && <UserModal roomIndex={roomIndex} roomId={roomId} userList={userList}/>}
      {isModalOpen ? (
        <MainMenuModal roomId={roomId} roomIndex={roomIndex} />
      ) : null}
    </div>
  );
}
