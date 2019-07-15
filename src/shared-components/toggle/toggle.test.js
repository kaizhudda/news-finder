import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './index';

let wrapped = shallow(<Toggle />);

describe('Toggle', () => {
  it('should render the Search Bar Component', () => {
    expect(wrapped).toMatchSnapshot();
  });
});