import styled from 'styled-components';

const StyledTitleBar = styled.header`
  background-color: ${({ theme }) => theme.colors.titlebar.background};
  border-bottom: 1px solid #000;
  display: flex;
  height: ${({ theme }) => theme.sizes.titlebar.height};
  h1 {
    color: ${({ theme }) => theme.colors.titlebar.text};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titlebar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      display: flex;
      align-items: center;
      min-width: inherit;

      img {
        height: ${({ theme }) => theme.sizes.titlebar.iconSize};
        margin: ${({ theme }) => theme.sizes.titlebar.iconMargin};
        width: ${({ theme }) => theme.sizes.titlebar.iconSize};
      }
    }

    figcaption {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
        fill: #d1c4cd;
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
          background-color: #880000;
          transition: background-color 0.2s ease;
        }
        &.maximize {
          background-color: #008800;
          transition: background-color 0.2s ease;
        }
        &.minimize {
          background-color: #000088;
          transition: background-color 0.2s ease;
        }
      }

      &:disabled {
        svg {
          fill: #acc285;
        }
      }
    }
  }
`;

export default StyledTitleBar;
