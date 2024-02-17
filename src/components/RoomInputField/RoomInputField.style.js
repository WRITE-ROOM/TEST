import styled from "styled-components";

export const InputBox = styled.div`
  padding: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 10px;

  div {
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
    width: 100%;
  }
  input {
    border: none;
    width: 95%;
    height: 40px;
    padding-left: 10px;
    background-color: transparent;
    color: ${(props) => props.theme.textColor};
  }
  span {
    font-weight: 400;
    color: gray;
  }
`;
