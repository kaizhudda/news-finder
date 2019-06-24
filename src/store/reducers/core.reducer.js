import { combineReducers } from 'redux';
import { FETCH_NEWS_DATA, SET_QUERY } from '../actions/types';

const INITAL_STATE = {
  hits: []
};

export const news = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS_DATA:
      return action.payload;
    default: 
      return state;
  }
};


const INITAL_FILTERS = {
  query: '',
  page: '',
  tags: '',
  createdAt: ''
};

export const filters = (state = INITAL_FILTERS, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  news,
  filters
});
