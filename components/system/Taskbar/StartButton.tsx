import React from 'react';
import StyledStartButton from '../../../styles/components/system/Taskbar/StyledStartButton';
import { IconContext } from 'react-icons/lib';
import { SiWindows95 } from 'react-icons/si';

const StartButton = () => (
  <StyledStartButton title="Start">
    <SiWindows95 />
  </StyledStartButton>
);

export default StartButton;
