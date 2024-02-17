import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const AuthBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 30px;
  margin-left: 40px;

  h1 {
    font-size: 24px;
    font-weight: 400;
  }

  span {
    color: #b5a995;
  }

  p {
    color: gray;
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const MemberBox = styled.div`
  width: 95%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const AuthToggle = styled.button`
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProfileImageWrapper = styled.img`
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  p {
    font-size: 19px;
  }
  span {
    color: #b5a995;
  }
`;

export const ToggleText = styled.div`
  position: absolute;
  z-index: 10;
  top: 45px;
  right: -20px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  border: none;
  width: 100px;
  margin-right: 20px;
  box-shadow: -5px 1px 5px 0 ${(props) => props.theme.shadowColor},
    5px 1px 5px 0 ${(props) => props.theme.shadowColor};
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: 25px;
  }
  hr {
    height: 1px;
    background-color: gainsboro;
  }

  div:hover {
    background-color: #eaeaea;
  }
`;

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  position: relative;
`;

export const StyledOption = styled.option`
  font-size: 14px;
  background-color: #fff;
  color: #333;
  position: absolute;
  margin-top: 20px;
`;
