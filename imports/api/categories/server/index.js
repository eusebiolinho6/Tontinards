import {
  Meteor
} from 'meteor/meteor';
import {Categories} from '../../collections'
import {checkRole} from '../../../utilities'

  Meteor.publish('categories', function categoriesPublication() {
      return Categories.find({});
  });
  Meteor.publish('category', function categoryPublication(id) {
    return Categories.findOne({
      _id: id
    });
  });

    Categories.allow({
      insert: function (userId) {
     return checkRole(['admin'], userId);
      },
      update: function (userId) {
     return checkRole(['admin'], userId);
      },
      remove: function (userId) {
     return checkRole(['admin'], userId);
      }
    });
