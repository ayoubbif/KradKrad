import styled from 'styled-components';

const StyledDesktop = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  overflow: hidden; // Prevents scrollbars from appearing
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledDesktop;
