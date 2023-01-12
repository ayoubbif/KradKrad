import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

const StyledTaskbarEntry = styled.li`
  ${centered};
  background-color: red;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
`;

export default StyledTaskbarEntry;
