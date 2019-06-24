import React, { useState } from 'react';

import './subheader.scss';

const SubHeader = ({ setQuery }) => {

  return (
    <div className="SubHeader row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="subheader-content">
          <p>Sub Header</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader; 
