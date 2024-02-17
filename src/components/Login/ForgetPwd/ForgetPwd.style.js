import styled from "styled-components";

export const App = styled.div`
  width: 100%:  
  height: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 300px;

  h1 {
    font-family: Noto Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;    
    margin-bottom: 10px;
  }

  p {
    font-family: Noto Sans;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    margin-bottom: 10px;
  }

  input {
    width: 310px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid rgba(229, 229, 229, 1);
    padding-left: 10px;
    margin-bottom: 10px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};

  }
  ::placeholder {
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;   
    color: rgba(217, 217, 217, 1); 
  }

  button {
    width: 320px;
    height: 45px;
    border-radius: 5px;
    border: none;
    background: rgba(181, 169, 148, 1);
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
  }

  h6 {
    width: 320px;
    text-align: left;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

