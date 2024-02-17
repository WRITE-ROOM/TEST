import styled from "styled-components";

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`
export const Modal = styled.div`
	width: 400px;
	height: 238px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
	z-index: 100;
	
  button {
    margin-top: 50px;
    width: 350px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid rgba(229, 229, 229, 1);
	background-color: ${(props) => props.theme.SNBSearchColor};
	color: ${(props) => props.theme.textColor};
    cursor: pointer;
  }
`

export const Title = styled.div`
  margin-top: 70px;
  h1 {
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }
`