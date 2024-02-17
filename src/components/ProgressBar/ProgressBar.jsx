import { useSelector } from "react-redux";
import * as S from "./ProgressBar.style";
import { selectRoomInfoState, setRoomInfo } from "../../redux/roomInfo";
import challenge, { selectChallengeState } from "../../redux/challenge";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ProgressBar = ({ percent }) => {
  const data = useSelector(selectChallengeState);
  const accessToken = localStorage.getItem("token");
  const { challengeId } = data;
  const [target, setTarget] = useState("");
  const getMyChallengeGoals = async (challengeId) => {
    try {
      const response = await axios.get(
        `https://dev.writeroom.shop/my-challenges/challenge-goals/${challengeId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setTarget(response.data.result.targetCount);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (challengeId) {
      getMyChallengeGoals(challengeId);
    }
  }, [challengeId]);

  return (
    <S.ProgressBarContainer>
      <S.ProgressBar>
        <S.ProgressBarFill percent={percent}>
          <p>{percent}%</p>
        </S.ProgressBarFill>
      </S.ProgressBar>
      <S.ProgressLabel>
        <p>{target}개 글쓰기 도전중!</p>
      </S.ProgressLabel>
    </S.ProgressBarContainer>
  );
};
export default ProgressBar;
