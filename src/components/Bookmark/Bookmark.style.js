import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";

export const Container = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NotBookMark = styled(FaRegBookmark) `
  color: ${(props) => props.theme.textColor};
`
