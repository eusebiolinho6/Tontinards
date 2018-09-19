import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {checkRole} from '../../utilities/'

export const Categories = new Mongo.Collection('categories');
// This code only runs on the server
// Only publish tasks that are public or belong to the current user

Meteor.methods({
  'categories.insert'(data) { 
    Categories.insert(data);
  },
  'categories.update'(categoryId, doc) {
   // const _id = new Mongo.ObjectID(categoryId);
    Categories.update(categoryId, {$set: data}); 
  }, 'categories.remove'(categoryId) {
    // const _id = new Mongo.ObjectID(categoryId);
    Categories.remove(categoryId);
  }
});

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
        return checkRole(['admin'], this.userId);
      },
      update: function (industryId, doc) {
        return checkRole(['admin'], this.userId);
      },
      remove: function (industryId) {
        return checkRole(['admin'], this.userId)
      }
    });
}