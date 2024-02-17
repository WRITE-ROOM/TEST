import styled from "styled-components";

export const RoutineBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 40px;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
  input {
    background-color: #f0f0f0;
    width: 80px;
    height: 20px;
    border: none;
    border-radius: 10px;
  }
`;

export const People = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

export const CountBox = styled.div`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #b5a995;
  box-shadow: 1px 1px 8px 1px ${(props) => props.theme.shadowColor};
`;

export const CalendarBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  input {
    background-color: ${(props) => props.theme.SNBSearchColor};
    font-size: 14px;
    color: #b5a995;
    width: 120px;
    height: 30px;
    border-radius: 30px;
    text-align: center;
  }
`;

export const ExampleText = styled.p`
  font-size: larger;
  color: gainsboro;
  line-height: 36px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
export const ToggleButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  span {
    border: 1px solid black;
    border-radius: 50%;
    width: 70%;
    height: 70%;
  }
`;

export const CheckIcon = styled.div`
  position: absolute;
  width: 15px;
  height: 10px;
  border: 2px solid #b5a995;
  border-top: 0;
  border-right: 0;
  transform: rotate(-45deg);
  transform-origin: 25% 25%;
`;
