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
     return checkRole(['admin'], userId);
    },
    update: function(userId) {
     return checkRole(['admin'], userId);
    },
    remove: function(userId) {
     return checkRole(['admin'], userId);
    }
  });

