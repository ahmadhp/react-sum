import { parseListInput, validateInput } from '.';

describe('parseListInput', () => {
  test('should parse a comma-separated list of numbers', () => {
    const input = '1, 2, 3, 4, 5';
    const expected = [1, 2, 3, 4, 5];
    const result = parseListInput(input);
    expect(result).toEqual(expected);
  });

  test('should handle leading/trailing spaces in the input', () => {
    const input = '  1, 2, 3, 4, 5  ';
    const expected = [1, 2, 3, 4, 5];
    const result = parseListInput(input);
    expect(result).toEqual(expected);
  });
});

describe('validateInput', () => {
  test('should return "Required" if input is empty', () => {
    const input = '';
    const expected = 'Required';
    const result = validateInput(input);
    expect(result).toEqual(expected);
  });

  test('should return "Invalid input" if input is not a valid list', () => {
    const input = '1, 2, 3, a';
    const expected =
      'Invalid input. Please enter a list of numbers separated by commas. (1, 3, 4, 5)';
    const result = validateInput(input);
    expect(result).toEqual(expected);
  });

  test('should return "Please input at least two list items" if input has less than 2 items', () => {
    const input = '1';
    const expected = 'Please input at least two list items.';
    const result = validateInput(input);
    expect(result).toEqual(expected);
  });

  test('should return undefined if input is valid', () => {
    const input = '1, 2, 3, 4, 5';
    const result = validateInput(input);
    expect(result).toBeUndefined();
  });
});
