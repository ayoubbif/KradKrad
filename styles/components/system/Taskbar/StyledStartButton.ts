import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

const StyledStartButton = styled.button`
  ${centered};
  position: absolute;
  background-color: cyan;
  bottom: 0;
  left: 0;
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
`;

export default StyledStartButton;
