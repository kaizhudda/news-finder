import { createSelector } from 'reselect';

const getNews = (state) => state.news;

export const selectNewsData = createSelector(
  [getNews],
  news => news.nbPages
);

export const selectHits = createSelector(
  [getNews],
  news => news.hits
);
