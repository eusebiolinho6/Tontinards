import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {
    FilesCollection
} from 'meteor/ostrio:files';
import {getMainPath, checkRole} from '../../../utilities/'
import { Funnels } from '../../collections';

const uploadDir = getMainPath() +'/uploads/videos';
export const Videos = new FilesCollection({
    collectionName: 'Videos',
    allowClientCode: false, // Disallow remove files from Client
    storagePath: uploadDir,
    protected(fileObj){
    if(checkRole(['admin', 'paid'], this.userId)) return true;
    const link= `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
    let funnel = Funnels.findOne({video: link});
    if(funnel&&!Number(funnel.zipCode)) return true;
    return false
    },
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024*1024*500 &&/mp4|mpeg|avi|flv|mov/i.test(file.extension)) {
            return true;
        } else {
            return 'Please upload video, with size equal or less than 500MB';
        }
    }
});