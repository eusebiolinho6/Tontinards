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

export const Documents = new FilesCollection({
    collectionName: 'Documents',
    allowClientCode: false, // Disallow remove files from Client
    storagePath: uploadDir,
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024*1024*20 && /pdf|docx|pptx/i.test(file.extension)) {
            return true;
        } else {
            return 'Please upload document, with size equal or less than 20MB';
        }
    }
});

if (Meteor.isServer) {
  Documents.allow({
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