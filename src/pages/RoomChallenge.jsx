import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import * as S from "./RoomChallenge.style";
import RoomChallengeBox from "../components/RoomChallengeBox/RoomChallengeBox";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setRoomSettingIsAmounting } from "../redux/roomSettingInfo";
import { useEffect } from "react";
import { setChallengeData } from "../redux/challenge";

const RoomChallenge = () => {
  const challenge = useSelector((state) => state.challenge);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("token");
  const roomId = useParams().roomId;
  const isAmounting = useSelector((state) => state.roomSettingInfo.isAmounting);

  const postChallenge = async () => {
    try {
      const params = { roomId: roomId };
      const res = await axios.post(`/challenge-goals/create`, challenge, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(setRoomSettingIsAmounting(true));
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getChallengeGoals = async () => {
    try {
      const response = await axios.get(`/challenge-goals/${roomId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response.data.result;
      dispatch(setChallengeData(data));
      dispatch(setRoomSettingIsAmounting(true));

    } catch (error) {
      console.log(error);
      dispatch(setRoomSettingIsAmounting(false));
    }
  };
  useEffect(() => {
    getChallengeGoals(); // Call the getChallengeGoals function
  }, []);
  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar
          title="챌린지 관리"
          challenge={true}
          postChallenge={postChallenge}
        />
        <RoomChallengeBox />
      </S.Contents>
    </S.Wrapper>
  );
};

export default RoomChallenge;
