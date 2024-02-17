import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: ${(props) => (props.openSNB ? "80vw" : "100%")};
`;

export const Header = styled.div`
  width: 100%;
  height: 58px;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  width: 33%;
  display: flex;
  justify-content: left;
  gap: 20px;
`;

export const Template = styled.div`
  width: 124px;
  position: relative;
`;


export const Center = styled.div`
  width: 33%;
  text-align: center;
`;

export const Right = styled.div`
  width: 33%;
  display: flex;
  justify-content: right;
  gap: 10px;

  div {
    width: 80px;
  }
`;

export const Top = styled.div`
  width: 100%;
  aspect-ratio: 4 / 1;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => (props.img ? props.img : "")});

  position: absolute;
  z-index: -1;
`;

export const ImageControl = styled.div`
  width: 100%;
  padding: 40px 24px 0 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const HandleCoverImg = styled.div`
  width: 24px;
  height: 24px;
  color: #fff;

  label {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;

  padding: 24px;
  padding-bottom: 0;
  box-sizing: border-box;

  input {
    border: none;
    width: 100%;
    background-color: transparent;
    color: white;
    margin-bottom: 5px;

    &#titleInput {
      height: 26px;
      font-size: 22px;
      font-weight: 700;
    }

    &#subtitleInput {
      height: 30px;
      font-size: 14px;
      font-weight: 300;
      margin: 10px 0;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
  }
`;

export const StyledHr = styled.hr`
  height: 1px;
  border: none;
  border-top: 1px solid white;
`;

// 버튼
// width, padding, background-color, color, font-size, font-weight, border
export const StyledButton = styled.button`
  width: ${(props) => (props.$width ? props.$width : "124px")};

  padding: ${(props) => (props.$padding ? props.$padding : "9px 0")};

  background-color: ${(props) =>
    props.$backgroundColor
      ? "rgba(181, 169, 148, 1)"
      : props.theme.TemplateColor};

  color: ${(props) => props.$color ? "white" : props.theme.textColor};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};

  border-width: ${(props) => (props.$borderWidth ? props.$borderWidth : "0px")};
  border-style: ${(props) =>
    props.$borderStyle ? props.$borderStyle : "none"};
  border-color: ${(props) =>
    props.$borderColor ? "transparent" : props.theme.borderColor};

  border-radius: 10px;

  cursor: pointer;

  span {
    font-weight: 300;
  }
`;
