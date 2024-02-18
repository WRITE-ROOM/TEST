import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img {
    margin-top: 5%;
    width: 30%;
    height: 30%;
  }
  h1 {
    margin-top: 5%;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }

  button {
    margin-top: 2.5%;
    width: 50%;
    height: 45px;
    border: none;
    border-radius: 10px;
    background: rgba(181, 169, 148, 1);
    color: white;
    cursor: pointer;
  }
`;
