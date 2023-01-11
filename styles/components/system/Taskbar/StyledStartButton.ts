import styled from 'styled-components';

const StyledStartButton = styled.button`
  position: absolute;
  background-color: blueviolet;
  bottom: 0;
  left: 0;
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
`;

export default StyledStartButton;
