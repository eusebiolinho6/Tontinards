import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {
    FilesCollection
} from 'meteor/ostrio:files';
import {getMainPath} from '../../../utilities/'
const uploadDir = getMainPath()+'/uploads/images';

export const Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client
    storagePath: uploadDir,
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024 * 1024 * 2 && /png|jpg|jpeg/i.test(file.extension)) {
            return true;
        } else {
            return 'Please upload image, with size equal or less than 2MB';
        }
    }
});