import {
  parseListInput,
  validateInput,
  detectSumsV2,
  detectSumsV1,
} from '.';

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

test('detectSumsV2 should return the correct results', async () => {
  expect(await detectSumsV2([1, 2, 3])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
  ]);
  expect(await detectSumsV2([1, 2, 3, 4])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
    { pA: 0, pB: 2, sum: 3 },
  ]);
  expect(await detectSumsV2([3, 0, 3])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
    { pA: 1, pB: 2, sum: 0 },
  ]);
  expect(await detectSumsV2([1, 2, 4])).toEqual([]);
  expect(await detectSumsV2([3, 0, 2])).toEqual([]);
  expect(await detectSumsV2([1, 2, 3, 4, 5])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
    { pA: 0, pB: 2, sum: 3 },
    { pA: 0, pB: 3, sum: 4 },
    { pA: 1, pB: 2, sum: 4 },
  ]);
  expect(await detectSumsV2([1, 2, 1, 3])).toEqual([
    { pA: 0, pB: 1, sum: 3 },
    { pA: 0, pB: 2, sum: 1 },
    { pA: 1, pB: 2, sum: 3 },
  ]);
  expect(await detectSumsV2([1, 2, 1, 2, 3])).toEqual([
    { pA: 0, pB: 1, sum: 4 },
    { pA: 0, pB: 2, sum: 1 },
    { pA: 0, pB: 2, sum: 3 },
    { pA: 0, pB: 3, sum: 4 },
    { pA: 1, pB: 2, sum: 4 },
    { pA: 2, pB: 3, sum: 4 },
  ]);
});
test('detectSumsV1 should return the correct results', async () => {
  expect(await detectSumsV1([1, 2, 3])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
  ]);
  expect(await detectSumsV1([1, 2, 3, 4])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
    { pA: 0, pB: 2, sum: 3 },
  ]);
  expect(await detectSumsV1([3, 0, 3])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
    { pA: 1, pB: 2, sum: 0 },
  ]);
  expect(await detectSumsV1([1, 2, 4])).toEqual([]);
  expect(await detectSumsV1([3, 0, 2])).toEqual([]);
  expect(await detectSumsV1([1, 2, 3, 4, 5])).toEqual([
    { pA: 0, pB: 1, sum: 2 },
    { pA: 0, pB: 2, sum: 3 },
    { pA: 0, pB: 3, sum: 4 },
    { pA: 1, pB: 2, sum: 4 },
  ]);
  expect(await detectSumsV1([1, 2, 1, 3])).toEqual([
    { pA: 0, pB: 1, sum: 3 },
    { pA: 0, pB: 2, sum: 1 },
    { pA: 1, pB: 2, sum: 3 },
  ]);
  expect(await detectSumsV1([1, 2, 1, 2, 3])).toEqual([
    { pA: 0, pB: 1, sum: 4 },
    { pA: 0, pB: 2, sum: 1 },
    { pA: 0, pB: 2, sum: 3 },
    { pA: 0, pB: 3, sum: 4 },
    { pA: 1, pB: 2, sum: 4 },
    { pA: 2, pB: 3, sum: 4 },
  ]);
});
