import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 80%;
  margin: 20px 0px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  border: solid 1px;
  border-radius: 10px;
`;

export const ProgressBarFill = styled.div`
  width: ${(props) => props.percent}%;
  height: 20px;
  border-radius: 10px;
  background-color: #b5a995;
  p {
    margin-left: 200px;
  }
`;

export const ProgressLabel = styled.span`
  margin-top: 10px;
  font-size: 18px;
  p {
    margin-top: 10px;
    color: #b5a995;
  }
`;
