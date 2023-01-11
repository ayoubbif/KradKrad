import { createGlobalStyle } from "styled-components";

import type { AppProps } from "next/app";
import type { ReactElement } from "react";

const GlobalStyle = createGlobalStyle`
  html,
  body{
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
  }
`;
export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
