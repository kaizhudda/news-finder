import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsResults from '../views/news-results';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={NewsResults} />
    </Switch>
  );
};

export default Routes; 
