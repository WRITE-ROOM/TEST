import styled from "styled-components";
import { FiTrash } from "react-icons/fi";
export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ChallengeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  padding: 0px 20px;
  height: 50px;
  border-radius: 10px;
  border: gainsboro 2px solid;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    color: gray;
  }
`;

export const Text = styled.div`
  min-width: 150px;
`;

export const ChallengeState = styled.span`
  color: #b5a995;
  font-weight: bold;
`;

export const IconWrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    color: gray;
  }
`;

export const TrashIcon = styled(FiTrash)`
  cursor: pointer;
`;
