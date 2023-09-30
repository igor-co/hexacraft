import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  it('should append', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.print()).toBe('1 -> 2 -> 3');
  });
  it('should prepend', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.prepend(0);

    expect(list.print()).toBe('0 -> 1 -> 2');
  });
  it('should prepend one element to empty list', () => {
    const list = new LinkedList<number>();

    list.prepend(0);

    expect(list.print()).toBe('0');
  });
  it('should delete by value', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.prepend(0);
    list.deleteByValue(0);

    expect(list.print()).toBe('1 -> 2');
  });
  it('should delete by index', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.prepend(0);
    list.deleteByIndex(1);

    expect(list.print()).toBe('0 -> 2');
  });
  it('should delete first', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);
    list.deleteFirst();

    expect(list.print()).toBe('2 -> 3');
  });
  it('should delete last', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);
    list.deleteLast();

    expect(list.print()).toBe('1 -> 2');
  });
});
