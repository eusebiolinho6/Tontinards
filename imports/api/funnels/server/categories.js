import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {Categories} from './collections';


// This code only runs on the server
// Only publish tasks that are public or belong to the current user

if (Meteor.isServer) {
  Meteor.publish('categories', function categoriesPublication() {
      return Categories.find({});
  });
  Meteor.publish('category', function categoryPublication(id) {
    return Categories.findOne({
      _id: id
    });
  });

    Categories.allow({
      insert: function (doc) {
        return true;
      },
      update: function (industryId, doc) {
        return true;
      },
      remove: function (industryId) {
        return true
      }
    });
}

exports.Categories= Categories;
