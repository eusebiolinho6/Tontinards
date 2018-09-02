import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {
  check
} from 'meteor/check';

export const Funnels = new Mongo.Collection('funnels');
// This code only runs on the server
// Only publish tasks that are public or belong to the current user

if (Meteor.isServer) {
  Meteor.publish('funnels', function funnelsPublication() {
    return Funnels.find({});
  });

  Meteor.publish('funnel', function funnelPublication(funnelId) {
    return Funnels.find({
      _id: funnelId
    });
  });
  Funnels.allow({
    insert: function (doc) {
      return true;
    },
    update: function (funnelId, doc) {
      return true;
    },
    remove: function (funnelId) {
      return true
    }
  });
}