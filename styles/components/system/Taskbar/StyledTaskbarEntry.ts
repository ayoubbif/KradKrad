import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  border: 1px solid black;
  display: flex;
  border-bottom: ${({ theme }) =>
    `${theme.sizes.taskbar.entry.borderSize}
    solid
    ${theme.colors.highlight}`};
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  figure {
    display: flex;
    align-items: center;
    margin: 0 5px;
  }
  figcaption {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
    margin: 0 7px;
  }
`;

export default StyledTaskbarEntry;
