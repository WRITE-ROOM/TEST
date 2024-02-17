import styled from 'styled-components'

export const App = styled.div`
	width: 100%;
	height: 900px;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		position: relative;
		right: 620px; 
		font-family: Pretendard;
		font-size: 24px;
		font-weight: 200;
		line-height: 29px;
		letter-spacing: 0em;
		text-align: left;
	}
`

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	${(props) => props.with_SNB && 'width: 80vw;'}
`
export const Room = styled.div`
	width: 290px;
	height: 259px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(95, 95, 95, 1);
	border-radius: 10px;
	margin: 24px;
	// cursor: pointer;
`
export const Picture = styled.div`
	width: 290px;
	height: 220px;
	border-radius: 10px 10px 0 0;
	cursor: pointer;
	img {
		width: 290px;
		height: 220px;
		border-radius : 10px 10px 0 0;
		object-fit: cover;
	}
`
export const Loading = styled.div`
	width: 100%;
	height: 30px;
	background: pink;
`