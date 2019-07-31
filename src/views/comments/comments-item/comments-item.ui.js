import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './comments-item.scss';

const NewsItem = ({ hit }) => {
  return (
    <div className="comment-hit-item less-side-padding">
      <div className="support-hit">
        <span>
          comment by <Link to={`/author/${hit.author}`}>{hit.author}</Link>on {moment(hit.created_at).format('MMM D, YYYY ')}
        </span>
      </div>
      <span className="comment">
        <ReactMarkdown
          source={hit.comment_text}
          escapeHtml={false} />
      </span>
    </div>
  )
};

export default NewsItem;
