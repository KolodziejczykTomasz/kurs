import React from "react";
import { ListUser } from "components/ListUser/ListUser";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import GlobalStyle from "assets/styles/GlobalStyle";

export const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}><ListUser /></ThemeProvider>
    </>
  );
};
