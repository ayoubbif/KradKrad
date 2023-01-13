import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';

const processDirectory: Processes = {
  Computer: {
    Component: dynamic(() => import('components/apps/Computer')),
    hasWindow: true,
    icon: '/computer.png',
    title: 'Computer'
  }
};

export default processDirectory;
