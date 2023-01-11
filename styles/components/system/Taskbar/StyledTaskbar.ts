import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  position: absolute;
  background-color: black;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;
`;

export default StyledTaskbar;
