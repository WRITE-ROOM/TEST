import * as S from "./RoomChallengeWeekBox.style";

const RoomChallengeWeekBox = ({
  state,
  title,
  week,
  percent,
  progress,
  progressText,
}) => {
  const data = [
    { text: "24.01.07", status: "complete" },
    { text: "24.01.08", status: "incomplete" },
    { text: "24.01.09", status: "complete" },
    { text: "24.01.10" },
    { text: "24.01.07", status: "complete" },
    { text: "24.01.08", status: "incomplete" },
    { text: "24.01.09", status: "complete" },
    { text: "24.01.10" },
    { text: "24.01.07", status: "complete" },
    { text: "24.01.08", status: "incomplete" },
    { text: "24.01.09", status: "complete" },
    { text: "24.01.10" },
  ];
  return (
    <S.Container>
      <S.ChallengeBox>
        <S.Title state={state}>{state}</S.Title>
        <h1>{title}</h1>
        {week && (
          <S.WeekContainer>
            <S.WeekBox>
              <p>1week</p>
              <p>2week</p>
              <p>3week</p>
              <p>4week</p>
            </S.WeekBox>
            <S.CircleContainer>
              {data.map(({ text, status }, index) => (
                <S.CircleWrapper key={index}>
                  <S.Circle status={status} />
                  <S.Text>{text}</S.Text>
                </S.CircleWrapper>
              ))}
            </S.CircleContainer>
          </S.WeekContainer>
        )}
        {progress && (
          <>
            <S.ProgressText>{progressText}</S.ProgressText>
            <S.ProgressBarContainer>
              <S.ProgressBar>
                <S.ProgressBarFill percent={percent}>
                  <p>{percent}%</p>
                </S.ProgressBarFill>
              </S.ProgressBar>
              <span>*최소 200자 이상 작성한 노트만 인정됩니다</span>
            </S.ProgressBarContainer>
          </>
        )}
      </S.ChallengeBox>
    </S.Container>
  );
};

export default RoomChallengeWeekBox;
