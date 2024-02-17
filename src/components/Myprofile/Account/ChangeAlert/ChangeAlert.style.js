import styled from 'styled-components'

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
`
export const Modal = styled.div`
	width: 476px;
	height: 93px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
    background: rgba(157, 136, 112, 1);	
	z-index: 99;

	p {
		font-family: Pretendard;
		font-size: 20px;
		font-weight: 600;
        color: white;
	}
`