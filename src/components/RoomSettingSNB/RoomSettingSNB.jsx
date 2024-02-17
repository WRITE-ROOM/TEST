import { useNavigate, useParams } from "react-router-dom";
import * as S from "./RoomSettingSNB.style";

const RoomSettingSNB = () => {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId;

  const changePage = (page) => {
    navigate(`/rooms/${page}/${roomId}`);
  };
  return (
    <S.Container>
      <S.SNBBox
        onClick={() => changePage("setting")}
        isActive={window.location.pathname.includes("setting")}
      >
        룸 관리
      </S.SNBBox>
      <S.SNBBox
        onClick={() => changePage("member")}
        isActive={window.location.pathname.includes("member")}
      >
        멤버 관리
      </S.SNBBox>
      <S.SNBBox
        onClick={() => changePage("challenge")}
        isActive={window.location.pathname.includes("challenge")}
      >
        챌린지 관리
      </S.SNBBox>
      <S.SNBBox
        onClick={() => changePage("category")}
        isActive={window.location.pathname.includes("category")}
      >
        카테고리 관리
      </S.SNBBox>
    </S.Container>
  );
};

export default RoomSettingSNB;
