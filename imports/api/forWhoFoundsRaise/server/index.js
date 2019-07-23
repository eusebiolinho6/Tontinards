import { Meteor } from 'meteor/meteor';
import {ForWhoFoundsRaise} from '../../collections'
import {checkRole} from '../../../utilities'
  
    Meteor.publish('forWhoFoundsRaise', function foundRaiseAsPublication() {
        return ForWhoFoundsRaise.find({});
    });

    Meteor.publish('oneForWhoFoundsRaise', function oneFoundRaiseAsPublication(id) {
      return ForWhoFoundsRaise.findOne({
        _id: id
      });
    });
  
    ForWhoFoundsRaise.allow({
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
