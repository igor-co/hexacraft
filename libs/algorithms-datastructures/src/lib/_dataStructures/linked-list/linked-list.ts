type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private size = 0;

  append(value: T): void {
    const newNode: ListNode<T> = {
      value,
      next: null,
    };

    if (!this.head) {
      // If the list is empty, set the head and tail to the node to append.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, append the node to the tail.
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.size++;
  }

  // Adds a node to the beginning of the list.
  prepend(value: T): void {
    // Create a new node.
    const newNode: ListNode<T> = {
      value,
      next: null,
    };

    // If the list is empty, make this the head and tail.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, insert it at the beginning of the list.
      newNode.next = this.head;
      this.head = newNode;
    }

    // Update the size.
    this.size++;
  }

  // Removes the first node with the given value from the linked list.
  deleteByValue(value: T): void {
    // If the linked list is empty, then there is nothing to delete.
    if (!this.head) {
      return;
    }

    // If the head contains the value, delete the head.
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return;
    }

    // Otherwise, iterate through the linked list.
    let currentNode = this.head;
    while (currentNode.next) {
      // If the next node contains the value, delete the next node.
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        this.size--;
        return;
      }
      // Otherwise, go to the next node.
      currentNode = currentNode.next;
    }

    // If we get here, we couldn't find the value to delete.
    throw new Error('Value not found');
  }

  // This function removes a node from the linked list at the specified index.
  // If the index is negative or greater than or equal to the size, the code throws an error.
  deleteByIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }

    // If index is 0, the head should be updated.
    if (index === 0) {
      this.head = this.head?.next || null;
      // If the head is null, the list is now empty, so the tail should be null as well.
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return;
    }

    // If index is not 0, the node at the previous index should be updated.
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    // If the node at the previous index is null, the index is not valid.
    if (!currentNode) {
      throw new Error('Invalid index');
    }

    // If the node at the previous index is not null, the node at the specified index can be removed.
    if (currentNode.next) {
      currentNode.next = currentNode.next.next;
      // If the next node is null, the tail should be updated.
      if (!currentNode.next) {
        this.tail = currentNode;
      }
      this.size--;
    }
  }

  // This code deletes the first node in the linked list.
  deleteFirst(): void {
    if (!this.head) {
      return;
    }

    // If there is a next node then set the head to that node
    this.head = this.head.next;
    // If there is no head that means the list was only one node long
    if (!this.head) {
      this.tail = null;
    }
    // Update the size of the list
    this.size--;
  }

  // Deletes the last item in the list
  deleteLast(): void {
    // If the list is empty, do nothing.
    if (!this.tail) {
      return;
    }

    // If the list only has one node, delete the head and tail.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    // Find the node before the tail.
    let currentNode: ListNode<T> | null = this.head;
    let prevNode: ListNode<T> | null = null;

    // We keep going until we reach the node before the tail.
    while (currentNode && currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // Remove the last node in the list, and update the tail to point to the previous node.
    if (prevNode) {
      prevNode.next = null;
      this.tail = prevNode;
      this.size--;
    }
  }

  print(): string {
    // We start at the beginning of the linked list.
    let currentNode = this.head;
    // We'll store all the values in this array.
    const values: T[] = [];

    // We keep looping until we've reached the end of the list.
    while (currentNode) {
      // We add the current node's value to the array.
      values.push(currentNode.value);
      // We move on to the next node in the list.
      currentNode = currentNode.next;
    }

    // We print out the values, separated by arrows.
    return values.join(' -> ');
  }

  getSize(): number {
    return this.size;
  }
}

export { LinkedList };
export type { ListNode };
