import React from 'react';
import dynamic from 'next/dynamic';
import { Process } from '../../../types/contexts/process';

const Window = dynamic(import('../Window'));

const RenderProcess = ({ Component, hasWindow }: Process): JSX.Element =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

export default RenderProcess;
