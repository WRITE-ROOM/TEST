import * as S from "./RoomSettingNavbar.style";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import RoomModal from "../RoomModal/RoomModal";
import { useState } from "react"; // Import useState hook
import RoomModalSec from "../RoomModalSec/RoomModalSec";

const RoomSettingNavbar = ({
  title,
  onSave,
  member,
  myAuth,
  leaveRoom,
  challenge,
  postChallenge,
}) => {
  const handleSave = () => {
    onSave();
  };

  const params = useParams();
  const navigate = useNavigate();
  const roomId = params.roomId;
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const postChallengeFunction = () => {
    closeModal();
    postChallenge();
    window.location.reload();
  };
  const handleConfirmLeaveRoom = () => {
    leaveRoom();
    navigate(`/main`);
  };
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ButtonWrapper>
        {!member && (
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
              <IoClose size={40} onClick={handleShowModal} />
            </>
          )}
          {!challenge && !member && (
            <IoClose
              size={40}
              onClick={() => {
                <IoClose size={40} onClick={handleShowModal} />;
              }}
            />
          )}
        </S.IconWrapper>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default RoomSettingNavbar;
