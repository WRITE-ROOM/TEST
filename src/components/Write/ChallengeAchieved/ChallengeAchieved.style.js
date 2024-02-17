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
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
