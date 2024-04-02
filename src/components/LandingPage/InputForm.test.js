import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import InputForm from './InputForm';

const INVALID_INPUT_ERROR_REGEX =
  /\s*Invalid input\. Please enter a list of numbers separated by commas\. \(1, 3, 4, 5\)\s*/i;

describe('InputForm', () => {
  test('renders without errors', () => {
    render(<InputForm />);
  });

  test('updates text state when input value changes', () => {
    render(<InputForm />);
    const input = screen.getByPlaceholderText('type here...');
    fireEvent.change(input, { target: { value: '1, 2, 3' } });
    expect(input.value).toBe('1, 2, 3');
  });

  test('displays input error when input is invalid', async () => {
    render(<InputForm />);
    const input = screen.getByPlaceholderText('type here...');
    fireEvent.change(input, { target: { value: '1, 2, a' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(
        screen.getByText(INVALID_INPUT_ERROR_REGEX)
      ).toBeInTheDocument();
    });
  });

  test('displays results when input is valid', async () => {
    render(<InputForm />);
    const input = screen.getByPlaceholderText('type here...');
    fireEvent.change(input, { target: { value: '1, 2, 3' } });
    fireEvent.blur(input);
    const results = await screen.findByText('sum');
    expect(results).toBeInTheDocument();
  });
});
