import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';

const props = {
  value: 'Test Search Value',
  onChange: jest.fn()
};
let wrapped = shallow(<SearchBar {...props} />);

describe('SearchBar', () => {
  it('should render the Search Bar Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render the search value', () => {
    expect(wrapped.find('#search-bar').getElement().props.value).toEqual(props.value);
  });

  it('should call the onChange function when input field changed', () => {
    wrapped.find('#search-bar').simulate('change', { target: { value: props.value } });
    expect(props.onChange).toHaveBeenCalled();
  });
});