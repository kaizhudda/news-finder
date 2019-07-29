import React, { useEffect } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import ReactMarkdown from 'react-markdown';

import './author.scss';

const Author = ({ fetchUserDetails, match, user, status }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserDetails(match.params.username);
  }, []);

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
    <div className="author-box">
      <h2 className="author-user-title">User {user.username}</h2>
      <p className="author-about">
        <ReactMarkdown
          source={user.about}
          escapeHtml={false} />
      </p>
      <p className="author-about">
        <span className="about-title">Joined:</span>
        {moment(user.created_at).fromNow()}
      </p>
      <p className="author-about">
        <span className="about-title">Karma:</span>
        {user.karma}
      </p>
    </div>
  );

  return (
    <div className={`Author row center-lg center-md`}>
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

export default Author;
