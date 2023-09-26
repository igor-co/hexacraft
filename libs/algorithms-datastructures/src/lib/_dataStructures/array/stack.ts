class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  push(n: T): void {
    this.stack.push(n);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  size(): number {
    return this.stack.length;
  }
}

export { Stack };
