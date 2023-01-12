import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  position: absolute;
  left: ${({ theme }) => theme.sizes.startButton.width};
  right: ${({ theme }) => theme.sizes.clock.width};
  height: 100%;
  width: 100%;
`;

export default StyledTaskbarEntries;
