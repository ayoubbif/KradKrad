import styled from 'styled-components';

type StyledWindowProps = {
  minimized?: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  display: ${({ minimized = false }) => (minimized ? 'none' : 'block')};
  outline: 2px solid;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default StyledWindow;
