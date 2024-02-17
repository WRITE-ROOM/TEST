import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  gap: 5px;
  height: 250px;

  h1 {
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
  }
  p {
    color: gray;
  }
`;

export const DeleteWrapper = styled.button`
  margin-left: 80%;
  margin-bottom: 7%;

  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;

export const FirstButton = styled.button`
  cursor: pointer;
  border: gainsboro 1px solid;
  width: 180px;
  padding: 15px 40px;
  font-size: 12px;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

export const SecondButton = styled.button`
  cursor: pointer;
  border: gainsboro 1px solid;
  color: white;
  width: 180px;
  padding: 15px 40px;
  font-size: 12px;
  border-radius: 10px;
  background-color: #b5a995;
`;

export const CloseBtn = styled(IoClose)`
  color: ${(props) => props.theme.textColor};
`