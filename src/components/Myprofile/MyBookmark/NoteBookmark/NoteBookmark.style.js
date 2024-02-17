import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #e5e5e5;
  width: 48%;
  cursor: pointer;
  border-radius: 10px;
  height: 200px;
  display: flex;
`;

export const UserIconWrapper = styled.div`
  position: absolute;
  margin-bottom: 120px;
`;

export const ContentsBox = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // position: relative;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 16px;
    object-fit: cover;
  }
`;

export const Writer = styled.div`
  font-size: 14px;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #939393;
`;

export const Right = styled.div`
  display: flex;
  // gap: 10px;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 10px;
    font-size: 22px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
    font-weight: 300;

    whitespace: nowrap;
    overflow: hidden;
    textoverflow: ellipsis;
    maxwidth: 1ch;

    span {
      font-weight: 500;
      margin-right: 6px;
      padding-right: 6px;
      border-right: 2px solid black;
    }
  }
`;

export const NoteImg = styled.img`
  width: 35%;
  border-radius: 0 10px 10px 0;
`;