import React from 'react';
import { mount } from 'enzyme';
import Header from './header.ui';

let wrapped = mount(<Header />);

describe('Header', () => {
  it('should render the Header Component', () => {
    expect(wrapped).toMatchSnapshot();
  });
});