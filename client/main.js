import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/pages/App.js';
import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
  ['fixed-sidebar', 'mini-navbar', 'fixed-nav', 'pace-done', 'skin-1'].forEach(klass => document.body.classList.add(klass));
  render(<App />, document.getElementById('page-wrapper'));
});