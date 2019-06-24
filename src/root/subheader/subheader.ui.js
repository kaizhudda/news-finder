import React, { useState } from 'react';

import './subheader.scss';

const SubHeader = ({ setQuery }) => {

  return (
    <div className="SubHeader row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="subheader-content">
          <h1>Sub Header</h1>
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 
