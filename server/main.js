import { Meteor } from 'meteor/meteor';
import '../imports/api/funnels/server/funnels';
import '../imports/api/funnels/server/categories';
import '../imports/api/funnels/server/industries';
import './paypal/index'
Meteor.startup(() => {
  // code to run on server at startup
});