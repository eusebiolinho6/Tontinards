import { Meteor } from 'meteor/meteor';
import '../imports/api/publications';
import {startCron} from '../imports/api/services/'
import { Accounts } from 'meteor/accounts-base';

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
});