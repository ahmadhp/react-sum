import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import InputForm from './InputForm';

const INVALID_INPUT_ERROR_REGX =
  /\s*Invalid input\. Please enter a list of numbers separated by commas\. \(1, 3, 4, 5\)\s*/i;

describe('InputForm', () => {
  test('renders without errors', () => {
    render(<InputForm />);
  });

  test('updates text state when input value changes', () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const input = getByPlaceholderText('type here...');
    fireEvent.change(input, { target: { value: '1, 2, 3' } });
    expect(input.value).toBe('1, 2, 3');
  });

  test('displays input error when input is invalid', async () => {
    const { getByPlaceholderText, findByTestId } = render(
      <InputForm />
    );
    const input = getByPlaceholderText('type here...');
    fireEvent.change(input, { target: { value: '1, 2, a' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(
        screen.getByText(INVALID_INPUT_ERROR_REGX)
      ).toBeInTheDocument();
    });
  });

  test('displays results when input is valid', async () => {
    const { getByPlaceholderText, getByText } = render(<InputForm />);
    const input = getByPlaceholderText('type here...');
    fireEvent.change(input, { target: { value: '1, 2, 3' } });
    fireEvent.blur(input);
    const results = await waitFor(() => getByText('sum'));
    expect(results).toBeInTheDocument();
  });
});
