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
     return checkRole(['user'], userId);
    },
    update: function(userId) {
     return checkRole(['user'], userId);
    },
    remove: function(userId) {
     return checkRole(['user'], userId);
    }
  });
