import React from 'react';
import StyledStartButton from '../../../styles/components/system/Taskbar/StyledStartButton';
import { SiWindows95 } from 'react-icons/si';
import { ProcessConsumer } from '../../../contexts/process';

const StartButton = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
      >
        <SiWindows95 title="Start" />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
