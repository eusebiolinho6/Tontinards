import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
export const Payments = new Mongo.Collection('payments');


// This code only runs on the server
// Only publish tasks that are public or belong to the current user

if (Meteor.isServer) {
  Meteor.publish('payments', function paymentsPublication() {
      return Payments.find({});
  });
  Meteor.publish('payment', function paymentPublication(id) {
    return Payments.findOne({
      _id: id
    });
  });
}

exports.Payments= Payments;
