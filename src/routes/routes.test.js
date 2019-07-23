import React from 'react';
import { shallow } from 'enzyme';
import Routes from './index';

let wrapped = shallow(<Routes />);

describe('Routes', () => {
  it('should render the Routes Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should have 2 route', () => {
    expect(wrapped.find('Route').length).toBe(2);
  });
});