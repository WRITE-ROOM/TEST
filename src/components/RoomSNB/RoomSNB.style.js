import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 314px;
  height: 774px;
  border-radius: 0 10px 10px 0;
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.SNBBgColor};
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  font-weight: bold;
  display: flex;
  justify-content: space-between; // 주축
  align-items: center; // 교차축

  h1 {
    font-size: 20px;
    font-weight: 700;
  }
  h2 {
    font-size: 19px;
    font-weight: 500;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
`;

export const MemberProfile = styled.div`
  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`;

export const IconsBox = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

export const BasicBox = styled.div`
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  flex-direction: column;
  padding-bottom: 20px;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  p {
    font-size: large;
  }
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h2 {
    font-size: 20px;
    font-weight: 300;
    padding-left: 20px;
  }

  p {
    font-size: 14px;
    color: #b5a995;
    font-weight: 300;
  }
`;

export const MemberInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Plus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  h2 {
    font-size: 20px;
    font-weight: 300;
    color: #b5a995;
    padding-left: 20px;
  }

  p {
    font-size: 13px;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ToolTipWrapper = styled.div`
  position: relative;
  p {
    font-size: 12px;
  }
`;
export const CursorWrapper = styled.div`
  cursor: pointer;
`;
