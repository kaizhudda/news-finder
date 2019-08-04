import React from 'react';
import { mount } from 'enzyme';
import Header from './header.ui';

let props = {
  setQuery: jest.fn()
};
let wrapped = mount(<Header {...props} />);

describe('Header', () => {
  it('should render the Header Component', () => {
    expect(wrapped).toMatchSnapshot();
  });
});