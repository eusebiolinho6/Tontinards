import { Meteor } from 'meteor/meteor';
import '../imports/api/publications';
import {startCron} from '../imports/api/services/'
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  // code to run on server at startup
  startCron();
  Accounts.loginServiceConfiguration.remove({
    service: "google"
  });

  Accounts.loginServiceConfiguration.insert({
    service: "google",
    clientId: Meteor.settings.oAuth.google.clientId,
    loginStyle: 'popup',
    secret: Meteor.settings.oAuth.google.secret
});

Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});
Accounts.loginServiceConfiguration.insert({
    service: "twitter",
    consumerKey: Meteor.settings.oAuth.twitter.consumerKey,
    secret: Meteor.settings.oAuth.twitter.secret,
    loginStyle: "popup"
});

Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: Meteor.settings.oAuth.facebook.appId,
  secret: Meteor.settings.oAuth.facebook.secret,
  loginStyle: 'popup',
});

});