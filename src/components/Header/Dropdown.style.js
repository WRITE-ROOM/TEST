import styled from "styled-components";

// props 상세
// width : 드롭다운의 너비
// top : 버튼보다 드롭다운이 얼마나 밑으로 내려갈지
// listWidth : 각 리스트의 너비

export const DropdownContainer = styled.div`
  width: ${(props) => (props.$width ? props.$width : "100px")};
  background-color: ${(props) => props.theme.SNBBgColor};
  padding: ${(props) => (props.$padding ? props.$padding : "16px 4px")};

  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  position: absolute;
  cursor: pointer;
  right: ${(props) => (props.$right ? props.$right : "0px")};
  top: ${(props) => (props.$top ? props.$top : "58px")};

  z-index: 1000;
  font-size: 14px;

  ul {
    li {
      width: ${(props) => (props.listWidth ? props.listWidth : "80px")};
      height: 34px;
      padding-left: 12px;
      border-radius: 10px;

      &:hover {
        background-color: #eaeaea;
      }

      a,
      p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.textColor};
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;

export const DropdownTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SimpleContainer = styled.div`
  width: ${(props) => (props.$width ? props.$width : "100px")};
  height: ${(props) => (props.$height ? props.$height : "")};
  background-color: ${(props) => props.theme.SNBBgColor};

  padding: ${(props) => (props.$padding ? props.$padding : "16px")};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};

  position: absolute;
  top: ${(props) => (props.$top ? props.$top : "20px")};
  // left: ${(props) => (props.$left ? props.$left : "0px")};

  z-index: 1000;
`;
