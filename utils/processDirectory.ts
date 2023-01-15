import { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import dynamic from 'next/dynamic';

export type Process = {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  title: string;
  maximized?: boolean;
  minimized?: boolean;
  autoSizing?: boolean;
};

export type Processes = {
  [id: string]: Process;
};

const processDirectory: Processes = {
  Computer: {
    Component: dynamic(() => import('components/apps/Computer')),
    hasWindow: true,
    icon: '/computer.png',
    title: 'Computer',
    autoSizing: false
  }
};

export default processDirectory;
