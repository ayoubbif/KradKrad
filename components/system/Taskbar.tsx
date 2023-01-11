import React from 'react';
import StyledTaskbar from '../../styles/components/system/StyledTaskbar';
import Clock from './Clock';
import StartButton from './StartButton';
import TaskbarEntries from './TaskbarEntries';

const Taskbar: React.FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
