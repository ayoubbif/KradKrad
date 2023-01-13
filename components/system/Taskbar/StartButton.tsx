import React from 'react';
import StyledStartButton from '../../../styles/components/system/Taskbar/StyledStartButton';
import { GiGreatPyramid } from 'react-icons/gi';
import { ProcessConsumer } from '../../../contexts/process';

const StartButton = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
      >
        <GiGreatPyramid title="Start" />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
