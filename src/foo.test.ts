import { sum } from './foo';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', async () => {

  const x = await Promise.resolve(sum());


  expect(sum(1, 1, 5)).toBe(7);
});

test('ok', () => {  
  expect(3).toBe(3);
});