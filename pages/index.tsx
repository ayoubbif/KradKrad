import type { ReactElement } from 'react';
import { ProcessProvider } from '../contexts/process';
import Desktop from '../components/system/Desktop';
import ProcessLoader from '../components/system/Processes/ProcessLoader';

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
