import styled from 'styled-components'
import { HiMiniUserCircle } from "react-icons/hi2";

export const Modal = styled.div`
	position: relative;
	top: -19px;
	left: 200px;
	width: 104px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.bgColor};
	border-radius: 10px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
	z-index: 98;

  h5 {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 300;
    color: rgba(157, 136, 112, 1);
    margin: 10px 0;
  }
`

export const User = styled.div`
  display: flex;
  // align-items: center;
  width: 104px;
  height: 17px;
  margin-bottom: 5px;
  
  p {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
`

export const Users = styled(HiMiniUserCircle)`
    margin: 0 10px;
    color: lightgray;
`