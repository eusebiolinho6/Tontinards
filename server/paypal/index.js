import paypal from 'paypal-rest-sdk';
import {Meteor} from 'meteor/meteor';
import {Payments} from '../../imports/api/collections/'
import { EJSON } from 'meteor/ejson'
const bound = Meteor.bindEnvironment((callback) => {callback();});
const plans = [{
    name: "BASIC",
    billingPlanId: "P-0NK03527YD420790TZX6GDCA"
}, {
    name: "PRO",
    billingPlanId: "P-7NT27209SJ7870049ZYADLOQ"
}, {
    name: "ULTIMATE",
    billingPlanId: "P-64L377302M0040210ZYB6OAQ"
}];
paypal.configure({
    /**'mode': 'live', //live
    'client_id': 'AWaTia10DwG3tUQ33Qcazm2tduWEIj96sTjmQsJ3NvCf4hnmEbXQNd3dACSXQKT2lhRlHWKphRZjgIrd',
    'client_secret': 'EMuAdOc0UwtAJXwBH0w-dAcGBAlgGl5eDv_hatusO_9Z0_SjMy7L9O1LOn_Qff1DFPb3mt6EG7MPupyh',
    */
    'mode': 'sandbox', // sandbox
    'client_id': 'AZjHaTGkB5JrepmNOt2HhxNq0sGvU8Ys12Rn8UUdNavKWDNM8Pwq8eis4tgCy7Dx59toVM6BEClUwIcA',
    'client_secret': 'EKajPGuMXR1SE43qot6aAHdXMwVYzTc2N2stge01cP9NpzbIdM72eU6Tk5Vv3MlwwIWJ6RdgyKI6uIDS'   
});
Meteor.methods({
'initsubscription' : (data)=> {
        return new Promise(function(resolve,reject){
             var isoDate = new Date();
             isoDate.setMonth(isoDate.getMonth() + 1);
             isoDate.toISOString().slice(0, 19) + 'Z';
               const billingPlanId = "P-64L377302M0040210ZYB6OAQ",
                 billingAgreementAttributes = {
                     "name": "Subscription to FOPSwipe " ,
                     "description": "An Agreement for billing on FOPSwipe",
                     "start_date": isoDate,
                     "plan": {
                         "id": billingPlanId
                     },
                     "payer": {
                         "payment_method": "paypal",
                     }
                 };
                 let user = Meteor.users.findOne(data.userId);

                 if(!user) return reject(new Meteor.Error('Signed in to purchase'));
                 if (!billingPlanId) return reject(new Meteor.Error('No Plan for this name'));
             // Use activated billing plan to create agreement

            paypal.billingAgreement.create(billingAgreementAttributes, (err, res) => {
                bound(()=>{
                    if (err) {
                       return reject(new Meteor.Error(err))
                    } else {
                        let links = res && res.links || [],
                        tmpId ='';
                        if (links) {
                            links.forEach(function (link) {
                                if (link.rel === "approval_url"){
                                    let tab = link.href.split("token=");
                                    tmpId = tab.length==2&&tab[1];
                                }  
                            });
                        }
                        if (!tmpId) return reject(new Meteor.Error('No token here'))
                        Payments.insert({
                            createdAt: new Date(),
                            state: 'initiated',
                            billingPlanId: billingPlanId,
                            billingAgreementId: tmpId,
                            user: user._id
                        });
                        return resolve(res);

                    }
                })
            });
        })
    },
'subscribeToFunnel' : (data) => {
    return new Promise(function(resolve, reject){
        paypal.billingAgreement.execute(data.token, {}, (error, billingAgreement)=>{
           bound(() => {
              if (error||billingAgreement.state!='Active') {
               return reject(new Meteor.Error(error||'No Suffiscient Funds to subscribe!'));
            } else {
                let user = Meteor.users.findOne(data.userId),
                    roles = user&&user.roles || [];
                 if (!user) return reject(new Meteor.Error('No Signed In User!'));
                let payment = Payments.findOne({state:'initiated', user:user._id, billingAgreementId:data.token});
                if (!payment) return reject(new Meteor.Error('No Initiated Payment!'));
                if (payment.user !=user._id) return reject(new Meteor.Error('Not the same user who initiated the payment'));
                Payments.update({_id:payment._id},{$set:{state:'confirmed', nextBillingDate:billingAgreement.agreement_details.next_billing_date, billingAgreementId:billingAgreement.id}});
                const role="PAID"
                Meteor.users.update({_id:user._id}, {$set:{'profile.role':role}});
               return resolve(billingAgreement);
            }
           });
        });
    })
    },
    'checkRoles':(data)=>{
        return new Promise((resolve,reject)=>{
            const user = Meteor.users.findOne(data.userId);
            if (!user || !user.roles || !user.roles.length) return reject(new Meteor.Error('Your are not authorized'));
            return resolve(user._id);
        })
    },
    'createPlan': (args)=>{
        return new Promise(function(resolve, reject){
                let billingPlanAttributes = {
                "description": "ULTIMATE BILLING FOPSwipe",
                "merchant_preferences": {
                    "auto_bill_amount": "yes",
                    "cancel_url": 'http://35.169.205.161:3001/funnels/all/all' ,
                    "initial_fail_amount_action": "CANCEL",
                    "max_fail_attempts": "0",
                    "return_url": 'http://35.169.205.161:3001/paypal',
                    "setup_fee": {
                        "currency": "USD",
                        "value": "3"
                    }
                },
                "name": "ULTIMATE BILLING FOPSwipe",
                "payment_definitions": [{
                    "amount": {
                        "currency": "USD",
                        "value": "3"
                    },
                   // "cycles": data.duration,
                    "frequency": "MONTH",
                    "frequency_interval": "1",
                    "name": "ULTIMATE BILLING FOPSwipe",
                    "type": "REGULAR"
                }],
                "type": "INFINITE"
            };

            paypal.billingPlan.create(billingPlanAttributes, function (err, billingPlan) {
                bound(()=>{
                    if (err) {
                      return reject(new Meteor.Error(err))
                    } else {
                        let billing_plan_update_attributes = [{
                            "op": "replace",
                            "path": "/",
                            "value": {
                                "state": "ACTIVE"
                            }
                        }];

                        paypal.billingPlan.update(billingPlan.id, billing_plan_update_attributes, function (err, response) {
                           bound(() =>{ if (err) {
                              return  reject(new Meteor.Error(err))
                            } else {
                               return resolve(billingPlan);
                            }})
                        });
                    }
                })
            });
        })
    }
})