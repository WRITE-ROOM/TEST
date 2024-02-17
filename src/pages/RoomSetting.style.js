import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 50%;
  position: relative;
`;

export const DeleteImgButton = styled.button`
  color: white;
  background: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  margin-top: 6%;
  margin-left: 85%;
`;

export const DeleteButton = styled.button`
  color: #b5a995;
  cursor: pointer;
  font-size: medium;
  background: transparent;
  border: none;
  border-bottom: 3px #b5a995 solid;
`;

export const StyledFileInput = styled.div`
  width: 100%;
  height: 100%;
  label {
    width: 100%;
    height: 100%;
    background-color: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
