import { Meteor } from "meteor/meteor";

Meteor.methods({
    updateProfile(name, email, username) {
        const newvalues = { $set: {"profile.name": name, emails: [{ address: email, verified: false }], username: username} };
        Meteor.users.update(Meteor.user(), newvalues);
    },
    setUserRole() {
        const newvalues = { $set: {"profile.role": "user"} };
        Meteor.users.update(Meteor.user(), newvalues);
    }
});
