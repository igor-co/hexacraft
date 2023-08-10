import { FIZZ_BUZZ_OPTIONS, getFizzBuzz, parseFizzBuzz } from './fizz-buzz';

describe('parseFizzBuzz()', () => {
  it('should return fizz when number is divisible by 3', () => {
    expect(parseFizzBuzz(3)).toBe(FIZZ_BUZZ_OPTIONS.FIZZ);
  });

  it('should return buzz when number is divisible by 5', () => {
    expect(parseFizzBuzz(5)).toBe(FIZZ_BUZZ_OPTIONS.BUZZ);
  });

  it('should return fizzbuzz when number is divisible by 3 and 5', () => {
    expect(parseFizzBuzz(15)).toBe(FIZZ_BUZZ_OPTIONS.FIZZBUZZ);
  });

  it('should return number when number is not divisible by 3 or 5', () => {
    expect(parseFizzBuzz(1)).toBe(1);
  });
});

describe('getFizzBuzz()', () => {
  it('should return fizzbuzz array', () => {
    expect(getFizzBuzz(15)).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
    ]);
  });

  it('should have 100 items', () => {
    expect(getFizzBuzz(100).length).toBe(100);
  });
});
