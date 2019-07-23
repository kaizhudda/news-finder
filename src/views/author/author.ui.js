import React, { useEffect } from 'react';

import './author.scss';

const Author = ({ fetchUserDetails, match, user, status }) => {
  useEffect(() => {
    fetchUserDetails(match.params.username);
  }, []);

  const loading = () => (
    <div>
      Loading..
    </div>
  );

  const error = () => (
    <div>
      Error
    </div>
  );

  const success = () => (
    <div>
      This is an Author Page for {user.username}
    </div>
  );

  return (
    <div className="Author row center-lg center-md">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7">
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
