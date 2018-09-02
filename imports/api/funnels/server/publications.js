import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {
  check
} from 'meteor/check';
import {
  FilesCollection
} from 'meteor/ostrio:files';

export const Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  storagePath: '../uploads/',
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  }
});
export const Funnels = new Mongo.Collection('funnels');
// This code only runs on the server
// Only publish tasks that are public or belong to the current user

if (Meteor.isServer) {
  Meteor.publish('funnels', function funnelsPublication() {
    return Funnels.find({});
  });

  Meteor.publish('funnel', function funnelPublication(funnelId) {
    return Funnels.findOne({
      _id: funnelId
    });
  });
  Meteor.publish('files.images.all', function () {
    return Images.find({}).cursor;
  });
  
  Funnels.allow({
    insert: function (doc) {
      return true;
    },
    update: function (funnelId, doc) {
      return true;
    },
    remove: function (funnelId) {
      return true
    }
  });
}