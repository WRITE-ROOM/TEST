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
	z-index: 99;
`
export const Modal = styled.div`
	width: 400px;
	height: 248px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	border-radius: 10px;
	background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
	z-index: 100;
`
export const Top = styled.div`
	width; 400px;
	height: 40px;
    // align-items: flex-end;
	p {
		width: 345px;
		height: 24px;
		font-family: Pretendard;
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	button {
		width: 15px;
		height: 15px;
		background: red;
		cursor: pointer;
	}
`

export const closeBtn = styled(IoClose)`
	cursor: pointer;
`


export const Info = styled.div`
    position: relative;
    bottom: 20px;
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 { 
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;        
        margin: 10px 0;
    }
    p {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;      
    }
`

export const BtnBox = styled.div`
    width: 400px;
    height: 45px;  
    display: flex;
    align-items: center;
	justify-content: space-around;
`
export const DeleteBtn = styled.div`
	width: 171px;
	height: 45px;
	display: flex;
	align-items: center;
    justify-content: center;
	border-radius: 10px;
	background-color: ${(props) => props.theme.SNBSearchColor};
	cursor: pointer;

	p {
		width: 60px;
		margin-left: 15px;
		font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
	}
`
export const SaveBtn = styled.div`
    width: 171px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
    background: rgba(181, 169, 148, 1);
    color: white;
	cursor: pointer;
    p {
		width: 60px;
		margin-left: 15px;
		font-family: Pretendard;
		font-size: 16px;
		font-weight: 300;
		color: white;
	}

`

