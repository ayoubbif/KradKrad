import styled from 'styled-components';

const StyledTitleBar = styled.header`
  background-color: #666ace;
  display: flex;
  h1 {
    color: #000;
    display: flex;
    flex-grow: 1;
    font-size: 13px;
    font-weight: bold;
    height: 30px;

    figure {
      display: flex;
      align-items: center;
      margin: 3px;

      img {
        height: 23px;
        margin: 0 8px;
        width: 23px;
      }
    }
  }

  nav {
    display: flex;

    button {
      width: 45px;

      svg {
        fill: #d1c4cd;
        stroke: #000;
        width: 25px;
      }

      &:hover {
        &.close {
          background-color: #cc0000;
          transition: background-color 0.2s ease;
        }
        &.minimize {
          background-color: #ff6600;
          transition: background-color 0.2s ease;
        }
        &.maximize {
          background-color: #006600;
          transition: background-color 0.2s ease;
        }
      }
    }
  }
`;

export default StyledTitleBar;
