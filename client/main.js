import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from '../imports/ui/pages/App';
import Funnel from '../imports/ui/routes/Funnel';
import '../imports/startup/accounts-config.js';
import Authentication from '../imports/ui/routes/Authentication';

Meteor.startup(() => {
  ['fixed-sidebar', 'mini-navbar', 'fixed-nav', 'pace-done', 'skin-1'].forEach(klass => document.body.classList.add(klass));
  render((
   <BrowserRouter>
    <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/funnels' component={Funnel} />
          <Route path='/authentication' component={Authentication} />
        </Switch>
    </div>
    
</BrowserRouter>), document.getElementById('page-wrapper'));
});