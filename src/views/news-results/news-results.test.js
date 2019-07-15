import React from 'react';
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
    wrapped = mount(<NewsResult {...props} />);
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

  describe('when filter tag is comment', () => {
    it('should render the story title and comment', () => {
      props.filters.tags = 'comment';
      props.hits[0].story_title = 'Test Comment Title';
      props.hits[0].comment_text = 'Test Comment';
      wrapped = shallow(<NewsResult {...props} />);
      expect(wrapped.find('.title').text()).toEqual(props.hits[0].story_title);
      expect(wrapped.find('ReactMarkdown').exists()).toBe(true);
    });
  });
});