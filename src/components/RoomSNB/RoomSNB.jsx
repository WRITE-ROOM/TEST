import axios from "axios";
import * as S from "./RoomSNB.style";
import { GoGear } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import ProgressBar from "../ProgressBar/ProgressBar";
import { CategoryToggle } from "../CategoryToggle/CategoryToggle";
import { useParams, useNavigate } from "react-router-dom";
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

const RoomSNB = ({ isOpen, handleRoomSNB }) => {
  const receivedToken = localStorage.getItem("token");
  const receivedId = localStorage.getItem("id"); // userId임
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const roomId = params.roomId;
  const roomInfoSelector = useSelector(selectRoomInfoState);
  const categoryInfoSelector = useSelector(
    (state) => state.category.categoryList
  );

  const [allNoteCount, setAllNoteCount] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const changePage = (page) => {
    navigate(`/rooms/${page}/${roomId}`);
  };
  const getRoomMember = async () => {
    try {
      const response = await axios.get(`/rooms/updateAt/${roomId}?page=0`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(setRoomMember(response.data.result));
    } catch (error) {
      console.error("이건 getRoomMember 에러:", error);
    }
  };
  const getChallengePercent = async () => {
    try {
      const response = await axios.get(`/rooms/challenges/${roomId}`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(setChallengePercent(response.data.result));
    } catch (error) {
      console.error("이건 getChallenge 에러:", error);
    }
  };

  const getNoteCount = async () => {
    try {
      const response = await axios.get(`/categorys/category/${roomId}`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(setCategory(response.data.result));
      setAllNoteCount(response.data.result.allCountNote)
    } catch (error) {
      console.error("이건 getNoteCount 에러:", error);
    }
  };

  useEffect(() => {
    getRoomMember();
    getChallengePercent();
    getNoteCount();
  }, []);
  roomInfoSelector.memberInfo[0]?.updateAt?.split(", ");

  return (
    <div>
      {isOpen ? (
        <S.Container>
          <S.TitleBox>
            {roomInfoSelector && <h2>{roomInfoSelector.roomTitle}</h2>}
            <S.IconsBox>
              <S.ToolTipWrapper>
                <UseToolTip message="메뉴 닫기">
                  <MdKeyboardDoubleArrowLeft
                    color="gray"
                    size={30}
                    onClick={handleRoomSNB}
                  />
                </UseToolTip>
              </S.ToolTipWrapper>
              <S.ToolTipWrapper>
                <UseToolTip message="룸관리">
                  <GoGear size={30} onClick={() => changePage("setting")} />
                </UseToolTip>
              </S.ToolTipWrapper>
            </S.IconsBox>
          </S.TitleBox>
          <S.Line />
          <S.BasicBox>
            <S.TitleBox>
              <h2>멤버</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip message="멤버 관리">
                    <GoGear
                      color=""
                      size={30}
                      onClick={() => changePage("member")}
                    />
                  </UseToolTip>
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
            <S.TitleBox>
              <h2>챌린지</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip message="챌린지 관리">
                    <GoGear size={30} onClick={() => changePage("challenge")} />
                  </UseToolTip>
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
            <S.TitleBox>
              <h2>카테고리({allNoteCount})</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip message="카테고리 관리">
                    <GoGear size={30} onClick={() => changePage("category")} />
                  </UseToolTip>
                </S.ToolTipWrapper>
              </S.IconsBox>
            </S.TitleBox>
            {categoryInfoSelector.categoryList?.length > 0 // 옵셔널 체이닝 사용
              ? categoryInfoSelector.categoryList.map(
                  ({ categoryId, categoryName, countNote }) => (
                    <CategoryToggle
                      name={categoryName}
                      countNote={countNote}
                      key={categoryId}
                      room={roomInfoSelector}
                    />
                  )
                )
              : ""}
          </S.BasicBox>
        </S.Container>
      ) : (
        <S.ToolTipWrapper>
          <UseToolTip message="메뉴 열기">
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
