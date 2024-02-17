import React from "react";
import * as C from "./ChallengeAchieved.style";
import { StyledButton } from "../../../pages/Write.style";
import { useNavigate } from "react-router-dom";

const ChallengeAchieved = ({ roomId, noteId }) => {
  const navigate = useNavigate();
  return (
    <C.Background>
      <C.Container>
        <C.Text>
          <h3>
            축하합니다!
            <br />
            오늘의 챌린지를 달성했어요!
          </h3>
          <p>챌린지 진행도를 보러 가실까요?</p>
        </C.Text>

        <C.Buttons>
          <StyledButton
            $width="170px"
            $backgroundColor="#fff"
            $border="1px solid #e5e5e5"
            fontWeight="300"
            onClick={() => navigate(`/rooms/${roomId}`)}
          >
            괜찮아요
          </StyledButton>

          <StyledButton
            $width="170px"
            $backgroundColor="#B5A994"
            $color="#fff"
            fontWeight="300"
            onClick={() => navigate(`/rooms/challenge/${roomId}`)}
          >
            보러갈래요
          </StyledButton>
        </C.Buttons>
      </C.Container>
    </C.Background>
  );
};

export default ChallengeAchieved;
