import * as S from "./ParticipatePage.style";
import { useNavigate } from "react-router-dom";
import StartPageImg from "../assets/startPage.png";
import axios from "axios";
import { useParams } from "react-router-dom";
const ParticipatePage = () => {
  const navigate = useNavigate();
  const roomId = useParams().roomId;
  const accessToken = localStorage.getItem("token");

  const postParticipate = async () => {
    try {
      const response = await axios.post(
        `https://dev.writeroom.shop/rooms/roomParticipation/${roomId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      navigate(`/rooms/:${roomId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Container>
      <img src={StartPageImg} alt="스타트페이지"></img>
      <h1>글쓰기 연습을 위한 공간</h1>
      <button
        onClick={() => {
          postParticipate();
        }}
      >
        초대 수락하기
      </button>
    </S.Container>
  );
};

export default ParticipatePage;
