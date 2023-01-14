import styled from 'styled-components';

const StyledFileManager = styled.ol`
  column-count: 1px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
`;

export default StyledFileManager;
