import { BsExclamationCircle } from "react-icons/bs";
import { useState } from "react";
import * as S from "./RoomChallengeBox.style";

import { HiMiniUserCircle } from "react-icons/hi2";

import RoomModal from "../RoomModal/RoomModal";
import RoomModalSec from "../RoomModalSec/RoomModalSec";
import RoomChallengeWeekBox from "../RoomChallengeWeekBox/RoomChallengeWeekBox";
import RoomRoutineBox from "../RoomRoutineBox/RoomRoutineBox";
import RoomMyChallengeBox from "../RoomMyChallengeBox/RoomMyChallengeBox";
import { useSelector } from "react-redux";
import axios from "axios";

const RoomChallengeBox = () => {
  const [isMakeRoutine, setIsMakeRoutine] = useState(false);
  const [isMaking, setIsMaking] = useState(false);
  const [isAmount, setIsAmount] = useState(false);
  // 상단 bar 상태임

  const isAmounting = useSelector((state) => state.roomSettingInfo.isAmounting);

  const [openModal, setOpenModal] = useState(false);

  const [isMyChallenge, setIsMyChallenge] = useState(false);
  const [isChallenging, setIsChallenging] = useState(false);
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const [isGiveUp, setIsGiveUp] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const accessToken = localStorage.getItem("token");

  const data = useSelector((state) => state.challenge);
  const {
    achieveCount,
    challengeId,
    deadline,
    startDate,
    targetCount,
    userList,
  } = data;
  const progressPercents = parseInt((achieveCount / targetCount) * 100);
  const giveUpHandler = () => {
    setIsGiveUp(!isGiveUp);
  };
  const DeleteHandler = () => {
    setIsDelete(!isDelete);
  };
  const barHandler = (index) => {
    setIsSelectedIndex(index);
    setIsMakeRoutine(index === 0);
    setIsAmount(index === 1);
    setIsMyChallenge(index === 2);
  };

  const closeGiveUpModal = () => setIsGiveUp(false);

  const today = new Date();
  const barData = [
    {
      title: "루틴 만들기",
      icon: <BsExclamationCircle size={20} />,
    },
    {
      title: "목표량 달성하기",
      icon: <BsExclamationCircle size={20} />,
    },
    {
      title: "나의 챌린지",
    },
  ];

  const deleteChallenge = async () => {

    try {
      const res = await axios.patch(
        `/challenge-goals/give-up/${challengeId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setIsGiveUp(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.BarContainer>
        {barData.map(({ title, icon }, index) => (
          <S.Bar
            onClick={() => barHandler(index)}
            key={index}
            isSelected={isSelectedIndex === index}
          >
            <h1>{title}</h1>
            {icon}
          </S.Bar>
        ))}
      </S.BarContainer>
      {/* 루틴 내용 */}
      {/* {isMakeRoutine &&
        (isMaking ? (
          <>
            <RoomChallengeWeekBox
              state="도전중"
              title="일주일에 7일 글쓰기"
              week="true"
            />
            <S.LittleContainer>
              <h1>참여자</h1>
              <S.People>
                <HiMiniUserCircle color="gainsboro" size={40} />
                <HiMiniUserCircle color="gainsboro" size={40} />
              </S.People>
              <h1>목표</h1>
              <p>기간:2024.01.07~2024.02.06</p>
              <p>갯수: 40개</p>
            </S.LittleContainer>
            <S.GiveUpButton onClick={giveUpHandler}>
              챌린지 포기하기
            </S.GiveUpButton>
            {isGiveUp && (
              <RoomModal
                title1="챌린지를 정말 포기하시겠어요?"
                description="중도 포기하면 챌린지를 더 이어나갈 수 없어요."
                description2="정말 포기하시겠어요?"
                button2="포기하기"
              />
            )}
          </>
        ) : (
          <>
            <RoomRoutineBox
              text="일주일에 최대 7일을 설정할 수 있어요"
              range="7"
            />
            <RoomModalSec
              title1="수정 내용을 삭제하겠어요?"
              description="지금 나가시면 수정사항이 모두 삭제됩니다."
              button1="삭제하기"
              button2="저장하고 나가기"
            />
            <RoomModalSec
              title1="해당 목표로 챌린지를 시작하시겠어요?"
              description="*최소 200자 이상 작성한 노트만 챌린지로 인정해요"
              description2="*챌린지 목표는 수정할 수 없어요!"
              button1="삭제하기"
              button2="시작하기"
            />
          </>
        ))} */}
      {isAmount &&
        (isAmounting ? (
          <>
            <RoomChallengeWeekBox
              state={progressPercents === 100 ? "완료" : "도전중"}
              title="목표량"
              percent={`${progressPercents}`}
              progress={today > deadline ? false : true}
              progressText={`${targetCount}개 중 ${achieveCount}개 완료`}
            />
            <S.LittleContainer>
              <h1>참여자</h1>
              <S.UserWrapper>
                {userList.map(({ userId, profileImage, userName }) => (
                  <S.UserIcons key={userId}>
                    <img src={profileImage} alt={userName} />
                    <p>{userName}</p>
                  </S.UserIcons>
                ))}
              </S.UserWrapper>
              <h1>목표</h1>
              <p>
                기간:{startDate}~{deadline}
              </p>
              <p>갯수:{targetCount}개</p>
            </S.LittleContainer>
            <S.GiveUpButton onClick={giveUpHandler}>
              챌린지 포기하기
            </S.GiveUpButton>
            {isGiveUp && (
              <RoomModal
                title1="챌린지를 정말 포기하시겠어요?"
                description="중도 포기하면 챌린지를 더 이어나갈 수 없어요."
                description2="정말 포기하시겠어요?"
                button2="포기하기"
                isOpen={true}
                closeModal={closeGiveUpModal}
                deletefunction={deleteChallenge}
              />
            )}
          </>
        ) : (
          <>
            {/* 목표량 내용 */}
            <RoomRoutineBox
              text="최대 1000개까지 도전할 수 있어요!"
              description="일주일 단위로 최대 한달동안 도전할 수 있어요"
              range="30"
              toggle="true"
            />
            {/* <RoomModalSec
              title1="수정 내용을 삭제하겠어요?"
              description="지금 나가시면 수정사항이 모두 삭제됩니다."
              button1="삭제하기"
              button2="저장하고 나가기"
            />
            <RoomModalSec
              title1="해당 목표로 챌린지를 시작하시겠어요?"
              description="*최소 200자 이상 작성한 노트만 챌린지로 인정해요"
              description2="*챌린지 목표는 수정할 수 없어요!"
              button1="삭제하기"
              button2="시작하기"
            /> */}
          </>
        ))}
      {isMyChallenge &&
        (isChallenging ? (
          <>
            <RoomMyChallengeBox />
          </>
        ) : (
          <>
            <RoomChallengeWeekBox
              state="성공"
              title="일주일에 7일 글쓰기"
              week="true"
            />
            <S.LittleContainer>
              <h1>참여자</h1>
              <S.UserWrapper>
                <HiMiniUserCircle color="gainsboro" size={40} />
                <HiMiniUserCircle color="gainsboro" size={40} />
              </S.UserWrapper>
              <h1>목표</h1>
              <p>
                기간:{startDate}~{deadline}
              </p>
              <p>갯수: {targetCount}개</p>
            </S.LittleContainer>
            <S.GiveUpButton onClick={DeleteHandler}>
              챌린지 삭제하기
            </S.GiveUpButton>
            {/* {isDelete && (
              <RoomModal
                title1="챌린지 내역을 삭제하시겠어요?"
                button2="삭제"
              />
            )} */}
          </>
        ))}
    </S.Container>
  );
};

export default RoomChallengeBox;
