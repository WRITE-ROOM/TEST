import styled from "styled-components";

export const Container = styled.div`
  width: 393.85px;
	height: 118.15px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 40px 0 40px 0;
`

export const CheckList = styled.div`
	width: 393.85px;
	height: 25px;
	padding: 3px 0;
	display: flex;
	align-items: center;
	// border: 1px solid pink;

	p {
		font-size: 12px;
		font-weight: 400;
		line-height: 15px;
		text-align: left;
	}
`

export const ContentWrapper = styled.div`
	width: 393.85px;
	height: 25px;
	padding: 5px 0;
	display: flex;
	align-items: center;
	margin-left: 20px;

	p {
		font-size: 12px;
		font-weight: 400;
		line-height: 15px;
		text-align: left;
	}
`
export const Line = styled.div`
	width: 393.85px;
  	border: 0.00001px solid rgba(186, 186, 186, 1);
`

export const CheckBox = styled.div`
	width: 20.92px;
	height: 20.92px;
	background-color: lightgray;
	cursor: pointer;
`

export const ViewButton = styled.p`
	text-decoration: underline;
	width: 30px;
	height: 15px;
	color: rgba(147, 147, 147, 1);
	cursor: pointer;

	font-family: Pretendard;
	font-size: 12px;
	font-weight: 300;
`