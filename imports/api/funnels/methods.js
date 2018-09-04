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
export const Industries = new Mongo.Collection('industries')
export const Categories = new Mongo.Collection('categories')

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

Meteor.methods({
  'categories.insert'(data) { 
    Categories.insert(data);
  },
  'categories.update'(categoryId, doc) {
   // const _id = new Mongo.ObjectID(categoryId);
    Categories.update(categoryId, {$set: data}); 
  }, 'categories.remove'(categoryId) {
    // const _id = new Mongo.ObjectID(categoryId);
    Categories.remove(categoryId);
  }
});

Meteor.methods({
  'industries.insert'(data) { 
    Industries.insert(data);
  },
  'industries.update'(industryId, doc) {
   // const _id = new Mongo.ObjectID(funnelId);
    Industries.update(industryId, {$set: data}); 
  }, 'industries.remove'(industryId) {
    // const _id = new Mongo.ObjectID(funnelId);
    Industries.remove(industryId);
  }
});

exports.getIndustry = (id)=>{
  let a= Industries.findOne({});
  return a;
}

exports.toObjectId = function(id){
  if (id) return new Mongo.ObjectID(id);
    return new Mongo.ObjectID();
}