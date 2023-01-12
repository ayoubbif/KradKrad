import type { AppProps } from 'next/app';
import React from 'react';
import StyledApp from '../components/pages/StyledApp';
import MetaData from '../components/pages/MetaData';
import { SessionProvider } from '../contexts/session';
import { FileSystemProvider } from '../contexts/fileSystem';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <FileSystemProvider>
    <SessionProvider>
      <StyledApp>
        <MetaData />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </FileSystemProvider>
);
export default App;
