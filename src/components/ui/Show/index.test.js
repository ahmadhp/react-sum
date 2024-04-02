/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import Show from '.';

describe('Show', () => {
  it('should render children if ifTrue is true', () => {
    const { container } = render(
      <Show when>
        <div className='test-child' />
      </Show>
    );
    expect(
      container.getElementsByClassName('test-child')[0]
    ).toBeVisible();
  });

  it('should render null if ifTrue is false', () => {
    const { container } = render(
      <Show when={false}>
        <div className='test-child' />
      </Show>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
