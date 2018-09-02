import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { FilesCollection } from 'meteor/ostrio:files';
export const Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client
    storagePath: '../uploads',
    onBeforeUpload(file) {
      // Allow upload files under 10MB, and only in png/jpg/jpeg formats
      if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
        return true;
      }
      return 'Please upload image, with size equal or less than 10MB';
    }
  });

export const Funnels = new Mongo.Collection('funnels')

Meteor.methods({
  'funnels.insert'(data) { 
    Funnels.insert(data);
  },
  'funnels.update'(funnelId, doc) {
   // const _id = new Mongo.ObjectID(funnelId);
    Funnels.update(funnelId, {$set: data}); 
  }, 'funnels.remove'(funnelId) {
    // const _id = new Mongo.ObjectID(funnelId);
    Funnels.remove(funnelId);
  }
});

exports.toObjectId = function(id){
  if (id) return new Mongo.ObjectID(id);
    return new Mongo.ObjectID();
}