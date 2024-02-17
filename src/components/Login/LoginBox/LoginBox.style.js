import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  height: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 394px;
  height: 606.62px;

  h5 { 
    margin-top:  20px;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 300;
    text-decoration: underline;
    color: rgba(147, 147, 147, 1);
    cursor: pointer;
  }
`;
export const Title = styled.div`
  width: 104px;
  height: 36px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const IsSignup = styled.div`
  width: 250px;
  height: 22px;
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    width: 138px;
    height: 22px;

    font-family: Pretendard;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  button {
    width: 90px;
    height: 22px;
    border: none;
    background: none;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const InputInfo = styled.div`
  width: 394px;
  height: 55px;
  margin: 8px 0;

  input {
    width: 382px;
    height: 55px;
    border-radius: 10px;
    border: 1px solid rgba(229, 229, 229, 1);
    padding-left: 10px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  ::placeholder {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
  }
  p {
    margin: 0;
    padding-left: 10px;

    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: red;
  }
`;

export const LoginButton = styled.div`
  width: 394px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 394px;
    height: 55px;
    border-radius: 10px;
    border: none;
    background: rgba(181, 169, 148, 1);
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 400;
    color: white;
    cursor: pointer;
  }
`;
