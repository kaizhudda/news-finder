import React from 'react';
import { shallow } from 'enzyme';
import App from './app.ui';

let wrapped = shallow(<App />);

describe('App', () => {
  it('should render the App Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render Header', () => {
    expect(wrapped.find('Connect(Header)').exists()).toBe(true);
  });

  it('should render SubHeader', () => {
    expect(wrapped.find('Connect(SubHeader)').exists()).toBe(true);
  });

  it('should render Routes', () => {
    expect(wrapped.find('Routes').exists()).toBe(true);
  });

});