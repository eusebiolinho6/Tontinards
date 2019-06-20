import { Meteor } from 'meteor/meteor';
import '../imports/api/publications';
import {startCron} from '../imports/api/services/'
Meteor.startup(() => {
  // code to run on server at startup
  startCron();
});