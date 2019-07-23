import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import NewsResult from './news-results.ui';

let props = {
  fetchNewsData: jest.fn(),
  hits: [
    {
      created_at: "2018-03-14T03:50:30.000Z",
      title: "Test",
      url: "test",
      author: "Cogito",
      points: 6015,
      story_text: null,
      comment_text: null,
      num_comments: 436,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1520999430,
      relevancy_score: 8012
    },
  ],
  filters: {},
  status: ''
};
let wrapped;

describe('NewsResult', () => {
  beforeEach(() => {
    wrapped = mount(
      <Router>
        <NewsResult {...props} />
      </Router>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('should render the NewsResult Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should dispatch fetchNewsData action on load', () => {
    expect(props.fetchNewsData).toHaveBeenCalled();
  });

  it('should render one news item', () => {
    expect(wrapped.find('NewsItem').length).toBe(1);
  });

  describe('when status is loading', () => {

    afterEach(() => {
      props.status = '';
    });
    it('should render Loading Spinner', () => {
      props.status = 'LOADING';
      wrapped = mount(<NewsResult {...props} />);
      expect(wrapped.find('Loader').exists()).toBe(true);
    });
  });

});