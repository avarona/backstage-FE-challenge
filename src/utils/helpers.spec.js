import { memoize, track } from './helpers';

describe('helper functions', () => {
  describe('memoize()', () => {
    const func = jest.fn((a) => a + 100);
    memoize(func);

    // it('calls the function passed in', () => {
    //   expect(func).toHaveBeenCalled();
    // });

    it('returns the correct function value', () => {
      const memoFunc = memoize(func);
      expect(memoFunc(10)).toEqual(110);
    });
  });

  describe('track', () => {
    describe('numberOfRequests()', () => {
      it('returns the correct value', () => {
        expect(track.numberOfRequests(10)).toEqual(1);
        expect(track.numberOfRequests(10)).toEqual(2);
        expect(track.numberOfRequests(1)).toEqual(1);
      });
    });
  });
});
