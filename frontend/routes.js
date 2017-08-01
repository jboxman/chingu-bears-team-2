import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/App';
import MockProfile from './views/Mockup'
import MockInputs from './views/UserInput/EnterSkills'
import Demo from './views/Geo/Demo';
import NotFoundPage from './views/NotFoundPage';

export default (
  <div>
  <Route path="/" component={App}></Route>
  <Route path="/mockup" component={MockProfile}></Route>
  <Route path="/mockinput" component={MockInputs}></Route>
  <Route path="/browser-geo" component={Demo}></Route>
  </div>
);
