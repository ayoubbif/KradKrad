import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  border: 1px solid black;
  display: flex;
  min-width: 0;
  border-bottom: ${({ theme }) =>
    `${theme.sizes.taskbar.entry.borderSize}
    solid
    ${theme.colors.highlight}`};

  width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
    border-bottom: ${({ theme }) =>
      `${theme.sizes.taskbar.entry.borderSize}
    solid
    #fe1c33`};
  }

  figure {
    display: flex;
    align-items: center;
    margin: 0 5px;

    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }

    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      margin: 0 2px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export default StyledTaskbarEntry;
