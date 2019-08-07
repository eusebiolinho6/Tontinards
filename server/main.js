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
    clientId: "798248306616-63c0d02sa5f28ukmf7ldtgarv2n2ufuf.apps.googleusercontent.com",
    loginStyle: 'popup',
    secret: "0uqUPSc1CrGJT2JFIZY2E8pc"
  });

  Accounts.loginServiceConfiguration.remove({
    service: "facebook"
  });
  Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: "376967996293786",
    secret: "a07e1ebfceff785d1ca92e8565114f6d",
    loginStyle: 'popup',
  });

});