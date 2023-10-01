// https://leetcode.com/problems/contains-duplicate/

import { containsDuplicate } from './contains-duplicate';

describe('containsDuplicate', () => {
  it('when empty array, return false', () => {
    expect(containsDuplicate([])).toEqual(false);
  });

  it('when some number is repeated, return true', () => {
    expect(containsDuplicate([1, 2, 3, 0, 1])).toEqual(true);
  });
  it('when no number is repeated, return false', () => {
    expect(containsDuplicate([1, 2, 3])).toEqual(false);
  });
});
