import styled from "styled-components";
import { IoMdRefresh } from "react-icons/io";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export const Container = styled.div`
  position: absolute;
  left: 80.18%;
  display: flex;
  width: 314px;
  height: 774px;
  border-radius: 10px 0 0 10px;
  box-shadow: -4px 0px 4px 0px ${(props) => props.theme.shadowColor};
  align-items: center;
  background-color: ${(props) => props.theme.SNBBgColor};
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 774px;

  button {
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    margin-left: 10px;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 744px;

  // background-color: pink;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 258px;
  // margin-top: 10px;
  // background-color: skyblue;
  // border: 2px solid black;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 268px;
  height: 50px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    background: none;
  }
  p {
    margin: 0;
  }
`;
export const RecBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 258px;
  height: 170px;
  padding: 10px 0;
  margin: 10px 0;
  background-color: ${(props) => props.theme.SNBBgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;
export const RecWord = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 218px;
  height: 34px;
  text-decoration: underline;
  font-size: 14px;
`;
export const WordSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 238px;
  height: 25px;
  padding-left: 20px;
  background-color: ${(props) => props.theme.SNBSearchColor};
  border-radius: 20px;
  border: none;

  input {
    width: 258px;
    height: 20px;
    margin-left: 10px;
    background: none;
    border: none;
    color: ${(props) => props.theme.textColor};
  }
`;
export const WordBottom = styled.div`
  display: flex;
  align-items: center;
  width: 258px;
  height: 150px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;
export const BottomWords = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 129px;
  height: 150px;
  p {
    margin: 0;
    width: 89px;
    font-size: 14px;
    text-align: left;
  }
`;
export const BottomLine = styled.div`
  height: 120px;
  border: 0.01px solid ${(props) => props.theme.borderColor};
`;
export const WordTitle = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 24px;
  font-weight: 500;
`;

export const Refresh = styled(IoMdRefresh)`
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
`;

export const NotBookMark = styled(FaRegBookmark)`
  color: ${(props) => props.theme.textColor};
`;
