import type { ReactElement } from 'react';
import { ProcessProvider } from '../contexts/process';
import ProcessLoader from '../components/system/Processes/ProcessLoader';
import Desktop from '../components/system/Desktop';
import Taskbar from '../components/system/Taskbar';

const Home = (): ReactElement => (
  <Desktop>
    <ProcessProvider>
      <Taskbar />
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
