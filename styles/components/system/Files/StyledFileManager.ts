import styled from 'styled-components';

const StyledFileManager = styled.ol`
  column-count: 1px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repreat(auto-fill, 75px);
  grid-template-rows: repreat(auto-fill, 70px);
  padding: 5px 0;
  row-gap: 20px;
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
`;

export default StyledFileManager;
