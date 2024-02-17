import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChallengeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid 3px gainsboro;
  width: 90%;
  height: auto;
  gap: 10px;

  h1 {
    font-size: larger;
    font-weight: 400;
  }
`;

const getColor = (state) => {
  if (state === "성공") {
    return "#007bff"; // 파란색
  } else if (state === "실패") {
    return "#dc3545"; // 붉은 색
  } else {
    return "#b5a995"; // 기본 색
  }
};
export const Title = styled.p`
  color: ${({ state }) => getColor(state)};
  padding-top: 50px;
`;

export const WeekContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeekBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: solid 3px gainsboro;
  p {
    padding: 45px;
    font-size: 20px;
  }
`;

export const CircleContainer = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(7, 75px);
  grid-template-rows: repeat(4, 75px);
  gap: 30px;
  place-items: center; // 가운데 정렬
`;

export const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 5px;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    if (status === "complete") return "#b5a995";
    if (status === "incomplete") return "#704c4c";
    return "white";
  }};
  border: ${({ status }) => {
    if (status === "complete") return "none";
    if (status === "incomplete") return "none";
    return "1px solid black";
  }};
`;

export const Text = styled.p`
  color: #b5a995;
`;

export const ProgressText = styled.div`
  font-size: 16px;
  color: #b5a995;
`;

export const ProgressBarContainer = styled.div`
  width: 80%;
  margin: 20px 0px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 20px;
    color: gray;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gainsboro;
`;

export const ProgressBarFill = styled.div`
  width: ${(props) => props.percent}%;
  height: 30px;
  border-radius: 10px;
  background-color: #b5a995;
  display: flex;
  align-items: center;
  p {
    color: #b5a995;
    font-weight: bolder;
    margin-left: 900px;
  }
`;
