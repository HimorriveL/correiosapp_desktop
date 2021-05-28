import React from 'react';

import { HashRouter} from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (
 <HashRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard}/>
  </HashRouter>
);

export default Routes;