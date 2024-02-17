import styled from "styled-components";

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

export const Container = styled.div`
  width: 400px;
  height: 190px;
  background-color: ${(props) => props.theme.bgColor};

  border-radius: 10px;
  padding: 16px 20px;
  box-sizing: border-box;
  text-align: left;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CategoryName = styled.div`
  margin-bottom: 10px;
  p {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 6px;
  }

  input {
    width: 354px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.borderColor};
    outline: none;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    padding-left: 16px;
    box-sizing: border-box;
  }
  ::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;

export const CreateButton = styled.button`
  width: 356px;
  height: 42px;
  text-align: center;
  background-color: #b5a994;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 300;
  color: #fff;
`;
