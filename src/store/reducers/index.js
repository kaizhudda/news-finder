import { combineReducers } from 'redux';
import coreReducers from './core.reducer';
import filterReducers from './filter.reducer';

export default combineReducers({
  news: coreReducers,
  filters: filterReducers
});
