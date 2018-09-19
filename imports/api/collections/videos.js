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
import {checkRole} from '../../utilities/'
const uploadDir = '/uploads';

export const Videos = new FilesCollection({
    collectionName: 'Videos',
    allowClientCode: false, // Disallow remove files from Client
    storagePath: uploadDir,         
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024*1024*500 &&/mp4|mpeg|avi|flv|mov/i.test(file.extension)) {
            return true;
        } else {
            return 'Please upload video, with size equal or less than 500MB';
        }
    }
});

if (Meteor.isServer) {
  Videos.allow({
    insert: function(userId) {
     return checkRole(['admin'], userId);
    },
    update: function(userId) {
     return checkRole(['admin'], userId);
    },
    remove: function(userId) {
     return checkRole(['admin'], userId);
    }
  });
}