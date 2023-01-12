import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  display: flex;
  border-bottom: ${({ theme }) =>
    `${theme.sizes.taskbar.entry.borderSize}
    solid
    ${theme.colors.borderColor}`};
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};

  figure {
    display: flex;
    align-items: center;
  }
  figcaption {
    color: ${({ theme }) => theme.colors.opaqueWhite};
    font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
    margin: 0 5px;
  }
`;

export default StyledTaskbarEntry;
