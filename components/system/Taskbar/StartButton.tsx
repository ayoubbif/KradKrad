import { ProcessConsumer } from 'contexts/process';
import React from 'react';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';
import { StartButtonIcon } from '../Icons';

const StartButton = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
        title="Start"
      >
        <StartButtonIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
