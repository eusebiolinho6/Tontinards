import { Meteor } from "meteor/meteor";
import {Accounts} from 'meteor/accounts-base'
import {sendMail} from '../../services/'

if(Meteor.isServer){
    Accounts.onCreateUser((options, user)=>{
        if(options.profile) user.profile =options.profile;
        let replacements = {name:user.profile &&user.profile.name}
        sendMail(options.email, 'fopswipe-welcome.html', replacements, 'Welcome to FOPSwipe');
        return user;
    })
}