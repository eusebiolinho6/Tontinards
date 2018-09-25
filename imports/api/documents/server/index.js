import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {Documents} from '../../collections'
import {checkRole} from '../../../utilities/'

  Documents.allow({
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
