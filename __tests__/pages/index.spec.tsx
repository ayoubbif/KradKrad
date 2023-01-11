import { render } from '@testing-library/react';
import StyledApp from '../../components/pages/StyledApp';
import Index from '../../pages/index';

test('renders index page', async () => {
  const { findByText } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );
  const linkElement = await findByText('Tanit OS');
  expect(linkElement).toBeInTheDocument();
});
