import { Meteor } from 'meteor/meteor';
import '../imports/api/publications';
import {startCron} from '../imports/api/services/'
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  // code to run on server at startup
  startCron();
  process.env.MAIL_URL = 'smtps://onlineprepalearning@gmail.com:onlineprepa123@smtp.gmail.com:465';

  Accounts.loginServiceConfiguration.remove({
    service: "twitter"
  });
  Accounts.loginServiceConfiguration.insert({
      service: "twitter",
      consumerKey: "MeicUZo7EgAZlIbmzw2A9gmVW",
      secret: "T8Y1ThL9b5c8hkRWGAZ6VCxxsBeq62nArgPDTqnAw2ZkMfvawa",
      loginStyle: "popup"
  });
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