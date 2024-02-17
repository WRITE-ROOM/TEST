import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  padding: 12px 16px;
  color: black;
  position: relative;
  display: flex;
`;

export const AddEmojiButton = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const EmojiList = styled.ul`
  display: flex;
  gap: 6px;
  margin-top: 8px;

  li {
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AddedEmoji = styled.div`
  ul {
    display: flex;
    gap: 10px;
  }
`;
