import handlebars from 'handlebars'
import  nodemailer from 'nodemailer'
import fs from 'fs'
import { Meteor } from 'meteor/meteor';
import { getMainPath } from '../../utilities';
let readHTMLFile = (path, callback) =>{
    fs.readFile(path, {
        encoding: 'utf-8'
    }, (err, html)=> {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
},
 mailer = {
  configs: {
    service: 'gmail',
    auth: {
      user: 'bafiadance@gmail.com',
      pass: 'bafiadance.club',
    }
  },
  from: '"FOPSwipe" <bafiadance@gmail.com>'
},
smtpTransport = nodemailer.createTransport(mailer.configs);
//You should put all htmt email templates in templates/ folder
exports.sendMail = (to, file, replacements, subject)=> {
    let path = getMainPath()+ "/imports/api/services/templates/" +file;
    readHTMLFile(path, function (err, html) {
      let template = handlebars.compile(html),
       htmlToSend = template({...{appName: 'FOPSwipe'},...replacements}),
       mailOptions = {
        to: to,
        from: mailer.from,
        subject: subject,
        html: htmlToSend
      };

      smtpTransport.sendMail(mailOptions, (err)=>{
        if(err) console.log(err, "error during email");
      })
    })
}