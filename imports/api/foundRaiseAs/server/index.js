import { Meteor } from 'meteor/meteor';
import {FoundRaiseAs} from '../../collections'
import {checkRole} from '../../../utilities'
import { HTTP } from 'meteor/http'


Meteor.methods({
  FoundCountries: function() {
    if (1==1) {
      try {
        // fill in the blanks here with params, timeout, etc.
        var result = HTTP.get('https://restcountries.eu/rest/v2/all');
        console.log(result);
        return result.data.response;
      } catch (_error) {
        throw new Meteor.Error("No Result", "Failed to fetch...");
      }
    }
  }
});

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
