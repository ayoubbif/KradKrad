import styled from 'styled-components';

type StyledTaskbarEntryProps = {
  foreground: boolean;
};

const StyledTaskbarEntry = styled.li<StyledTaskbarEntryProps>`
  background-color: ${({ foreground, theme }) =>
    foreground ? theme.colors.taskbar.active : ''};
  border: 1px solid black;
  display: flex;
  min-width: 0;
  border-bottom: ${({ theme }) =>
    `${theme.sizes.taskbar.entry.borderSize}
    solid
    ${theme.colors.highlight}`};
  padding: ${({ foreground }) => (foreground ? '0 4px' : '')};
  transition: all 0.075s;
  width: ${({ foreground, theme }) =>
    foreground
      ? theme.sizes.taskbar.entry.maxWidth
      : `calc(${theme.sizes.taskbar.entry.maxWidth} - 8px)`};

  &:hover {
    background-color: ${({ foreground, theme }) =>
      foreground
        ? theme.colors.taskbar.activeHover
        : theme.colors.taskbar.hover};
    border-bottom: ${({ theme }) =>
      `${theme.sizes.taskbar.entry.borderSize}
    solid
    #5cee11`};
  }

  figure {
    display: flex;
    align-items: center;
    padding: 10px;

    img {
      image-rendering: pixelated;
      position: relative;
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }

    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      margin-left: 5px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
  }
`;

export default StyledTaskbarEntry;
