const FIZZ = 'fizz';
const BUZZ = 'buzz';
const FIZZBUZZ = 'fizzbuzz';

const FIZZ_BUZZ_OPTIONS = {
  FIZZ,
  BUZZ,
  FIZZBUZZ,
} as const;

type Fizz = typeof FIZZ;
type Buzz = typeof BUZZ;
type FizzBuzz = typeof FIZZBUZZ;
type NumberValue = number;

type ReturnOptions = Fizz | Buzz | FizzBuzz | NumberValue;

function parseFizzBuzz(inputNumber: number): ReturnOptions {
  switch (typeof inputNumber === 'number') {
    case inputNumber % 3 === 0 && inputNumber % 5 === 0:
      return FIZZ_BUZZ_OPTIONS.FIZZBUZZ;
    case inputNumber % 3 === 0:
      return FIZZ_BUZZ_OPTIONS.FIZZ;
    case inputNumber % 5 === 0:
      return FIZZ_BUZZ_OPTIONS.BUZZ;
    default:
      return inputNumber;
  }
}

function getFizzBuzz(number: number): ReturnOptions[] {
  const results: ReturnOptions[] = [];
  for (let i = 1; i <= number; i++) {
    results.push(parseFizzBuzz(i));
  }
  return results;
}

export { getFizzBuzz, parseFizzBuzz, FIZZ_BUZZ_OPTIONS };
export type { ReturnOptions };
