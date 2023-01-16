import { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import dynamic from 'next/dynamic';

export type Process = {
  backgroundColor?: string;
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  title: string;
  maximized?: boolean;
  minimized?: boolean;
  autoSizing?: boolean;
  url?: string;
};

export type Processes = {
  [id: string]: Process;
};

const processDirectory: Processes = {
  Computer: {
    autoSizing: false,
    Component: dynamic(() => import('components/apps/Computer')),
    hasWindow: true,
    icon: '/computer.ico',
    title: 'Computer'
  },
  V86: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/icons/linux.png',
    title: 'Linux'
  }
};

export default processDirectory;
