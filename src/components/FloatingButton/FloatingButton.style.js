import styled from "styled-components";

export const FloatingButton = styled.div`
  width: 52px;
  height: 52px;
  background-color: #b5a994;
  border-radius: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  // position: absolute;
  right: ${(props) => (props.$right ? props.$right : "56px")};
  bottom: 40px;
  cursor: pointer;
  
  img {
    width: 29px;
  }
  z-index: 200;
`;
