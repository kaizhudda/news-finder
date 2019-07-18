import newsReducer from './core.reducer';
import { news } from './core.reducer';
import { FETCH_NEWS_DATA } from '../actions/types';

describe('filter reducer', () => {
  const filterState = {
    hits: []
  };

  describe('when init', () => {

    it('should set the reducer state to default state', () => {
      const actuaReducer = news(filterState, {});

      expect(actuaReducer).toEqual(filterState);
    });

    it('should set the reducer state to default state', () => {
      const actuaReducer = news();

      expect(actuaReducer).toEqual(filterState);
    });

    it('should set the value into news reducer', () => {
      const state = {
        hits: [
          {
            author: 'author',
            title: 'title',
            url: 'https:///www.google.com'
          }
        ],
        nbHits: 900,
        page: 0,
        nbPages: 24,
        hitsPerPage: 20,
      };
      const actuaReducer = newsReducer(filterState, { type: FETCH_NEWS_DATA, payload: state });

      expect(actuaReducer).toEqual(state);
    });


  });

  // it('should set the summary data', () => {
  //   const actuaReducer = summaryReducer([], { type: FETCH_SUMMARY_DATA, payload: summaryData });

  //   expect(actuaReducer).toEqual(summaryData);
  // });
});
