import { FETCH_NEWS_DATA } from './types';
import newsSearchAPI from '../../apis/news-search';

import moment from 'moment';

export const fetchNewsData = query => async dispatch => {
  const created_at = moment().subtract(1, 'days').unix();
  const response = await newsSearchAPI.get(`search?query=${query || ''}&tags=story&numericFilters=created_at_i>${created_at}`);
  console.log(response);
  dispatch({
    type: FETCH_NEWS_DATA,
    payload: response.data
  });
};
