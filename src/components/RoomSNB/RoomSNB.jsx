import axios from "axios";
import * as S from "./RoomSNB.style";
import { GoPlusCircle } from "react-icons/go";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import ProgressBar from "../ProgressBar/ProgressBar";
import { CategoryToggle } from "../CategoryToggle/CategoryToggle";
import { useDispatch, useSelector } from "react-redux";
import UseToolTip from "../UseToolTip/UseToolTip";
import {
  setChallengePercent,
  selectRoomInfoState,
  setRoomMember,
} from "../../redux/roomInfo";
import InviteModal from "../Main/InviteModal/InviteModal";
import { useEffect, useState } from "react";
import { setCategory } from "../../redux/category";
import { setChallengeData } from "../../redux/challenge";
import { useNavigate, useParams } from "react-router-dom";

const RoomSNB = ({ isOpen, handleRoomSNB }) => {
  const navigate = useNavigate();
  const receivedToken = localStorage.getItem("token");
  const receivedId = localStorage.getItem("id"); // userId임
  const dispatch = useDispatch();
  const params = useParams();
  const roomId = params.roomId;
  const roomInfoSelector = useSelector(selectRoomInfoState);
  const categoryInfoSelector = useSelector(
    (state) => state.category.categoryList
  );
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const [allNoteCount, setAllNoteCount] = useState();

  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
  const handleMouseOver4 = () => {
    setIsHovered4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovered4(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const getRoomMember = async () => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/rooms/updateAt/${roomId}?page=0`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      dispatch(setRoomMember(response.data.result));
    } catch (error) {
      console.error("이건 getRoomMember 에러:", error);
    }
  };
  const getChallengePercent = async () => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/rooms/challenges/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      dispatch(setChallengePercent(response.data.result));
    } catch (error) {
      console.error("이건 getChallenge 에러:", error);
    }
  };

  const getNoteCount = async () => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/categorys/category/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      dispatch(setCategory(response.data.result));
      setAllNoteCount(response.data.result.allCountNote);
    } catch (error) {
      console.error("이건 getNoteCount 에러:", error);
    }
  };
  const getChallengeGoals = async () => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/challenge-goals/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      const data = response.data.result;
      dispatch(setChallengeData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChallengeGoals();
    getRoomMember();
    getChallengePercent();
    getNoteCount();
  }, []);
  return (
    <div>
      {isOpen ? (
        <S.Container>
          <S.TitleBox
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          >
            {roomInfoSelector && (
              <h2 onClick={() => navigate(`/rooms/${roomId}`)}>
                {roomInfoSelector.roomTitle}
              </h2>
            )}
            <S.IconsBox>
              <S.ToolTipWrapper>
                <UseToolTip arrow={true} message="메뉴 닫기">
                  <MdKeyboardDoubleArrowLeft
                    color="gray"
                    size={30}
                    onClick={handleRoomSNB}
                  />
                </UseToolTip>
              </S.ToolTipWrapper>
              <S.ToolTipWrapper>
                <UseToolTip
                  message="룸관리"
                  where="setting"
                  isHovered={isHovered1}
                />
              </S.ToolTipWrapper>
            </S.IconsBox>
          </S.TitleBox>
          <S.Line />
          <S.BasicBox>
            <S.TitleBox
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
            >
              <h2>멤버</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip
                    message="멤버 관리"
                    where="member"
                    isHovered={isHovered2}
                  />
                </S.ToolTipWrapper>
              </S.IconsBox>
            </S.TitleBox>
            {roomInfoSelector.memberInfo.map(
              ({ name, userId, profileImg, updateAt }) => {
                const updateAtArr = updateAt.split(", ");
                return (
                  <S.Member key={userId}>
                    {profileImg ? (
                      <S.MemberProfile>
                        <img alt={`${name}`} src={`${profileImg}`} />
                      </S.MemberProfile>
                    ) : (
                      roomInfoSelector.memberInfo && (
                        <BsPersonCircle size={30} />
                      )
                    )}
                    <S.MemberInfoWrapper>
                      <h2>{name}</h2>
                      <p>{updateAtArr.pop()}</p>
                    </S.MemberInfoWrapper>
                  </S.Member>
                );
              }
            )}
            <S.Plus>
              <GoPlusCircle size={30} onClick={handleModalOpen} />
              <h2>초대하기</h2>
            </S.Plus>
            <InviteModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              roomId={roomId}
            />
          </S.BasicBox>
          <S.BasicBox>
            <S.TitleBox
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
            >
              <h2>챌린지</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip
                    message="챌린지 관리"
                    where="challenge"
                    isHovered={isHovered3}
                  ></UseToolTip>
                </S.ToolTipWrapper>
              </S.IconsBox>
            </S.TitleBox>
            {roomInfoSelector.challengePercent.goalsId && (
              <ProgressBar
                percent={roomInfoSelector.challengePercent.goalsAchieveRate}
              />
            )}
            {roomInfoSelector.challengePercent.routinId && (
              <ProgressBar
                percent={roomInfoSelector.challengePercent.routineAchieveRate}
              />
            )}
          </S.BasicBox>
          <S.BasicBox>
            <S.TitleBox
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
            >
              <h2>카테고리({allNoteCount})</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip
                    isHovered={isHovered4}
                    message="카테고리 관리"
                    where="category"
                  ></UseToolTip>
                </S.ToolTipWrapper>
              </S.IconsBox>
            </S.TitleBox>
            {categoryInfoSelector.categoryList?.length > 0 &&
              categoryInfoSelector.categoryList.map(
                ({ categoryId, categoryName, countNote }) => (
                  <CategoryToggle
                    name={categoryName}
                    countNote={countNote}
                    key={categoryId}
                    room={roomInfoSelector}
                  />
                )
              )}
          </S.BasicBox>
        </S.Container>
      ) : (
        <S.ToolTipWrapper>
          <UseToolTip message="메뉴 열기" arrow={true}>
            <S.CursorWrapper>
              <MdKeyboardDoubleArrowRight size={20} onClick={handleRoomSNB} />
            </S.CursorWrapper>
          </UseToolTip>
        </S.ToolTipWrapper>
      )}
    </div>
  );
};

export default RoomSNB;
