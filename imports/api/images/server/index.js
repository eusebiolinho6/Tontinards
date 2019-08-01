import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {Images} from '../../collections'
import {checkRole} from '../../../utilities/'

  Images.allow({
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

