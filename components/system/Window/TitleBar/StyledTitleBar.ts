import styled from 'styled-components';

type StyledtitlebarProps = {
  foreground: boolean;
};

const Styledtitlebar = styled.header<StyledtitlebarProps>`
  background-color: ${({ foreground, theme }) =>
    foreground
      ? theme.colors.titlebar.background
      : theme.colors.titlebar.backgroundInactive};
  border-bottom: ${({ foreground, theme }) =>
    foreground
      ? `1px solid ${theme.colors.titlebar.background}`
      : `1px solid ${theme.colors.titlebar.backgroundInactive}`};
  display: flex;
  height: ${({ theme }) => theme.sizes.titlebar.height};
  h1 {
    color: ${({ foreground, theme }) =>
      foreground
        ? theme.colors.titlebar.text
        : theme.colors.titlebar.textInactive};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titlebar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      display: flex;
      align-items: center;
      min-width: inherit;
      position: relative;

      img {
        image-rendering: pixelated;
        height: ${({ theme }) => theme.sizes.titlebar.iconSize};
        margin: ${({ theme }) => theme.sizes.titlebar.iconMargin};
        width: ${({ theme }) => theme.sizes.titlebar.iconSize};
      }
    }

    figcaption {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: bold;
    }
  }

  nav {
    display: flex;

    button {
      border-left: 1px solid #000;
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({ theme }) => theme.sizes.titlebar.buttonWidth};

      svg {
        fill: ${({ foreground, theme }) =>
          foreground
            ? theme.colors.titlebar.text
            : theme.colors.titlebar.buttonInactive};
        stroke: #000;
        width: ${({ theme }) => theme.sizes.titlebar.iconSize};
      }

      &.close,
      &.maximize {
        svg {
          margin-right: 1px;
        }
      }

      &:hover {
        &.close {
          background-color: #ff1133;
          transition: background-color 0.2s ease;
        }
        &.maximize {
          background-color: #77cc66;
          transition: background-color 0.2s ease;
        }
        &.minimize {
          background-color: #ffe339;
          transition: background-color 0.2s ease;
          margin-right: 0;
        }
      }

      &:active {
        background-color: rgb(75, 33, 11);

        svg {
          fill: ${({ theme }) => theme.colors.titlebar.text};
        }

        &.close {
          background-color: rgb(109, 100, 20);
        }
      }

      &:disabled {
        svg {
          fill: ${({ foreground }) =>
            foreground ? 'rgb(50, 50, 50)' : 'rgb(60, 60, 60)'};
        }
        &.maximize {
          background-color: #999;
        }
      }
    }
  }
`;

export default Styledtitlebar;
