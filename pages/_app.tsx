import type { AppProps } from "next/app";
import React from "react";
import StyledApp from "../components/pages/StyledApp";
import MetaData from "../components/pages/MetaData";
import { SessionProvider } from "../contexts/session";

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <MetaData />
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
