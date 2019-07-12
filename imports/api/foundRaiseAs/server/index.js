import { Meteor } from 'meteor/meteor';
import {FoundRaiseAs} from '../../collections'
import {checkRole} from '../../../utilities'
  
    Meteor.publish('foundRaiseAs', function foundRaiseAsPublication() {
        return FoundRaiseAs.find({});
    });

    Meteor.publish('onefoundRaiseAs', function oneFoundRaiseAsPublication(id) {
      return FoundRaiseAs.findOne({
        _id: id
      });
    });
  
    FoundRaiseAs.allow({
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
