import { FETCH_NEWS_DATA } from './types';
import newsSearchAPI from '../../apis/news-search';

export const fetchNewsData = () => async dispatch => {
  const response = await newsSearchAPI.get('search?query=bill&tags=story');
  console.log(response);
  dispatch({
    type: FETCH_NEWS_DATA,
    payload: response.data
  });
};
