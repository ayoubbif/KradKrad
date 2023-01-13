import { ProcessConsumer } from 'contexts/process';
import React from 'react';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';
import { StartButtonIcon } from '../Icons';

const StartButton = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('Computer')}
        onDoubleClick={() => close('Computer')}
        title="Start"
      >
        <StartButtonIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
