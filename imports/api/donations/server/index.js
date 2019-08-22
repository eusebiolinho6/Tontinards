import {
    Meteor
  } from 'meteor/meteor';
  import {TypeOfDonations} from '../../collections'
  import {checkRole} from '../../../utilities'
  
    Meteor.publish('typeOfDonations', function typeOfDonationsPublication() {
        return TypeOfDonations.find({});
    });
    Meteor.publish('typeOfDonation', function typeOfDonationPublication(id) {
      return TypeOfDonations.findOne({
        _id: id
      });
    });
  
    TypeOfDonations.allow({
        insert: function (userId) {
       return checkRole(['admin', 'user'], userId);
        },
        update: function (userId) {
       return checkRole(['admin', 'user'], userId);
        },
        remove: function (userId) {
       return checkRole(['admin', 'user'], userId);
        }
    });
  