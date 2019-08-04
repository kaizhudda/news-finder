import { SET_QUERY, SET_TAG, SET_RELEVANCE, SET_TIME_RANGE, SET_PAGE } from '../actions/types';

const INITAL_FILTERS = {
  query: '',
  page: 0,
  tags: 'story',
  createdAt: '',
  relevance: 'search'
};

export const filters = (state = INITAL_FILTERS, action = {}) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_TAG:
      return { ...state, tags: action.payload };
    case SET_RELEVANCE:
      return { ...state, relevance: action.payload };
    case SET_TIME_RANGE:
      return { ...state, createdAt: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export default filters;
