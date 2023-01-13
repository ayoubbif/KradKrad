import dynamic from 'next/dynamic';

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};

const processDirectory: Processes = {
  Computer: {
    Component: dynamic(() => import('components/apps/Computer')),
    hasWindow: true,
    icon: '/computer.png',
    title: 'Computer'
  }
};

export default processDirectory;
