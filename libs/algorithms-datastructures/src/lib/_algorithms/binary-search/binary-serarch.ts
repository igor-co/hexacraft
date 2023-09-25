/*
  Returns position in array of searched element
*/
function binarySearch<T>(list: T[], element: T): number | null {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = list[mid];

    if (guess === element) {
      return mid;
    } else if (guess < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
}

export { binarySearch };
