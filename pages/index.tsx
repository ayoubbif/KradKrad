import type { ReactElement } from 'react';
import { ProcessProvider } from '../contexts/process';
import ProcessLoader from '../components/system/Processes/ProcessLoader';
import Desktop from '../components/system/Desktop';

const Home = (): ReactElement => (
  <Desktop>
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
