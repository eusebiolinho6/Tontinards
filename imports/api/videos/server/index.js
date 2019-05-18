import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {Videos} from '../collections/'
import {checkRole} from '../../../utilities/'

  Videos.allow({
    insert: function(userId) {
     return checkRole(['admin'], userId);
    },
    update: function(userId) {
     return checkRole(['admin'], userId);
    },
    remove: function(userId) {
     return checkRole(['admin'], userId);
    }
  });
