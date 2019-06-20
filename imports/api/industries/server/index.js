import {
  Meteor
} from 'meteor/meteor';
import {Industries} from '../../collections'
import {checkRole} from '../../../utilities'

  Meteor.publish('industries', function industriesPublication() {
      return Industries.find({});
  });
  Meteor.publish('industry', function industryPublication(id) {
    return Industries.findOne({
      _id: id
    });
  });

    Industries.allow({
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
