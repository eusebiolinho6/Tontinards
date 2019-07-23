import { Accounts } from 'meteor/accounts-base';
// import { Accounts } from 'meteor/accounts-google';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',

  requestOfflineToken: {
    google: true
  },

});
