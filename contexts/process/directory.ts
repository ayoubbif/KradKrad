import { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import dynamic from 'next/dynamic';

export type ProcessElements = {
  taskbarEntry?: HTMLElement;
};

export type ProcessToggles = {
  maximized?: boolean;
  minimized?: boolean;
};

export type Process = ProcessElements &
  ProcessToggles & {
    autoSizing?: boolean;
    backgroundColor?: string;
    Component: React.ComponentType<ProcessComponentProps>;
    hasWindow?: boolean;
    icon: string;
    title: string;
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
    icon: '/icons/computer.png',
    title: 'Computer'
  },
  V86: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/icons/linux.png',
    title: 'Linux'
  },
  MusicPlayer: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/MusicPlayer')),
    hasWindow: true,
    icon: '/icons/musicplayer.png',
    title: 'Music Player'
  }
};

export default processDirectory;

