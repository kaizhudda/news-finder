import { combineReducers } from 'redux';
import { SET_QUERY } from '../actions/types';

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

export default filters;
