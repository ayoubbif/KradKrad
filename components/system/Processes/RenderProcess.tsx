import React from 'react';
import dynamic from 'next/dynamic';
import { Process } from '../../../types/contexts/process';

const Window = dynamic(import('../Window'));

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

const RenderProcess = ({ Component, hasWindow }: Process): JSX.Element =>
  hasWindow ? withWindow(Component) : <Component />;

export default RenderProcess;
