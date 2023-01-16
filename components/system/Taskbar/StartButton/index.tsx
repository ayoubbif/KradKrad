import React from 'react';
import { ProcessConsumer } from 'contexts/process';
import { StartButtonIcon } from '../../Icons';
import StyledStartButton from './StyledStartButton';

const StartButton = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton title="Start">
        <StartButtonIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
