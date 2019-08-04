import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './news-item.scss';

const NewsItem = ({ hit, filters }) => {
  return (
    <div className={`hit-item ${filters.tags === 'comment' ? 'less-side-padding' : ''}`}>
      {
        filters.tags === 'comment' ?
          <>
            <span className="title">{hit.story_title}</span>
            <div className="support-hit">
              <Link to={`/author/${hit.author}`}>by {hit.author}</Link>
              <span>
                {moment(hit.created_at).fromNow()}
              </span>
            </div>
            <p className="comment">
              <ReactMarkdown
                source={hit.comment_text}
                escapeHtml={false} />
            </p>
          </>
          :
          <>
            <span className="score">{hit.points}</span>
            <a className="title" href={hit.url} target="_blank" rel="noopener noreferrer">{hit.title}</a>
            <div className="support-hit">
              <Link to={`/author/${hit.author}`}>by {hit.author}</Link>
              <span>
                {moment(hit.created_at).fromNow()}
              </span>
              <Link to={{ pathname: `/comments/${hit.objectID}`, state: { storyTitle: hit.title, authorName: hit.author } }}>
                {hit.num_comments} comments
              </Link>
            </div>
          </>
      }
    </div>
  )
};

export default NewsItem;
