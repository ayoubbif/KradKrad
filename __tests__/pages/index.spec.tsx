import { render } from '@testing-library/react';
import StyledApp from '../../components/pages/StyledApp';
import Index from '../../pages/index';

test('renders index page', () => {
  const { getByRole } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
