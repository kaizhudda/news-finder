import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsResults from '../views/news-results';
import Settings from '../views/settings';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={NewsResults} />
      <Route path='/settings' exact component={Settings} />
    </Switch>
  );
};

export default Routes; 
