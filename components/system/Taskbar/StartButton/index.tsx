import React from 'react';
import { ProcessConsumer } from 'contexts/process';
import { StartButtonIcon } from '../../Icons';
import StyledStartButton from './StyledStartButton';

const StartButton = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton title="The Basement">
        <StartButtonIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;

