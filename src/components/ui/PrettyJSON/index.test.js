/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';
import PrettyJSON from '.';

describe('PrettyJSON', () => {
  test('should render pretty json if there is json string', () => {
    const jsonString = '{"name": "John", "age": 30}';
    render(<PrettyJSON results={jsonString} />);
    expect(screen.queryByText('name')).toBeInTheDocument();
  });

  test('should render null if there is no json', () => {
    const { container } = render(<PrettyJSON error='' />);
    expect(container.firstChild).toBeNull();
  });
});
