import { sumOfSquares, squareOfSum, calculateDifference } from './mockResults';

describe('mocked functions', () => {
  describe('sumOfSquares(n)', () => {
    it('adds the square values of n', () => {
      expect(sumOfSquares(10)).toEqual(385);
    })
  });

  describe('squareOfSum(n)', () => {
    it('squares the sum of n', () => {
      expect(squareOfSum(10)).toEqual(3025);
    })
  });

  describe('calculateDifference(n)', () => {
    it('returns the difference sumOfSquare(n) & squareOfSum(n)', () => {
      expect(calculateDifference(10)).toEqual(2640);
    });
  });
});
