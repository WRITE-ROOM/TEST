import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 800px;

  // background-color: pink;
`;
export const Title = styled.div`
  width: 104px;
  height: 36px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const SNSInfo = styled.p`
  width: 393.85px;
  height: 34px;
  color: rgba(147, 147, 147, 1);

  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

export const IsLogin = styled.div`
  width: 240px;
  height: 22px;
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    width: 150px;
    height: 22px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

	button {
		width: 60px;
		height: 22px;
		border: none;
		background: none;
		color: ${(props) => props.theme.textColor};
		cursor: pointer;
		font-family: Pretendard;
		font-size: 18px;
		font-weight: 500;
		line-height: 22px;
		letter-spacing: 0em;
		text-align: left;
	}
`

