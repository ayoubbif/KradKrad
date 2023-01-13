import dynamic from 'next/dynamic';
import type { Process, Processes } from '../types/contexts/process';

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('../components/apps/HelloWorld')),
    hasWindow: true,
    icon: '/computer.png',
    title: 'Computer'
  }
};

export default processDirectory;
