import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import NewsItem from './comments-item';

import './comments.scss';

const Comments = ({ fetchComments, match, comments, status, location: { pathname, state } }) => {
  console.log(state);
  useEffect(() => {
    fetchComments(match.params.storyId);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const loading = () => (
    <div className="loader">
      <Loader
        type="Oval"
        color="#00BFFF"
        height="50"
        width="50"
      />
    </div>
  );

  const error = () => (
    <div>
      Error
    </div>
  );

  const success = () => (
    <div className="comments-box">
      {
        comments &&
          comments.length > 1 ?
          <>
            <div> {state.storyTitle} </div>
            <div> by {state.authorName} </div>
            {
              comments.map((comment) => (
                <NewsItem key={comment.objectID} hit={comment} />
              ))
            }
          </>
          :
          <div className="no-comments"> There are no comments for this article </div>
      }
    </div>
  );

  console.log('comments', comments);

  return (
    <div className={`Comments row center-lg center-md`}>
      <div className={`col-xs-12 col-sm-12 col-md-8 col-lg-7 ${status}`}>
        {
          status === 'LOADING' ?
            loading()
            : status === 'ERROR' ?
              error()
              :
              success()
        }
      </div>
    </div>
  );
};

export default Comments;
