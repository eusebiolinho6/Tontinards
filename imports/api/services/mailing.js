exports.sendMail = (to, from, subject, templateName) => {
  Meteor.call(
    'sendEmail',
    to,
    from,
    subject,
    templateName
  );
}