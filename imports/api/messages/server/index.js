import {
    Meteor
  } from 'meteor/meteor';
  import {Messages} from '../../collections'
  import {checkRole} from '../../../utilities'
  
    Meteor.publish('messages', function messagesPublication() {
        return Messages.find({});
    });
    Meteor.publish('message', function messagePublication(id) {
      return Messages.findOne({
        _id: id
      });
    });
  
      Messages.allow({
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
  