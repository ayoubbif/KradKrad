import { ProcessConsumer } from 'contexts/process';
import React from 'react';
import { GiGreatPyramid } from 'react-icons/gi';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';

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
