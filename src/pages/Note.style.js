import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  ${({ openSNB }) =>
    openSNB &&
    `  width: 80vw;
    margin-right:314px;
    
  `}
  ${({ openRoomSNB, openSNB }) =>
    !openRoomSNB &&
    !openSNB &&
    `
       width: 100%;
    `}
  ${({ openRoomSNB, openSNB }) =>
    openRoomSNB &&
    openSNB &&
    `
       width: 60vw;
    `}
  color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  aspect-ratio: 4 / 1;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => (props.img ? props.img : null)});

  position: absolute;
  z-index: -1;
`;

export const Tools = styled.div`
  width: 100%;
  padding: 40px 24px 0 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const NoteInfo = styled.div`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;

  p {
    font-size: 14px;
    font-weight: 300;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Upper = styled.div`
  display: flex;
  margin-bottom: 5px;

  div {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }

  align-items: flex-end;

  h1 {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const Lower = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0;
`;

export const TagContainer = styled.div`
  position: relative;

  ul {
    display: flex;
    gap: 6px;
  }
`;

export const Tag = styled.li`
  // width: 40px;
  min-width: 20px;
  padding: ${(props) => (props.$X ? "0px 6px 0px 10px" : "0px 10px")};

  height: 20px;
  background-color: ${(props) => props.theme.SNBInfoColor};

  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.tagColor};
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  span {
    display: flex;
    align-items: center;
    color: #939393;
    cursor: pointer;
  }
`;

export const HiddenTag = styled.ul`
  display: block !important;

  li {
    margin-bottom: 6px;
    padding: 0 10px;
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme.textColor};
  padding: 24px;

  ol {
    padding-left: 24px;
  }
  ul {
    padding-left: 24px;
    list-style: disc;
  }
  a {
    color: blue;
    text-decoration: underline;
  }

  blockquote {
    border-left: 4px solid #aaa;
    padding-left: 15px;
    margin: 10px 0;
    color: #555;
    font-style: italic;
  }
`;

export const StyledHr = styled.hr`
  height: 1px;
  border: none;
  color: ${(props) => (props.$color ? props.$color : "black")};
`;
