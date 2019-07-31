import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewsResults from '../views/news-results';
import Author from '../views/author';
import Comments from '../views/comments';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={NewsResults} />
      <Route path="/author/:username" exact component={Author} />
      <Route path="/comments/:storyId" exact component={Comments} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes; 
