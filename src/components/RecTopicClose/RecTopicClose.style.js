import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 40%;
	left: 97.9%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	background-color: ${(props) => props.theme.SNBBgColor};
	height: 100px;
	box-shadow: 0px 0px 4px 0px ${(props) => props.theme.shadowColor};
	border-radius: 10px 0px 0px 10px;
`