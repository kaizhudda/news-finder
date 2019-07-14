import { FETCH_NEWS_DATA } from './types';
import newsSearchAPI from '../../apis/news-search';
import { selectFilters } from '../selectors/index';

import moment from 'moment';

export const fetchNewsData = () => async (dispatch, getState) => {
  const state = getState();
  const filters = selectFilters(state);
  console.log(filters);
  const created_at = moment().subtract(1, 'days').unix(); // last 24 hours
  const response = await newsSearchAPI.get(`${filters.relevance}?query=${filters.query}&tags=${filters.tags}&numericFilters=created_at_i>${created_at}`);
  console.log(response);
  dispatch({
    type: FETCH_NEWS_DATA,
    payload: response.data
  });
};
