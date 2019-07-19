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

const uploadDir = getMainPath() +'/uploads/documents';
export const Documents = new FilesCollection({
    collectionName: 'Documents',
    protected(fileObj){
        if(checkRole(['admin', 'paid'], this.userId)) return true;
        const link= `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
        let funnel = Funnels.findOne({document: link});
        if(funnel&&!Number(funnel.zipCode)) return true;
        return false
    },
    allowClientCode: false, // Disallow remove files from Client
    storagePath: uploadDir,
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024*1024*20 && /pdf|docx|pptx/i.test(file.extension)) {
            return true
        } else {
            return 'Please upload document, with size equal or less than 20MB';
        }
    }
});