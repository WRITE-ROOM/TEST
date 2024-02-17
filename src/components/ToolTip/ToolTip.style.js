import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 94px;
  height: 32px;
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: -50px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    font-weight: 400;
    color: black;
  }

  // 말풍선 삼각형
  &:after {
    border-top: 10px solid #fff;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 32px;
    left: 10px;
  }
`;
