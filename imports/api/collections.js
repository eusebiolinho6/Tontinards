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
const uploadDir = Meteor.isDevelopment ? './uploads/' : '/uploads';
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