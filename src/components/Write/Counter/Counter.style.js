import styled from "styled-components";

export const Counter = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    position: relative;
    font-size: 16px;
    font-weight: 300;
    color: #9d8870;
  }
`;

export const CounterDetail = styled.div`
  p {
    font-size: 14px;
    color: #000;
    text-align: left;
    line-height: 24px;
  }

  span {
    color: #9d8870;
  }
`;
