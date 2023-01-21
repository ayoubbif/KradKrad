import styled from 'styled-components';

const StyledFileEntry = styled.li`
  padding: 2px;
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};
    border: ${({ theme }) => theme.colors.fileEntry.border};
    padding: 0;
    position: relative;

    &::before {
      content: '';
      left: -5px;
      position: absolute;
      right: -5px;
      top: -5px;
    }
  }

  button {
    figure {
      display: flex;
      flex-direction: column;
      place-items: center;

      figcaption {
        color: #000;
        position: relative;
        padding: 2px 0;
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
      }

      img {
        image-rendering: pixelated;
        height: ${({ theme }) => theme.sizes.fileEntry.iconSize};
        width: ${({ theme }) => theme.sizes.fileEntry.iconSize};
      }
    }
  }
`;

export default StyledFileEntry;

