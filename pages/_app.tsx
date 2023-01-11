import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import MetaData from "../components/pages/MetaData";
import StyledApp from "../components/pages/StyledApp";
import { SessionProvider } from "../contexts/session";


export default function App({ Component, pageProps }: AppProps): ReactElement {
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
