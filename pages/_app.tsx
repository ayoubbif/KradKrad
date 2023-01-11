import type { AppProps } from "next/app";
import type { ReactElement } from "react";

import StyledApp from "./components/StyledApp";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <StyledApp>
      <Component {...pageProps} />
    </StyledApp>
  );
}

