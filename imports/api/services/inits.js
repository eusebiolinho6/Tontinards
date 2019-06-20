import schedule from 'node-schedule'
import {Meteor} from 'meteor/meteor';
import {Payments} from '../collections'
import { sendMail, getAgreement } from '.';

const bound = Meteor.bindEnvironment((callback) => {callback();});
exports.startCron = ()=>{
    schedule.scheduleJob('0 0 * * * *', () => {
    bound(()=>{
        Payments.find({state: 'active', nextBillingDate: {$lt: new Date()}}).forEach((payment)=>{
            getAgreement(payment.billingAgreementId, (err, billingAgreement)=>{
                bound(()=>{
                    if(err){
                        console.log("Can't get agreement of payment", payment._id);
                    } else {
                        let user = Meteor.users.findOne(payment.user);
                        if(user){
                            if(billingAgreement.state =="Active"){
                            let nextBillingDate = new Date(billingAgreement.agreement_details.next_billing_date);
                            nextBillingDate.setHours(nextBillingDate.getHours() + 10);
                            Payments.update(payment._id, {$set: {nextBillingDate: nextBillingDate}});
                            sendMail(user.emails[0].address, 'execute-agreement.html', {name:user.profile.name}, 'Billing to FOPSwipe has succeed')
                            }else {
                                Payments.update(payment._id, {$set: {state:'inactive'}});
                                if(user.profile&&user.profile.role=="PAID") Meteor.users.update(payment.user, {$set: {'profile.role': 'FREE'}});
                                sendMail(user.emails[0].address, 'fails-agreement.html', {name:user.profile.name}, 'Billing to FOPSwipe has failed')
                            }
                        } else {
                            console.log("No user for the _id", payment.user);
                        }
                    }
                })
            })
        })
    })
})    
}

