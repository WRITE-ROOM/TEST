import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import * as S from "./RoomMember.style";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import RoomModal from "../components/RoomModal/RoomModal";

import { useDispatch, useSelector } from "react-redux";
import { selectRoomSettingInfoState } from "../redux/roomSettingInfo";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  setRoomSettingMember,
  setRoomSettingInfo,
} from "../redux/roomSettingInfo";
import axios from "axios";

const RoomMember = () => {
  const roomInfoSelector = useSelector(selectRoomSettingInfoState);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userData, setUserData] = useState("");

  const getRoomInfo = async () => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/rooms/${roomId}/list?page=0`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      const data = response.data.result;
      dispatch(setRoomSettingInfo(data));
    } catch (error) {
      console.error("getRoomTitle 에러:", error);
    }
  };

  const getRoomMemberList = async () => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/rooms/${roomId}/userRoom`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
      dispatch(setRoomSettingMember(response.data.result));
      setUserData(response.data.result.userRoomLists);
    } catch (error) {
      console.error("이건 getRoomMember 에러:", error);
    }
  };

  useEffect(() => {
    getRoomInfo();
    getRoomMemberList();
  }, []);

  const memberInfo = useSelector(
    (state) => state.roomSettingInfo?.memberInfo?.userRoomLists
  );
  console.log(memberInfo);
  const myName = roomInfoSelector?.memberInfo?.name;
  const myAuth = roomInfoSelector?.memberInfo?.authority;

  const message = {
    master: "룸 내 모든 기능을 이용할 수 있어요",
  };
  const params = useParams();
  const roomId = params.roomId;
  const receivedToken = localStorage.getItem("token");
  const handleConfirmLeaveRoom = () => {
    leaveRoom();
    navigate(`/main`);
  };
  const patchUserAuth = async (authority, roomId, receivedId) => {
    try {
      const response = await axios.patch(
        `https://dev.writeroom.shop/rooms/authority/${roomId}/${receivedId}?authority=${authority}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
    } catch (error) {
      console.error("patchUserAuth 에러:", error);
      console.log(error);
    }
  };

  const deleteRoomMember = async (roomId, outUserId) => {
    try {
      const response = await axios.delete(
        `https://dev.writeroom.shop/rooms/${roomId}/${outUserId}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
    } catch (error) {
      console.error("deleteRoomMember 에러:", error);
    }
  };
  const leaveRoom = async () => {
    try {
      const response = await axios.delete(
        `https://dev.writeroom.shop/rooms/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
    } catch (error) {
      console.error("leaveRoomMember 에러:", error);
    }
  };

  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar
          title="멤버 관리"
          member={true}
          myAuth={myAuth}
          leaveRoom={leaveRoom}
        />
        <S.AuthBox>
          <h1>
            '{myName}'님의 권한
            {myAuth === "PARTICIPANT" ? (
              <span>참여자</span>
            ) : (
              <span>관리자</span>
            )}
          </h1>
          <p>{message?.master}</p>
        </S.AuthBox>
        <S.MemberContainer>
          <S.MemberBox>
            <h1>멤버 {memberInfo?.length}명</h1>
            <S.StyledSelect
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "ALL") {
                  setUserData(memberInfo);
                } else if (selectedValue === "MANAGER") {
                  const managers = memberInfo?.filter(
                    (member) => member.authority === "MANAGER"
                  );

                  setUserData(managers);
                } else if (selectedValue === "PARTICIPANT") {
                  const participants = memberInfo?.filter(
                    (member) => member.authority === "PARTICIPANT"
                  );
                  setUserData(participants);
                }
              }}
            >
              <S.StyledOption value="ALL">전체</S.StyledOption>
              <S.StyledOption value="MANAGER">관리자</S.StyledOption>
              <S.StyledOption value="PARTICIPANT">참여자</S.StyledOption>
            </S.StyledSelect>
          </S.MemberBox>
          {userData.length > 0 &&
            userData?.map((member) => (
              <S.MemberBox key={member?.userId}>
                <S.ProfileWrapper>
                  {member?.profileImg ? (
                    <S.ProfileImageWrapper
                      src={`${member?.profileImg}`}
                      alt={`${member?.name}`}
                    />
                  ) : (
                    <HiMiniUserCircle size={40} />
                  )}
                  <S.TextWrapper>
                    <p>{member?.name}</p>
                    {member?.authority === "PARTICIPANT" ? (
                      <span>참여자</span>
                    ) : (
                      <span>관리자</span>
                    )}
                  </S.TextWrapper>
                </S.ProfileWrapper>
                <S.StyledSelect
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (
                      selectedValue === "MANAGER" ||
                      selectedValue === "PARTICIPANT"
                    ) {
                      patchUserAuth(selectedValue, roomId, member?.userId);
                    } else if (selectedValue === "EXPORT") {
                      setSelectedUserId(member?.userId);
                      setOpenModal(true);
                    } else if (selectedValue === "LEAVE") {
                      setOpenModal2(true);
                    }
                  }}
                >
                  <S.StyledOption value="MANAGER">관리자</S.StyledOption>
                  <S.StyledOption value="PARTICIPANT">참여자</S.StyledOption>
                  {myAuth === "MANAGER" ? (
                    <S.StyledOption value="LEAVE">떠나기</S.StyledOption>
                  ) : (
                    <S.StyledOption value="EXPORT">내보내기</S.StyledOption>
                  )}
                </S.StyledSelect>
              </S.MemberBox>
            ))}
        </S.MemberContainer>
        {openModal && (
          <RoomModal
            isOpen={true}
            closeModal={() => setOpenModal(false)}
            deletefunction={() => deleteRoomMember(roomId, selectedUserId)}
            title1="해당 멤버를 정말 내보내시겠어요?"
            button2="내보내기"
          />
        )}
        {openModal2 && (
          <RoomModal
            title1={`나의 권한은 ${
              myAuth === "PARTICIPANT" ? "참여자" : "관리자"
            }에요`}
            title2="룸을 정말 떠나시겠어요?"
            button2="떠나기"
            isOpen={true}
            closeModal={() => setOpenModal2(false)}
            deletefunction={handleConfirmLeaveRoom}
          />
        )}
      </S.Contents>
    </S.Wrapper>
  );
};

export default RoomMember;
