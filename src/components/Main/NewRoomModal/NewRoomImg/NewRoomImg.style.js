import styled from 'styled-components'

export const Container = styled.div`
	width: 362px;
	height: 108px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: rgba(204, 204, 204, 1);
	border-radius: 10px;
	cursor: pointer;

	p {
		color: white;
		font-family: Pretendard;
		font-size: 14px;
		font-weight: 300;	
		margin-bottom: 5px;	
	}

	img {
		width: 362px;
		height: 108px;
		border-radius: 10px;
		object-fit: cover;
	}
`
export const Picture = styled.div`
	width: 362px;
	height: 108px;
	display: flex;

	label {
		width: 362px;
		height: 108px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		cursor: pointer;
	}

	input {
		display: none;
	}

	p {
		color: white;
		font-family: Pretendard;
		font-size: 14px;
		font-weight: 300;	
		margin-bottom: 5px;	
	}

	img {
		width: 362px;
		height: 108px;
		object-fit: cover;
	}
`