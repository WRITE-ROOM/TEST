import { useSelector } from "react-redux";
import * as S from "./ProgressBar.style";

const ProgressBar = ({ percent }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar>
        <S.ProgressBarFill percent={percent}> 
          <p>{percent}%</p>
        </S.ProgressBarFill>
      </S.ProgressBar>
      <S.ProgressLabel>
        <p>챌린지 도전 중!</p>
      </S.ProgressLabel>
    </S.ProgressBarContainer>
  );
};
export default ProgressBar;
