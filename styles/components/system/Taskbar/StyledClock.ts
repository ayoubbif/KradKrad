import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

const StyledClock = styled.time`
  ${centered};
  color: ${({ theme }) => theme.colors.clockText};
  position: absolute;
  font-size: ${({ theme }) => theme.sizes.clock.fontSize};
  height: 100%;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
