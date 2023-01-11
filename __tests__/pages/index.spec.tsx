import { render } from '@testing-library/react';
import StyledApp from '../../pages/components/StyledApp';
// eslint-disable-next-line import/extensions
import Index from '../../pages/index';


test('renders index page', () => {
  const { getByText } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );
  const linkElement = getByText('Hello');
  expect(linkElement).toBeInTheDocument();
});
