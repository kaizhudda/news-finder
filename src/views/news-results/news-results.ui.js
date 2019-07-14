import React, { useEffect } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import ReactMarkdown from 'react-markdown';
import SubHeader from '../../root/subheader';
import './news-results.scss';

const NewsResults = ({ fetchNewsData, hits, filters, status }) => {
  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData, filters]);

  return (
    <div className="News-Results row center-lg center-md">
      <SubHeader />
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
              <div key={index} className={`hit-item ${filters.tags === 'comment' ? 'less-side-padding' : ''}`}>
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
                          escapeHtml={false}/>
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
            ))
        }
      </div>

    </div>
  );
};

export default NewsResults; 
