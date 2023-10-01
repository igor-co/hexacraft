function containsDuplicate(numbers: number[]): boolean {
  const set = new Set<number>();

  for (const number of numbers) {
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }

  return false;
}

export { containsDuplicate };
