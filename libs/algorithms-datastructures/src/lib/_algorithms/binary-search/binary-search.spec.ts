import { binarySearch } from './binary-serarch';

describe('binarySearch', () => {
  it('should return null when the searched number is not in provided in array', () => {
    const numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(numbersList, 11)).toEqual(null);
  });
  it('should return the position of searched number when it is provided in array', () => {
    const numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(numbersList, 2)).toBe(1);
  });

  it('should return the position of searched string when it is provided in array', () => {
    const namesList: string[] = [
      'Alberto',
      'Boris',
      'Charles',
      'Daren',
      'Edward',
      'Fred',
    ];
    expect(binarySearch(namesList, 'Daren')).toBe(3);
  });

  it('should return the position of searched string when it is provided in array', () => {
    const namesList: string[] = [
      'Alberto',
      'Boris',
      'Charles',
      'Daren',
      'Edward',
      'Fred',
    ];
    expect(binarySearch(namesList, 'Igor')).toBe(null);
  });
});
