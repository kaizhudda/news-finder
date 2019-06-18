import { combineReducers } from 'redux';
import { LOAD_TEST } from '../actions/types';

const INITAL_STATE = {
  hits: []
};

export const test = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOAD_TEST:
      return action.payload;
    default: 
      return state;
  }
};

export default combineReducers({
  test
});
