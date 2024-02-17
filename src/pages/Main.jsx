import React, { useState } from "react";
import Header from "../components/Header/Header";
import MainBox from "../components/Main/MainBox/MainBox";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${(props) => props.theme.bgColor};
//     color: ${(props) => props.theme.textColor};
//     border-color: ${(props) => props.theme.borderColor};
//   }
// `
export default function Main() {
  return <MainBox></MainBox>;
}
