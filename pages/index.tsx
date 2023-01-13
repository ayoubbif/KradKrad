import type { ReactElement } from 'react';
import { ProcessProvider } from '../contexts/process';
import ProcessLoader from '../components/system/Processes/ProcessLoader';
import Desktop from '../components/system/Desktop';
import Taskbar from '../components/system/Taskbar';
import { FileSystemProvider } from '../contexts/fileSystem';

const Home = (): ReactElement => (
  <FileSystemProvider>
    <Desktop>
      <ProcessProvider>
        <Taskbar />
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  </FileSystemProvider>
);

export default Home;
