import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SaveButton = styled.button`
  background-color: #b5a995;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 4px 19px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
