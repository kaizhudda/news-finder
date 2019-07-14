import { STATUS } from '../actions/types';

export const status = (state = '', action) => {
  switch (action.type) {
    case STATUS:
      return action.payload;
    default: 
      return state;
  }
};

export default status;
