import styled from "styled-components";

export const Container = styled.div`
  width: 140px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 3px solid ${(props) => props.theme.borderColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.bgColor};
`;

export const SNBBox = styled.div`
  background-color: ${(props) => (props.isActive ? props.theme.borderColor : props.theme.bgColor)};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
`;
