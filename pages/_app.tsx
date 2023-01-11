import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import StyledApp from "../components/pages/StyledApp";
import MetaData from "../components/pages/MetaData";
import { SessionProvider } from "../contexts/session";
import themes from "../styles/themes.json"; // Move to ENV later
import packageInfo from "../package.json";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <MetaData
        description={packageInfo.description}
        title={packageInfo.name}
      />
      <SessionProvider>
        <StyledApp currentTheme={themes.default}>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
