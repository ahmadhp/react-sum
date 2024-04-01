'use server';
const sumIndexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
export async function detectSums(arr) {
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

export async function detectSumsV2(arr) {
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
