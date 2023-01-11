import type { ReactElement } from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

function Index(): ReactElement {
  return (
    <Title>
      Hello
    </Title>
  );
}

export default Index;
