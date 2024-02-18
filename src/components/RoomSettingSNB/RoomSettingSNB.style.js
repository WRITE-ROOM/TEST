import styled from "styled-components";

export const Container = styled.div`
  width: 140px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 3px 0 4px rgba(0, 0, 0, 0.07);
`;

export const SNBBox = styled.div`
  background-color: ${(props) =>
    props.isActive ? props.theme.borderColor : props.theme.bgColor};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  font-weight: 500;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
`;
