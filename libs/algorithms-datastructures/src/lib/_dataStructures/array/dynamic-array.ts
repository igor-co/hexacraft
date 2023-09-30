class DynamicArray<T> {
  private capacity: number;
  private length: number;
  private arr: T[];

  constructor() {
    this.capacity = 2;
    this.length = 0;
    this.arr = new Array(2);
  }

  // Insert n in the last position of the array
  pushback(n: T): void {
    if (this.length === this.capacity) {
      this.resize();
    }

    // insert at next empty position
    this.arr[this.length] = n;
    this.length++;
  }

  private resize(): void {
    // Create new array of double capacity
    this.capacity = 2 * this.capacity;
    const newArr: T[] = new Array(this.capacity);

    // Copy elements to newArr
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  // Remove the last element in the array
  popback(): void {
    if (this.length > 0) {
      this.length--;
    }
  }

  // Get value at i-th index
  get(i: number): T | undefined {
    if (i < this.length) {
      return this.arr[i];
    }
    // Here we would throw an out of bounds exception
    return undefined;
  }

  // Insert n at i-th index
  insert(i: number, n: T): void {
    if (i < this.length) {
      this.arr[i] = n;
      return;
    }
    return;
    // Here we would throw an out of bounds exception
  }

  print(): void {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += this.arr[i] + ' ';
    }
    console.log(s);
  }
}

export { DynamicArray };

// JS version
/**
 class DynamicArray {
    constructor() {
        this.capacity = 2;
        this.length = 0;
        this.arr = new Array(2);
    }

    // Insert n in the last position of the array
    pushback(n) {
        if (this.length == this.capacity) {
            this.resize();
        }

        // insert at next empty position
        this.arr[this.length] = n;
        this.length++;
    }

    resize() {
        // Create new array of double capacity
        this.capacity = 2 * this.capacity;
        const newArr = new Array(this.capacity);

        // Copy elements to newArr
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    // Remove the last element in the array
    popback() {
        if (this.length > 0) {
            this.length--;
        }
    }

    // Get value at i-th index
    get(i) {
        if (i < this.length) {
            return this.arr[i];
        }
        // Here we would throw an out of bounds exception
        return;
    }

    // Insert n at i-th index
    insert(i, n) {
        if (i < this.length) {
            this.arr[i] = n;
            return;
        }
        return;
        // Here we would throw an out of bounds exception
    }

    print() {
        let s = "";
        for (let i = 0; i < this.length; i++) {
            s+= this.arr[i] + " ";
        }
        console.log(s);
    }
}
 */
