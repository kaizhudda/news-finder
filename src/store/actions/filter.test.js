import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_QUERY, SET_TAG, SET_RELEVANCE, SET_TIME_RANGE } from './types';
import { setQuery, setTag, setRelevance, setTimeRange } from './filter-actions';

const mockStore = configureMockStore([thunk]);
let store = null;

describe('Filter Actions', () => {
  beforeEach(() => {
    store = mockStore();    
  });

  it('should create an action to set query', async () => {
    const query = 'hi';
    await store.dispatch(setQuery(query));
    const actions = store.getActions();
  
    const expectedAction = { type: SET_QUERY, payload: query };
  
    expect(actions[0]).toEqual(expectedAction);
  });

  it('should create an action to set tag', async () => {
    const tag = 'hi';
    await store.dispatch(setTag(tag));
    const actions = store.getActions();
  
    const expectedAction = { type: SET_TAG, payload: tag };
  
    expect(actions[0]).toEqual(expectedAction);
  });

  it('should create an action to set tag to empty when tag is `all`', async () => {
    const tag = 'all';
    await store.dispatch(setTag(tag));
    const actions = store.getActions();
  
    const expectedAction = { type: SET_TAG, payload: '' };
  
    expect(actions[0]).toEqual(expectedAction);
  });

  it('should create an action to set relevance', async () => {
    const relevance = 'hi';
    await store.dispatch(setRelevance(relevance));
    const actions = store.getActions();
  
    const expectedAction = { type: SET_RELEVANCE, payload: relevance };
  
    expect(actions[0]).toEqual(expectedAction);
  });
  
  it('should create an action to set time range', async () => {
    const last24 = 'last_24h';
    const pastWeek = 'past_week';
    const pastMonth = 'past_month';
    const pastYear = 'past_year';
    await store.dispatch(setTimeRange(last24));
    await store.dispatch(setTimeRange(pastWeek));
    await store.dispatch(setTimeRange(pastMonth));
    await store.dispatch(setTimeRange(pastYear));
    await store.dispatch(setTimeRange(null));
    const actions = store.getActions();
  
    const expectedAction1 = { type: SET_TIME_RANGE };
    const expectedAction2 = { type: SET_TIME_RANGE };
    const expectedAction3 = { type: SET_TIME_RANGE };
    const expectedAction4 = { type: SET_TIME_RANGE };
    const expectedAction5 = { type: SET_TIME_RANGE, payload: null };
  
    expect(actions[0].type).toEqual(expectedAction1.type);
    expect(actions[1].type).toEqual(expectedAction2.type);
    expect(actions[2].type).toEqual(expectedAction3.type);
    expect(actions[3].type).toEqual(expectedAction4.type);
    expect(actions[4]).toEqual(expectedAction5);
  });

});
