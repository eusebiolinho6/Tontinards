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
    const hasPaid = checkRole(['admin', 'paid'], this.userId);
    if(hasPaid) return Funnels.find({image:{$exists:true}, document:{$exists:true},video:{$exists:true}}, {fields:{price:1, title:1, image:1, document:1,video:1, description:1, industry:1, category:1}});
    return Funnels.find({image:{$exists:true}, document:{$exists:true},video:{$exists:true}}, {fields:{price:1, title:1, image:1, description:1, industry:1, category:1}});
  });
  Meteor.publish('freeFunnels', function funnelsFreePublication(){
    return Funnels.find({price:'0'}, {fields:{price:1, title:1, image:1, document:1,video:1, description:1, industry:1, category:1}})
  });
    Meteor.publish('adminFunnels', function funnelsPublication() {
    const isAdmin = checkRole(['admin'], this.userId);
   if (!isAdmin) return Funnels.find({_id: null});
    return Funnels.find({});
  });

  Meteor.publish('funnel', function funnelPublication(funnelId) {
    return Funnels.findOne({
      _id: funnelId
    });
  });

Funnels.allow({
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
}