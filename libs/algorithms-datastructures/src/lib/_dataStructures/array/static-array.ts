class StaticArray<T> {
  insertEnd(arr: T[], n: T, length: number, capacity: number): void {
    if (length < capacity) {
      arr[length] = n;
    }
  }

  removeEnd(arr: T[], length: number): void {
    if (length > 0) {
      arr[length - 1] = undefined as T;
      length--;
    }
  }

  insertMiddle(arr: T[], i: number, n: T, length: number): void {
    for (let index = length - 1; index > i - 1; index--) {
      arr[index + 1] = arr[index];
    }
    arr[i] = n;
  }

  removeMiddle(arr: T[], i: number, length: number): void {
    for (let index = i + 1; index < length; index++) {
      arr[index - 1] = arr[index];
    }
  }

  printArr(arr: T[], length: number): void {
    let s = '';
    for (let i = 0; i < length; i++) {
      s += arr[i] + ' ';
    }
    console.log(s);
  }
}

export { StaticArray };
