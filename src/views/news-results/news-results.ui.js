import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import NewsItem from './news-item';

import './news-results.scss';

const NewsResults = ({ fetchNewsData, hits, filters, status, location: { pathname }, setPageUp, setPageDown, pagination }) => {
  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData, filters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onHandleNextPageClicked = () => {
    setPageUp();
  }

  const onHandlePreviousPageClicked = () => {
    setPageDown();
  }

  const nextPageCheck = () => pagination.page < (pagination.nbPages - 1)
  const previousPageCheck = () => pagination.page > 0

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
            <>
              {
                hits.map((hit, index) => (
                  <NewsItem
                    key={index}
                    hit={hit}
                    filters={filters} />
                ))
              }
              <div className="pagination-content">
                <Link
                  onClick={onHandlePreviousPageClicked}
                  className="pagination-arrows"
                  style={previousPageCheck() ? {} : { pointerEvents: 'none' }}>
                  <i class="fas fa-chevron-left" />
                </Link>
                <Link
                  onClick={onHandleNextPageClicked}
                  className="pagination-arrows"
                  style={nextPageCheck() ? {} : { pointerEvents: 'none' }}>
                  <i class="fas fa-chevron-right" />
                </Link>
              </div>
            </>
        }
      </div>

    </div>
  );
};

export default NewsResults; 
