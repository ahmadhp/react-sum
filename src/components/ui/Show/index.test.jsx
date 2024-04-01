import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Show from '.';

describe('Page', () => {
  it('renders a heading', () => {
    render(
      <Show when={true}>
        <p>Testing</p>
      </Show>
    );

    const heading = screen.getByRole('Testing', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
