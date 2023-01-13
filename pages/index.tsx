import type { ReactElement } from 'react';
import { ProcessProvider } from '../contexts/process';
import ProcessLoader from '../components/system/Processes/ProcessLoader';
import Desktop from '../components/system/Desktop';
import Taskbar from '../components/system/Taskbar';
import FileManager from '../components/system/Files/FileManager';

const Home = (): ReactElement => (
  <Desktop>
    <ProcessProvider>
      <FileManager directory="/desktop" />
      <Taskbar />
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
