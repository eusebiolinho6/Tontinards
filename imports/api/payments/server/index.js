import { Meteor} from 'meteor/meteor';
import {Payments} from '../../collections'

// This code only runs on the server
// Only publish tasks that are public or belong to the current user
Meteor.publish('payments', function paymentsPublication() {
    return Payments.find({user: this.userId, state:'active'});
});