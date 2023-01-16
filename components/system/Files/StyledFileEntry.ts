import styled from 'styled-components';

const StyledFileEntry = styled.li`
  padding: 2px;
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};
    border: ${({ theme }) => theme.colors.fileEntry.border};
    letter-spacing: ${({ theme }) => theme.sizes.fileEntry.letterSpacing};
    padding: 0;
    position: relative;

    &::before {
      border: 1px solid hsla(10, 0%, 33%, 0.7);
      content: '';
      left: -5px;
      position: absolute;
      right: -5px;
      top: -5px;
    }
  }

  button {
    figcaption {
      color: #000;
      position: relative;
      top: -1px;
      font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
      text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
    }

    img {
      height: ${({ theme }) => theme.sizes.fileEntry.iconSize};
      width: ${({ theme }) => theme.sizes.fileEntry.iconSize};
    }
  }
`;

export default StyledFileEntry;
