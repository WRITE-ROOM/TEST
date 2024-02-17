import styled from 'styled-components'

export const Modal = styled.div`
	position: relative;
	top: -10px;
	left: 200px;
	width: 80px;
	height: 60px;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.bgColor};
	border-radius: 10px;
	box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
	z-index: 97;

	button {
		width: 60px;
		height: 20px;
		margin: 3px 3px 3px 10px;
		background: transparent;
		border: none;
		font-size: 12px;
		text-align: start;
		text-decoration: underline;
		cursor: pointer;
		color: ${(props) => props.theme.textColor};
	}
`