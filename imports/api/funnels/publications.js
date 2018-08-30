import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Funnels = new Mongo.Collection('funnels');
if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
 Meteor.publish('funnels', function tasksPublication() {
        return Funnels.find({});
    });

 Meteor.publish('funnel', function tasksPublication(funnelId) {
     return Funnels.find({_id:funnelId});
 });

}