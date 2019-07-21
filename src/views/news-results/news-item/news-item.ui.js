import React from 'react';
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
              <span>by {hit.author}</span>
              <span>
                {moment(hit.created_at).fromNow()}
              </span>
            </div>
            {/* <span className="title">{hit.comment_text}</span> */}
            <span className="comment">
              <ReactMarkdown
                source={hit.comment_text}
                escapeHtml={false} />
            </span>
          </>
          :
          <>
            <span className="score">{hit.points}</span>
            <span className="title">{hit.title}</span>
            <div className="support-hit">
              <span>by {hit.author}</span>
              <span>
                {moment(hit.created_at).fromNow()}
              </span>
              <span>{hit.num_comments} comments</span>
            </div>
          </>
      }
    </div>
  )
};

export default NewsItem;
