import { LIST_PATTERN_REGIX } from '../constants';
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

//NOTE version 1
const sumIndexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

export async function detectSumsV1(arr) {
  const result = [];
  let sumIndexes;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      sumIndexes = sumIndexOfAll(arr, sum).filter(
        item => ![i, j].includes(item)
      );
      for (const sumIndex of sumIndexes) {
        result.push({ pA: i, pB: j, sum: sumIndex });
      }
    }
  }
  return result;
}

//NOTE version 2

function createIndexMap(arr) {
  const indexMap = {};
  arr.forEach((element, index) => {
    if (indexMap[element] === undefined) {
      indexMap[element] = [index];
    } else {
      indexMap[element].push(index);
    }
  });
  return indexMap;
}

export function detectSumsV2(arr) {
  const result = [];
  //  Creates an object that we can use for querying the indice of an element in O(1) time.
  const indexMap = createIndexMap(arr);
  let sumIndexes;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      // Get the indice of sum,
      sumIndexes = indexMap[sum];
      if (sumIndexes === undefined) {
        sumIndexes = [];
      }
      // Exclude indices of sum that are either i or j.
      sumIndexes = sumIndexes.filter(item => ![i, j].includes(item));
      for (const sumIndex of sumIndexes) {
        result.push({ pA: i, pB: j, sum: sumIndex });
      }
    }
  }

  return result;
}
