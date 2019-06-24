import { createSelector } from 'reselect';

const getNews = (state) => state.news;
const getFilters = (state) => state.filters;

export const selectNewsData = createSelector(
  [getNews],
  news => news.nbPages
);

export const selectHits = createSelector(
  [getNews],
  news => news.hits
);

export const selectFilters = createSelector(
  [getFilters],
  filters => filters
);
