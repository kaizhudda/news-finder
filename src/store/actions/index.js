import { LOAD_TEST } from './types';
import newsSearchAPI from '../../apis/news-search';

export const loadTest = () => async dispatch => {
  const response = await newsSearchAPI.get('search?query=bill&tags=story');
  console.log(response);
  dispatch({
    type: LOAD_TEST,
    payload: response.data
  });
};
