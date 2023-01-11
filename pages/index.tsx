import type { ReactElement } from 'react';
import { ProcessProvider } from '../contexts/process';
import ProcessLoader from '../components/system/ProcessLoader';
import Desktop from '../components/system/Desktop';

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
