import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;
  z-index: 2;
`;

export default StyledTaskbar;
