import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import NewsItem from './news-item';

import './news-results.scss';

const NewsResults = ({ fetchNewsData, hits, filters, status }) => {
  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData, filters]);

  return (
    <div className="News-Results row center-lg center-md">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7">
        {
          status === 'LOADING' ?
            <Loader 
              type="Oval"
              color="#00BFFF"
              height="50"	
              width="50"
            /> :
            hits.map((hit, index) => (
              <NewsItem 
                key={index}
                hit={hit}
                filters={filters} />
            ))
        }
      </div>

    </div>
  );
};

export default NewsResults; 
