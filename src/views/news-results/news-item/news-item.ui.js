import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './news-item.scss';

const NewsItem = ({ hit, filters }) => {
  // const highlightQueryInTitle = (title, higlight) => {
  //   if (higlight) {
  //     let parts = title.split(new RegExp(`(${higlight})`, 'gi'));
  //     console.log(parts);
  //     return (
  //       <>
  //         {
  //           parts.map((part, i) =>
  //             <span
  //               key={i}
  //               style={part.toLowerCase() === higlight.toLowerCase() ?
  //                 { fontWeight: 'bold', background: 'yellow' } : {}}>
  //               &nbsp; {part} &nbsp;
  //             </span>
  //           )
  //         }
  //       </>
  //     );
  //   }
  //   return title;
  // }


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
            <a className="title" href={hit.url} target="_blank" rel="noopener noreferrer">{hit.title}</a>
            <div className="support-hit">
              <Link to={`/author/${hit.author}`}>by {hit.author}</Link>
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
