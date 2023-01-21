import { ProcessComponentProps } from 'components/system/Processes/RenderProcess';
import dynamic from 'next/dynamic';

export type ProcessElements = {
  taskbarEntry?: HTMLElement;
};

export type Process = ProcessElements & {
  autoSizing?: boolean;
  backgroundColor?: string;
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
  url?: string;
  lockAspectRatio?: boolean;
};

export type Processes = {
  [id: string]: Process;
};

const processDirectory: Processes = {
  FileExplorer: {
    backgroundColor: '#55a7ac',
    Component: dynamic(() => import('components/apps/FileExplorer')),
    hasWindow: true,
    icon: '/icons/explorer.png',
    title: 'Directory'
  },
  V86: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/icons/linux.png',
    title: 'Virtual x86'
  },
  MusicPlayer: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/MusicPlayer')),
    hasWindow: true,
    icon: '/icons/musicplayer.png',
    title: 'Music Player'
  },
  JSDOS: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/JSDOS')),
    hasWindow: true,
    icon: '/icons/jsdos.png',
    title: 'js-dos v7',
    lockAspectRatio: true
  }
};

export default processDirectory;
