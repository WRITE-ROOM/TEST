import * as S from "./RoomMyChallengeBox.style";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { useState } from "react";
import RoomModal from "../RoomModal/RoomModal";

const RoomMyChallengeBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const testData = [
    {
      text: "일주일에 7일 글쓰기",
      iconNum: 2,
      date: "2024.01.20",
      state: "성공",
    },
    {
      text: "일주일에 7일 글쓰기",
      iconNum: 3,
      date: "2023.01.10",
      state: "실패",
    },
    {
      text: "100개 글쓰기",
      iconNum: 2,
      date: "2023.12.30",
      state: "성공",
    },
    {
      text: "30개 글쓰기",
      iconNum: 5,
      date: "2023.12.08",
      state: "실패",
    },
  ];
  return (
    <S.Container>
      {testData.map(({ text, iconNum, date, state }, index) => (
        <S.ChallengeBar key={index}>
          <div>
            <S.IconWrapper>
              <S.Text>{text}</S.Text>
              {[...Array(Math.min(iconNum, 4))].map((_, i) => (
                <HiMiniUserCircle color="gainsboro" size={30} key={i} />
              ))}
              {iconNum > 4 && (
                <IoEllipsisHorizontalCircle color="gainsboro" size={30} />
              )}
            </S.IconWrapper>
          </div>
          <S.IconWrapper2>
            <p>{date}</p>
            <S.ChallengeState>{state}</S.ChallengeState>
            <S.TrashIcon onClick={modalHandler} />
          </S.IconWrapper2>
        </S.ChallengeBar>
      ))}
      {isModalOpen && (
        <RoomModal title1="챌린지 내역을 삭제하시겠어요?" button2="삭제" />
      )}
    </S.Container>
  );
};

export default RoomMyChallengeBox;
