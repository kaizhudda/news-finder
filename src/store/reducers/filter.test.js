import { filters } from './filter.reducer';
import { SET_QUERY, SET_RELEVANCE, SET_TAG, SET_TIME_RANGE } from '../actions/types';

describe('Filter reducer', () => {
  let filterState;

  describe('when init', () => {
    beforeEach(() => {
      filterState = {
        query: '',
        page: '',
        tags: 'story',
        createdAt: '',
        relevance: 'search'
      };
    });

    it('should set the reducer state to default state', () => {
      const actuaReducer = filters(filterState, {});

      expect(actuaReducer).toEqual(filterState);
    });

    it('should run with no params', () => {
      const actuaReducer = filters();
  
      expect(actuaReducer).toEqual(filterState);
    });

    it('should set the value into query param in filter state', () => {
      const query = 'test query';
      filterState = { ...filterState, query }
      const actuaReducer = filters(filterState, { type: SET_QUERY, payload: query });

      expect(actuaReducer).toEqual(filterState);
    });

    it('should set relevance value in filter state', () => {
      const relevance = 'test relevance';
      filterState = { ...filterState, relevance }
      const actuaReducer = filters(filterState, { type: SET_RELEVANCE, payload: relevance });

      expect(actuaReducer).toEqual(filterState);
    });

    it('should set tag value in filter state', () => {
      const tags = 'test tag';
      filterState = { ...filterState, tags }
      const actuaReducer = filters(filterState, { type: SET_TAG, payload: tags });

      expect(actuaReducer).toEqual(filterState);
    });

    it('should set time range value in filter state', () => {
      const createdAt = 'test tag';
      filterState = { ...filterState, createdAt }
      const actuaReducer = filters(filterState, { type: SET_TIME_RANGE, payload: createdAt });

      expect(actuaReducer).toEqual(filterState);
    });


  });

  // it('should set the summary data', () => {
  //   const actuaReducer = summaryReducer([], { type: FETCH_SUMMARY_DATA, payload: summaryData });

  //   expect(actuaReducer).toEqual(summaryData);
  // });
});
