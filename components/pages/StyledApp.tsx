import type { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { SessionConsumer } from "../../contexts/session";
import GlobalStyle from "../../styles/GlobalStyle";
import themes from "../../styles/themes.json";

interface Props {
  children: ReactNode;
}

const StyledApp: FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = themes.default }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
