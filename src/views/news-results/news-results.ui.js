import React, { useEffect } from 'react';
import moment from 'moment';
import './news-results.scss';

const NewsResults = ({ loadTest, hits }) => {
  useEffect(() => {
    loadTest();
  }, [])

  return (
    <div className="News-Results row center-lg center-md">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        {
          hits.map((hit, index) => (
            <div key={index} className="hit-item">
              <h3>{hit.title}</h3>
              <div className="support-hit">
                <p>{hit.points} points</p>
                <p>{hit.author}</p>
                <p>
                    {moment(hit.created_at).fromNow()}
                </p>
                <p>{hit.num_comments} comments</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default NewsResults; 
