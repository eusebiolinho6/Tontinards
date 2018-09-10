import paypal from 'paypal-rest-sdk';
import {Meteor} from 'meteor/meteor';
import {Payments} from '../../imports/api/funnels/server/collections'
import { EJSON } from 'meteor/ejson'
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
'initsubscription' : (data, cb)=> {
        var isoDate = new Date();
        isoDate.setMonth(isoDate.getMonth() + 7);
        isoDate.toISOString().slice(0, 19) + 'Z';

        var billingAgreementAttributes = {
            "name": "Follow " + data.name + " on Nsukull",
            "description": "An Agreement for billing on Nsukull",
            "start_date": isoDate,
            "plan": {
                "id": data.billingPlanId
            },
            "payer": {
                "payment_method": "paypal",
            }
        };
        // Use activated billing plan to create agreement
        paypal.billingAgreement.create(billingAgreementAttributes, (error, billingAgreement)=> {
            if (error) {
               throw new Meteor.Error(error);
            } else {
               return EJSON.fromJSONValue(billingAgreement);
            }
        });
    },
'subscribeToCourse' : (paymentToken, cb) => {
        paypal.billingAgreement.execute(paymentToken, {}, function (error, billingAgreement) {
            if (error) {
                console.log(error);
                return cb(error, null);
            } else {
                return cb(null, billingAgreement);
            }
        });
    }
})