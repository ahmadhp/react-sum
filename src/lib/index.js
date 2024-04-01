import { LIST_PATTERN_REGIX } from '@/constants';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const parseListInput = input => {
  const numbers = input.split(',').map(num => Number(num.trim()));
  return numbers;
};
export const validateInput = input => {
  if (!input.trim().length) {
    return 'Required';
  }
  if (!LIST_PATTERN_REGIX.test(input)) {
    return 'Invalid input. Please enter a list of numbers separated by commas. (1, 3, 4, 5)';
  }
  const numbers = parseListInput(input);
  if (numbers.length < 2) {
    return 'Please input at least two list items.';
  }
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
