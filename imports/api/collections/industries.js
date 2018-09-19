import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {checkRole} from '../../utilities/'
export const Industries = new Mongo.Collection('industries');


// This code only runs on the server
// Only publish tasks that are public or belong to the current user

Meteor.methods({
  'industries.insert'(data) { 
    Industries.insert(data);
  },
  'industries.update'(industryId, doc) {
   // const _id = new Mongo.ObjectID(funnelId);
    Industries.update(industryId, {$set: data}); 
  }, 'industries.remove'(industryId) {
    // const _id = new Mongo.ObjectID(funnelId);
    Industries.remove(industryId);
  }
});

if (Meteor.isServer) {
  Meteor.publish('industries', function industriesPublication() {
      return Industries.find({});
  });
  Meteor.publish('industry', function industryPublication(id) {
    return Industries.findOne({
      _id: id
    });
  });

    Industries.allow({
      insert: function (doc) {
       return checkRole(['admin'], this.userId);
      },
      update: function (industryId, doc) {
        return checkRole(['admin'], this.userId);
      },
      remove: function (industryId) {
        return checkRole('admin', this.userId)
      }
    });
}