import {Meteor} from 'meteor/meteor';
import os from 'os'
exports.toObjectId = (id)=> {
    if (id) return new Mongo.ObjectID(id);
    return new Mongo.ObjectID();
}
exports.asyncMethodCall = (methodName, args) =>{ console.log(methodName)
    return new Promise((resolve, reject) => {
        Meteor.call(methodName, args, (error, result) => {
            if (error) {
                // console.log(error)
                return reject(error);
            } else {
                // console.log(result)
                return resolve(result);
            }
        });
    });
}

exports.checkRole = (roles, userId)=>{
    if(!Array.isArray(roles)) return false; 
    if(roles.indexOf('all') !=-1) return true;
   let user= Meteor.users.findOne(userId);
   if(!user) return false;
    const currentRole = user.profile.role;
    // console.log("-------------------this is the currentRole");
    // console.log(currentRole);
    // console.log("-------------------this is the roles");
    // console.log(roles);
    if (roles.indexOf(currentRole.toLowerCase()) != -1) return true;
    return false;
}
export function getMainPath(){
    if(Meteor.isServer && !this.path) {
        let path = os&&os.userInfo().homedir+"/projects/meteor-app";
        this.path = path;
    }
    return this.path;
}