import type { FC } from "react";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line import/extensions
import GlobalStyle from "../../styles/GlobalStyle";
import themes from "../../styles/themes.json";
import type { StyledAppProps } from "../../types/StyledApp";

// eslint-disable-next-line react/function-component-definition
const StyledApp: FC<StyledAppProps> = ({
  children,
  theme = themes.default,
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  </>
);

export default StyledApp;
