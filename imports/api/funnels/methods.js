import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const Funnels = new Mongo.Collection('funnels')

Meteor.methods({
  'funnels.insert'(data) { 
    Funnels.insert(data);
  },
  'funnels.update'(funnelId, data) {
   // const _id = new Mongo.ObjectID(funnelId);
    Funnels.update({_id: funnelId}, {$set: data});
  }
});

exports.toObjectId = function(id){
  return new Mongo.ObjectID(id);
}