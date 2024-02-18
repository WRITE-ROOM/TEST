import * as S from "./RoomSettingNavbar.style";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import RoomModal from "../RoomModal/RoomModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRoomSettingInfoState } from "../../redux/roomSettingInfo";
import RoomModalSec from "../RoomModalSec/RoomModalSec";
import WriteRoomImg from "../../assets/writeRoomImg.png";
import axios from "axios";

const RoomSettingNavbar = ({
  title,
  onSave,
  member,
  myAuth,
  leaveRoom,
  hideSaveButton,
  challenge,
  postChallenge,
  setting,
}) => {
  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };
  const roomSettingInfoSelector = useSelector(selectRoomSettingInfoState);
  const params = useParams();
  const navigate = useNavigate();
  const roomId = params.roomId;
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const closeModal = () => setShowModal(false);
  const [isSave, setIsSave] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const receivedToken = localStorage.getItem("token");

  const postChallengeFunction = () => {
    closeModal();
    postChallenge();
    window.location.reload();
  };
  const handleConfirmLeaveRoom = () => {
    leaveRoom();
    navigate(`/main`);
  };
  const isImageBlob = (blob) => {
    return blob instanceof Blob && blob.type.startsWith("image/");
  };
  const roomImg = roomSettingInfoSelector.roomImg;
  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };

  const patchRoomInfo = async () => {
    const formData = new FormData();
    if (image === null) {
      const defaultImage = await fetch(WriteRoomImg).then((res) => res.blob());
      formData.append("roomImg", defaultImage, "WriteRoomImg.png");
    } else if (image === roomImg) {
    } else {
      if (!isImageBlob(image)) {
        const decodedImage = await decodeImage(image);
        const imageExtension = imageName.split(".").pop();
        const blobImage = new Blob([decodedImage], {
          type: `image/${imageExtension}`,
        });
        formData.append("roomImg", blobImage, imageName);
      }
    }
    formData.append(
      "request",
      JSON.stringify({
        roomTitle: roomSettingInfoSelector.roomTitle,
        roomIntroduction: roomSettingInfoSelector.roomIntroduction,
      })
    );
    try {
      const response = await axios.patch(
        `/rooms/updatedRoomInfo/${roomId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const saveInput = async () => {
    await patchRoomInfo();
    setIsSave(true);
    navigate(`/rooms/${roomId}`);
  };

  const saveModalButton = () => {
    saveInput();
    navigate(`/rooms/${roomId}`);
  };

  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ButtonWrapper>
        {!hideSaveButton && (
          <>
            {challenge ? (
              <S.SaveButton onClick={handleShowModal}>저장하기</S.SaveButton>
            ) : (
              <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
            )}
          </>
        )}
        <S.IconWrapper>
          {challenge && (
            <>
              {showModal && (
                <div>
                  <RoomModalSec
                    title1="해당 목표로 챌린지를 시작하시겠어요?"
                    description="*최소 200자 이상 작성한 노트만 챌린지로 인정해요"
                    description2="*챌린지 목표는 수정할 수 없어요!"
                    button1="삭제하기"
                    button2="시작하기"
                    isOpen={true}
                    onClick1={closeModal}
                    closeModal={closeModal}
                    onClick2={postChallengeFunction}
                  />
                </div>
              )}
              {/* <IoClose size={40} onClick={handleShowModal} /> */}
            </>
          )}
          {member && (
            <>
              {showModal && (
                <div>
                  <RoomModal
                    title1={`나의 권한은 ${
                      myAuth === "PARTICIPANT" ? "참여자" : "관리자"
                    }에요`}
                    title2="룸을 정말 떠나시겠어요?"
                    isOpen={showModal}
                    button2="떠나기"
                    deletefunction={handleConfirmLeaveRoom}
                    closeModal={closeModal}
                  />
                </div>
              )}
              {/* <IoClose size={40} onClick={handleShowModal} /> */}
            </>
          )}
          {setting && (
            <>
              {showModal && (
                <div>
                  <RoomModalSec
                    title1="수정 내용을 삭제하시겠어요?"
                    description="지금 나가면 수정사항이 모두 삭제됩니다."
                    button1="삭제하기"
                    button2="저장하고 나가기"
                    isOpen={true}
                    onClick1={() => navigate(`/rooms/${roomId}`)}
                    onClick2={() => saveModalButton()}
                    closeModal={closeModal}
                  />
                </div>
              )}
              {/* <IoClose size={40} onClick={handleShowModal} /> */}
            </>
          )}
          <IoClose
            size={40}
            onClick={() => {
              navigate(`/rooms/${roomId}`);
            }}
          />
        </S.IconWrapper>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default RoomSettingNavbar;
