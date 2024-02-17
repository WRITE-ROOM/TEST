import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Container = styled.div`
  position: relative;
`;

export const SettingButton = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const Menu = styled(BiDotsVerticalRounded)`
  color: ${(props) => props.theme.textColor};
`