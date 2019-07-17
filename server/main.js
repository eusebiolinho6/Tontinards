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

});