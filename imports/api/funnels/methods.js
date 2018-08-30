import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Funnels = new Mongo.Collection('funnels');

Meteor.methods({
  'funnels.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Funnels.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'funnels.remove'(funnelId) {
    check(funnelId, String);
     const funnel = Funnels.findOne(funnelId);
     if (funnel.owner !== this.userId) {
         // If the task is private, make sure only the owner can delete it
         throw new Meteor.Error('not-authorized');
     }
    Funnels.remove(funnelId);
  }
});