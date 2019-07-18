import statusReducer from './status.reducer';
import { STATUS } from '../actions/types';

describe('Status Reducer', () => {
  describe('when init', () => {
    let status = '';

    it('should set the status reducer with default params', () => {
      const actuaReducer = statusReducer(status, {});

      expect(actuaReducer).toEqual(status);
    });

    it('should run with no params', () => {
      const actuaReducer = statusReducer();
  
      expect(actuaReducer).toEqual(status);
    });

    it('should set the value status state', () => {
      status = 'LOADING'
      const actuaReducer = statusReducer('', { type: STATUS, payload: status });

      expect(actuaReducer).toEqual(status);
    });
  });
});
