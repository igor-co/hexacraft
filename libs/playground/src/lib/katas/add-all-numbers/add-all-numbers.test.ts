import { addAllNumbers } from './add-all-numbers';
describe('addAllNumbers', () => {
  it('should add all numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const actual = addAllNumbers(numbers);
    expect(actual).toEqual(15);
  });
});
