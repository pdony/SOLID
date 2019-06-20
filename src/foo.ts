export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);

export const random1to10 = (): number => {
  return Math.round(Math.random()*10);
};