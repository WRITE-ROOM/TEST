import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Wrapper = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Page = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const CategoryBar = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border: gainsboro 1px solid;
  border-radius: 10px;
  padding: 20px 10px;
  box-sizing: border-box;
  p {
    color: #b5a995;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 20px 10px;
  background-color: #b5a995;
  color: white;
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

export const CategoryModal = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 150px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  border-radius: 10px;
  border: gainsboro 3px solid;
  input {
    border: none;
    width: 80%;
    height: 100%;
  }
  input:focus {
    outline: none;
  }

  span {
    position: absolute;
    font-weight: 400;
    color: #b5a995;
    margin-left: 350px;
    margin-top: 7px;
  }
`;

export const ModalButton = styled.button`
  color: white;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #b5a995;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

export const ModalTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 20px;
  }
`;

export const CloseIcon = styled(IoClose)`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  gap: 10px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 3px 0px;
  border-radius: 10px;
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  background-color: #e5e5e5;
  color: #939393;
`;

export const SaveButton = styled(Button)`
  background-color: #b5a995;
  color: white;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  border: gainsboro 1px solid;
  border-radius: 10px;
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 10px;

  justify-content: space-between;
`;

export const EditCategoryInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;

export const Limit = styled.p`
  width: 10%;
  text-align: right;
  font-size: 13px;
  font-weight: 300;
  text-decoration: underline;
  color: #939393;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;

  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 400px;
  height: 250px;
  padding: 30px 24px;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: black;
`;

export const Text = styled.div`
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 48px;
    color: #939393;

    strong {
      font-weight: 400;
      color: #9d8870;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  width: 170px;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#fff"};
  border: 1px solid #e5e5e5;
  font-weight: 300;
  font-size: 16px;
  padding: 9px 0;
  border-radius: 10px;
  cursor: pointer;
`;
