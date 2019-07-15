import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from '../imports/ui/pages/App';
import Funnel from '../imports/ui/routes/Funnel';
import Project from '../imports/ui/routes/Project';
import Admin from '../imports/ui/routes/Admin';
import '../imports/startup/accounts-config.js';
import Authentication from '../imports/ui/routes/Authentication';
import PaypalPage from '../imports/ui/pages/payments/PaypalPage';
import PagePlans from '../imports/ui/pages/payments/PagePlans';
import NotFoundPage from '../imports/ui/pages/errors/NotFoundPage';

Meteor.startup(() => {
  ['fixed-sidebar', 'mini-navbar', 'fixed-nav', 'pace-done', 'skin-1'].forEach(klass => document.body.classList.add(klass));
  render((
   <BrowserRouter>
    <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/funnels' component={Funnel} />
          <Route path='/projects' component={Project} />
          {/**<Route path='/pricing' component={PagePlans} />*/}
          <Route exact path='/paypal' component={PaypalPage} />
          <Route path='/admin' component={Admin} />
          <Route path='/authentication' component={Authentication} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
    </div>
    
</BrowserRouter>), document.getElementById('page-wrapper'));
});