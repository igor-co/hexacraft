export function powerOfTwo(numbers: number[]): number[] {
  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }

  if (numbers.some((number) => typeof number !== 'number')) {
    throw new Error('Array contains values that are not numbers');
  }

  return numbers.map((number) => number ** 2);
}
