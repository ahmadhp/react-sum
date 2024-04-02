/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';
import InputError from '.';

describe('InputError', () => {
  test('should render error if there is an error', () => {
    render(<InputError error={'Testing error com'} />);
    expect(
      screen.queryByText('Testing error com')
    ).toBeInTheDocument();
  });

  test('should render null if there is no error message', () => {
    const { container } = render(<InputError error='' />);
    expect(container.firstChild).toBeNull();
  });
});
