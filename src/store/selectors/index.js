import { createSelector } from 'reselect';

const getNews = (state) => state.news;
const getFilters = (state) => state.filters;
const getStatus = (state) => state.status;
const getUser = (state) => state.user;
const getComments = (state) => state.comments;

export const selectPageNumber = createSelector(
  [getNews],
  news => {
    return { page: news.page, nbPages: news.nbPages };
  }
);

export const selectHits = createSelector(
  [getNews],
  news => news.hits
);

export const selectFilters = createSelector(
  [getFilters],
  filters => filters
);

export const selectStatus = createSelector(
  [getStatus],
  status => status
);

export const selectUserData = createSelector(
  [getUser],
  user => user
);

export const selectCommentsThread = createSelector(
  [getComments],
  comments => comments.hits
);
