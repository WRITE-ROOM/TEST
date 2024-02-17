import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Rooms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Room = styled.button`
  width: 100%;
  height: 30px;
  background-color: #b5a994;
  border-radius: 10px;

  display: flex;
  align-items: center;

  padding: 12px;
  box-sizing: border-box;

  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

export const ShowMore = styled.div`
  height: 20px;
  margin-top: 8px;
`;

export const CreateRoom = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 4px;
  font-size: 14px;
  font-weight: 300;
`;
