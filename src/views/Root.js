import React from "react";
import { ListUser } from "components/ListUser/ListUser";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import GlobalStyle from "assets/styles/GlobalStyle";

export const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ListUser />
      </ThemeProvider>
    </>
  );
};
