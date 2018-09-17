import {Meteor} from 'meteor/meteor';

exports.toObjectId = (id)=> {
    if (id) return new Mongo.ObjectID(id);
    return new Mongo.ObjectID();
}
exports.asyncMethodCall = (methodName, args) =>{
    return new Promise((resolve, reject) => {
        Meteor.call(methodName, args, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
}
exports.checkRole = (roles, id)=>{
    let userId="";
    if(Meteor.isServer&&!id){
        userId = this.userId;
    } else {
        userId = id
    }

   let user= Meteor.users.findOne(userId);
   if(!user) return false;
    const currentRole = user.profile.role;
    if (roles.indexOf(currentRole.toLowerCase()) != -1) return true;
    return false;
}