import React, { useEffect, useState } from "react";
import * as S from "./InviteModal.style";
import { FiCopy } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectRoomIds } from "../../../redux/room";

export default function InviteModal({ isOpen, onClose, roomIndex, roomId }) {
  const roomIdList = useSelector(selectRoomIds);

  const location = useLocation();
  const copyURL = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  if (!isOpen) return null;
  return (
    <S.ModalBackground>
      <S.Modal>
        <S.Top>
          <p>친구를 룸으로 초대하기</p>
          <S.closeBtn size="20" onClick={onClose} />
        </S.Top>
        <S.RoomName>
          <h6>룸 초대 URL</h6>
          <p>{`localhost:3000/room/${
            roomIndex === undefined ? roomId : roomIdList[roomIndex]
          }`}</p>
        </S.RoomName>
        <h5>
          ※ 이 URL을 알고 있는 사람은 누구나 이 룸에 접속 가능합니다.
          <br />
          불특정 다수가 볼 가능성이 있는 장소에 올리는 것은 권장하지 않습니다. ※
        </h5>
        <S.CopyBtn
          onClick={() => {
            copyURL(
              `localhost:3000/rooms/${
                roomIndex === undefined ? roomId : roomIdList[roomIndex]
              }`
            );
          }}
        >
          <FiCopy color="white" />
          <p>링크 복사</p>
        </S.CopyBtn>
      </S.Modal>
    </S.ModalBackground>
  );
}
