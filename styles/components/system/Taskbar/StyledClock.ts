import styled from 'styled-components';

const StyledClock = styled.time`
  position: absolute;
  background-color: brown;
  height: 100%;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
