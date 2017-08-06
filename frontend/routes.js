import React from 'react';
import { Route, IndexRoute } from 'react-router';

import UserLogin from './views/Login/Login';
import MockProfile from './views/Mockup'
import MockInputs from './views/UserInput/EnterSkills'
import NotFoundPage from './views/NotFoundPage';

export default (
  <div>
  <Route path="/" component={UserLogin}></Route>
  <Route path="/mockup" component={MockProfile}></Route>
  <Route path="/mockinput" component={MockInputs}></Route>
  </div>
);
