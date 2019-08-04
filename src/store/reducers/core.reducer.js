import { FETCH_NEWS_DATA } from '../actions/types';

const INITAL_STATE = {
  hits: []
};

export const news = (state = INITAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_NEWS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default news;
