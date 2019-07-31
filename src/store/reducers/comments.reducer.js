import { FETCH_COMMENTS } from '../actions/types';

const INITAL_STATE = {};

export const selectedCommentsThread = (state = INITAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default selectedCommentsThread;
