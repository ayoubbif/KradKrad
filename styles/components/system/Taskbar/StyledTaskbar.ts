import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.taskbar};
  backdrop-filter: blur(3px);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;
`;

export default StyledTaskbar;
