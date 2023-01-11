import styled from "styled-components";

const StyledDesktop = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundcolor};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledDesktop;
