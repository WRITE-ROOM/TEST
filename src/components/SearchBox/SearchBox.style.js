import styled from "styled-components";

export const Background = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 636px;
  border: 1px solid;
  border-color: black;
  border-radius: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 95%;
  height: 8%;

  input {
    border: none;
    height: 92%;
    width: 100%;
  }
`;
export const Line = styled.div`
  border-top: 1px solid;
  width: 100%;
`;

export const ResultBox = styled.div`
  height: 100%;
  width: 100%;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 60px;
  overflow-y: auto;
  max-height: 100%;
`;
export const FilterWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  color: grey;
  align-items: center;
  justify-content: space-between;

  width: 95%;
  height: 5%;
  margin-left: 50px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 30%;
  gap: 10px;
`;

export const MemberBox = styled.div`
  width: 80px;
  border: solid;
  border-radius: 10px;
  height: auto;
  margin-top: 10px;

  div {
    border-bottom: 1px solid;
    padding: 10px;
  }
`;
export const IconWrapper = styled.div`
  cursor: pointer;
`;
