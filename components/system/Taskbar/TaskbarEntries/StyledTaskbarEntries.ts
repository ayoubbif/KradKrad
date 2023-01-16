import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  display: flex;
  position: absolute;
  height: 100%;
  left: ${({ theme }) => theme.sizes.startButton.width};
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledTaskbarEntries;
