import { memoize } from './helpers';

export const sumOfSquares = (n: number) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};

export const squareOfSum = (n: number) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
};

export const calculateDifference = (n: number) => {
  return Math.abs(squareOfSum(n) - sumOfSquares(n));
};

export const memoCalculateDifference = memoize(calculateDifference);
