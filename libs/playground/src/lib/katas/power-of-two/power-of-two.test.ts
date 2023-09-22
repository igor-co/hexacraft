import { powerOfTwo } from './power-of-two';

describe('powerOfTwo()', () => {
  describe('when input is not array', () => {
    it('should throw error', () => {
      const input: any = 'some string';

      const actual = () => powerOfTwo(input);

      expect(actual).toThrowError();
    });
  });

  describe('when input is array', () => {
    describe('and it is empty', () => {
      it('should return empty array', () => {
        const input: number[] = [];

        const actual = powerOfTwo(input);

        expect(actual).toEqual([]);
      });
    });

    describe('and it contains not a number', () => {
      it('should throw error', () => {
        const input: any[] = ['0', 1, 2];

        const actual = () => powerOfTwo(input);

        expect(actual).toThrowError();
      });
    });

    describe('and it contains positive numbers', () => {
      it('should return array of numbers in power of 2', () => {
        const input: number[] = [1, 2, 3];

        const actual = powerOfTwo(input);

        expect(actual).toEqual([1, 4, 9]);
      });
    });
    describe('and it contains negative numbers', () => {
      it('should return array of numbers in power of 2', () => {
        const input: number[] = [-1, -2, -3];

        const actual = powerOfTwo(input);

        expect(actual).toEqual([1, 4, 9]);
      });
    });
    describe('and it contains float numbers', () => {
      it('should return array of numbers in power of 2', () => {
        const input: number[] = [-1.2, 2.75, 0];

        const actual = powerOfTwo(input);

        expect(actual).toEqual([1.44, 7.5625, 0]);
      });
    });
  });
});
