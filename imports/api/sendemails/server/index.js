import { Meteor} from 'meteor/meteor';
import { Email } from 'meteor/email'

Meteor.methods({
    sendEmail(to, from, subject, otherData, templateName) {
        // Make sure that all arguments are strings.
        // check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running, without
        // waiting for the email sending to complete.
        this.unblock();

        SSR.compileTemplate('htmlEmail', Assets.getText(templateName));

        Email.send({ to, from, subject, html: SSR.render('htmlEmail', otherData) });
    }
});