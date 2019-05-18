import { LOAD_TEST } from './types';

export const loadTest = () => async dispatch => {
  dispatch({
    type: LOAD_TEST,
    payload: 'testing'
  });
};
