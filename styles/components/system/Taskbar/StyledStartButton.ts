import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

const StyledStartButton = styled.button.attrs({
  type: 'button'
})`
  ${centered};
  color: ${({ theme }) => theme.colors.startButton};
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};
`;

export default StyledStartButton;
