import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {
  check
} from 'meteor/check';
import {Funnels,Images} from './collections';


// This code only runs on the server
// Only publish tasks that are public or belong to the current user
Funnels.helpers({
  category() {
    return Categories.findOne(this.category);
  },
  industry() {
    return Industries.findOne(this.industry);
  }
});

if (Meteor.isServer) {
  Meteor.publish('funnels', function funnelsPublication() {
    return Funnels.find({});
  });

  Meteor.publish('funnel', function funnelPublication(funnelId) {
    return Funnels.findOne({
      _id: funnelId
    });
  });
  Meteor.publish('files.images.all', function () {
    return Images.find({}).cursor;
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

exports.Funnels = Funnels;
