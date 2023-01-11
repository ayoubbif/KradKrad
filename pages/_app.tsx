import type { AppProps } from 'next/app';
import React from 'react';
import StyledApp from '../components/pages/StyledApp';
import MetaData from '../components/pages/MetaData';
import { SessionProvider } from '../contexts/session';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <MetaData />
    <SessionProvider>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </>
);
export default App;
