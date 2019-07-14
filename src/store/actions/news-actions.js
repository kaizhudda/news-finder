import { FETCH_NEWS_DATA, STATUS } from './types';
import newsSearchAPI from '../../apis/news-search';
import { selectFilters } from '../selectors/index';

export const fetchNewsData = () => async (dispatch, getState) => {
  dispatch({ type: STATUS, payload: 'LOADING' });
  const state = getState();
  const filters = selectFilters(state);
  console.log(filters);
  const created_at = filters.createdAt ? `&numericFilters=created_at_i>${filters.createdAt}` : '';
  try {
    const response = await newsSearchAPI.get(`${filters.relevance}?query=${filters.query}&tags=${filters.tags}${created_at}`);
    dispatch({
      type: FETCH_NEWS_DATA,
      payload: response.data
    });
    dispatch({ type: STATUS, payload: '' });
  } catch (err) {
    dispatch({ type: STATUS, payload: 'ERROR' });
  }

};
