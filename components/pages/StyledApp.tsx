import type { FC } from "react";
import { ThemeProvider } from "styled-components";
import { SessionConsumer } from "../../contexts/session";
import GlobalStyle from "../../styles/GlobalStyle";
import { StyledAppProps } from "../../types/components/pages/StyledApp";

const StyledApp: FC<StyledAppProps> = ({ children, currentTheme }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = currentTheme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
