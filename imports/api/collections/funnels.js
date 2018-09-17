import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {
  check
} from 'meteor/check';
import {checkRole} from '../../utilities/'

export const Funnels = new Mongo.Collection('funnels');

Meteor.methods({
  'funnels.insert'(data) { 
    Funnels.insert(data);
  },
  'funnels.update'(funnelId, doc) {
   // const _id = new Mongo.ObjectID(funnelId);
    Funnels.update(funnelId, {$set: data}); 
  }, 'funnels.remove'(funnelId) {
    // const _id = new Mongo.ObjectID(funnelId);
    Funnels.remove(funnelId);
  }
})
if (Meteor.isServer) {
  Meteor.publish('funnels', function funnelsPublication() {
    return Funnels.find({}, {fields:{price:1, title:1, image:1, description:1, industry:1, category:1}});
  });
    Meteor.publish('adminFunnels', function funnelsPublication() {
    const isAdmin = checkRole(['admin']);
    if (!isAdmin) return Funnels.find({_id: null});
    return Funnels.find({});
  });

  Meteor.publish('funnel', function funnelPublication(funnelId) {
    return Funnels.findOne({
      _id: funnelId
    });
  });

Funnels.allow({
    insert: function (doc) {
      return checkRole(['admin']);
    },
    update: function (funnelId, doc) {
      return checkRole(['admin']);
    },
    remove: function (funnelId) {
      return checkRole('admin')
    }
  });
}