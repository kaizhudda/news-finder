import { combineReducers } from 'redux';
import coreReducers from './core.reducer';
import filterReducers from './filter.reducer';
import statusReducers from './status.reducer';

export default combineReducers({
  news: coreReducers,
  filters: filterReducers,
  status: statusReducers,
});
