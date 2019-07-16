import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import Summary from './index';

let wrapped;
const mockStore = configureMockStore([thunk]);
const intitalState = {
  news: { hits: [{ created_at: '2018-03-14T03:50:30.000Z', title: 'steph', url: '', author: 'test' }]  },
  filters: { tags: 'comment' },
  status: ''
}
const props = {
  hits: [{ created_at: '2018-03-14T03:50:30.000Z', title: 'steph', url: '', author: 'test' }],
  filters: { tags: 'comment' },
  status: '' 
}

describe('Summary', () => {
  beforeEach(() => {
    const store = mockStore(intitalState);
    wrapped = mount(<Summary store={store} {...props} />);
  });

  it('should render the Summary Container Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should contain filters prop', () => {
    expect(wrapped.props().filters).toBe(props.filters);
  });

  it('should contain hits prop', () => {
    expect(wrapped.props().hits).toBe(props.hits);
  });

  it('should contain filters prop', () => {
    expect(wrapped.props().status).toBe(props.status);
  });
});
