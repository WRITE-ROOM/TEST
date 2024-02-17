import styled from 'styled-components'
import { IoClose } from "react-icons/io5";

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
    z-index: 100;
`
export const Modal = styled.div`
	width: 476px;
	height: 248px;
	// padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	border-radius: 10px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
	z-index: 200;
`
export const Info = styled.div`
    position: relative;
    top: 20px;
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textColor};
    h2 { 
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;        
        margin: 0;
    }
    p {
        width: 395px;
        height: 19px;
        margin-top: 20px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        color: ${(props) => props.theme.accentColor};
    }
`

export const BtnBox = styled.div`
    width: 400px;
    height: 45px;  
    display: flex;
    align-items: center;
	justify-content: space-around;
`
export const CancelBtn = styled.div`
	width: 171px;
	height: 45px;
	display: flex;
	align-items: center;
    justify-content: center;
	border-radius: 10px;
    background-color: ${(props) => props.theme.SNBSearchColor};
    border: 1px solid rgba(229, 229, 229, 1);
	cursor: pointer;

	p {
		width: 60px;
		margin-left: 15px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
	}
`
export const SecessionBtn = styled.div`
    width: 171px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
    border: 1px solid rgba(229, 229, 229, 1);
	cursor: pointer;
    p {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;      
	}

`