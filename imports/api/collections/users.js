import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {Accounts} from 'meteor/accounts-base'
if(Meteor.isServer){
Accounts.onCreateUser((options, user)=>{
    console.log(options);
    Meteor.users.update(this.userId, {$set: {role: "FREE"}});
})
}
