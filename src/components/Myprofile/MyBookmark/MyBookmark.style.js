import styled from "styled-components";

export const TabBox = styled.div`
	padding-top: 30px;
	width: 1324px;
	height: 53px;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const WordTab = styled.div`
	width: 584px;
	height: 53px;
	border-radius: 30px 30px 0px 0px;
	// background: white;
	background-color: ${props => props.isActive ? props.theme.SNBInfoColor : props.theme.TemplateColor};
	box-shadow: 0px -4px 7px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
			
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 400;
`   
export const NoteTab = styled.div`
	width: 584px;
	height: 53px;
	border-radius: 30px 30px 0px 0px;
	background: rgba(242, 242, 242, 1);
	box-shadow: 0px -4px 7px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 400;
	cursor: pointer;
`   

export const TabInfo = styled.div`
	width: 1324px;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: center;
`
export const BookContainer = styled.div`
	margin: 30px 0;
	width: 1168px;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const BookmarkBox = styled.div`
	width: 400px;
	height: 500px;
	display: flex;
`

export const Line = styled.div`
	width: 0px;
	height: 435px;
	border: 1px solid rgba(229, 229, 229, 1);

`

export const PagenationBox = styled.div`
	margin-top: 10px;
	.pagination {
		width: 200px;
		height: 30px;
		display: flex;
		justify-content: space-around;
	}
	ul.pagination li:first-child{
		border-radius: 5px 0 0 5px;
	}

	ul.pagination li:last-child{
		border-radius: 0 5px 5px 0;
	}

	ul.pagination li a {
		text-decoration: none;
		color: ${(props) => props.theme.textColor};
		font-size: 1rem;
	}

	ul.pagination li.active a {
		color: rgba(181, 169, 148, 1);
	}

	ul.pagination li a:hover {
		color: rgba(181, 169, 148, 1);
	},

	.page-selection {
		width: 48px;
		height: 30px;
		color: #337ab7;
	}
`