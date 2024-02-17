import styled from "styled-components";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BookContainer = styled.div`
  margin: 30px 0;
  width: 1168px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RecWord = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	width: 218px;
	height: 34px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 300;  
	text-decoration: underline;
`

export const NotBookMark = styled(FaRegBookmark) `
  color: ${(props) => props.theme.textColor};
  z-index: 90;
`

export const IsBookMark = styled(FaBookmark) `
  color: rgba(181, 169, 148, 1);
  z-index: 90;
`

export const TopicBox = styled.div`
  width: 258px;
  height: 442px;
  margin: 0 20px;
`