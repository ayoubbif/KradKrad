import styled from 'styled-components';

const StyledFileEntry = styled.li`
  padding: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: hsla(10, 0%, 100%, 0.5);
    border: 2px solid hsla(10, 0%, 100%, 0.5);
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
      font-size: 14px;
      text-shadow: 0 0 1px rgba(99, 88, 77, 0.75), 0 0 2px rgba(66, 55, 44, 0.5),
        0 0 3px rgba(33, 22, 11, 0.25), 0 0 4px rgba(00, 255, 25, 0.1);
    }

    img {
      height: 55px;
      width: 55px;
    }
  }
`;

export default StyledFileEntry;
