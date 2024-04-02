// Since async Server Components are new to the React ecosystem, some tools do not fully support them as stated in https://nextjs.org/docs/app/building-your-application/testing.

import { detectSumsV2, detectSumsV1 } from '@/server/actions';
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
