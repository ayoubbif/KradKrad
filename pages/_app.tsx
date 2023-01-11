import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import MetaData from "./components/MetaData";
import StyledApp from "./components/StyledApp";

// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <MetaData />
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
