import { FETCH_USER  } from '../actions/types';

const INITAL_STATE = {};

export const selectedUser = (state = INITAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default: 
      return state;
  }
};

export default selectedUser;
