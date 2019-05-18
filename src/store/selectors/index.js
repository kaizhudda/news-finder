import { createSelector } from 'reselect';

const getTest = (state) => state.test;

export const selectTest = createSelector(
  [getTest],
  test => test
);
