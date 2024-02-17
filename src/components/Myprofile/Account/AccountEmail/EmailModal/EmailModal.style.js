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
    z-index: 200;
`
export const Modal = styled.div`
	width: 476px;
	height: 248px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: white;
	z-index: 99;

    h1 {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
    }
    h6 {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(147, 147, 147, 1);
        margin: 0;
    }
`
export const Info = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;    
    p {
        width: 395px;
        height: 19px;
        margin-top: 20px;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
    }
`

export const Button = styled.div`
	width: 408px;
	height: 45px;
	display: flex;
	align-items: center;
    justify-content: center;
	border-radius: 10px;
    background: rgba(181, 169, 148, 1);
	cursor: pointer;
    color: white;
    margin-top: 20px;

	p {
		width: 60px;
		margin-left: 15px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
	}
`