import { SET_QUERY, SET_TAG } from '../actions/types';

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
    case SET_TAG:
      return { ...state, tags: action.payload };
    default:
      return state;
  }
}

export default filters;
