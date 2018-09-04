import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {Industries} from './collections';


// This code only runs on the server
// Only publish tasks that are public or belong to the current user

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

exports.Industries= Industries;
