import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;

  gap: 16px;
`;

export const MemberList = styled.div`
  display: flex;
  gap: 16px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 36px;
  }

  img {
    width: 38px;
    height: 38px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const AddButton = styled.div`
  position: relative;
`;
