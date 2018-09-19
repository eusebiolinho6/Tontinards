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
export const Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client
    storagePath: uploadDir,        
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024*1024*20 && /png|jpg|jpeg/i.test(file.extension)) {
            return true;
        }else {
        return 'Please upload image, with size equal or less than 10MB';
        }
    }
});

if (Meteor.isServer) {
  Images.allow({
    insert: function() {
      return checkRole(['admin'], this.userId);
    },
    update: function() {
      return checkRole(['admin'], this.userId);
    },
    remove: function() {
      return checkRole(['admin'], this.userId);
    }
  });
}