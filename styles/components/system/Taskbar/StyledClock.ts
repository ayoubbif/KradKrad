import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

const StyledClock = styled.time`
  ${centered};
  position: absolute;
  font-size: ${({ theme }) => theme.sizes.clock.size};
  height: 100%;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
