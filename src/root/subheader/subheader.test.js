import React from 'react';
import { mount } from 'enzyme';
import Subheader from './subheader.ui';

const props = {
  setTag: jest.fn(),
  setRelevance: jest.fn(),
  setTimeRange: jest.fn()
};
let wrapped = mount(<Subheader {...props} />);

describe('Subheader', () => {
  it('should render the Subheader Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should dispatch onTagsChange action', () => {
    const value =  {value: ['test']};
    wrapped.find('Dropdown').first().prop('onChange')(value);
    expect(props.setTag).toHaveBeenCalledWith(value.value);
  });


});