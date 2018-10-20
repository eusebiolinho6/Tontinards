import paypal from 'paypal-rest-sdk';

paypal.configure({
    'mode': 'live', //live
    'client_id': 'AWaTia10DwG3tUQ33Qcazm2tduWEIj96sTjmQsJ3NvCf4hnmEbXQNd3dACSXQKT2lhRlHWKphRZjgIrd',
    'client_secret': 'EMuAdOc0UwtAJXwBH0w-dAcGBAlgGl5eDv_hatusO_9Z0_SjMy7L9O1LOn_Qff1DFPb3mt6EG7MPupyh',
    /** 
    'mode': 'sandbox', // sandbox
    'client_id': 'AZjHaTGkB5JrepmNOt2HhxNq0sGvU8Ys12Rn8UUdNavKWDNM8Pwq8eis4tgCy7Dx59toVM6BEClUwIcA',
    'client_secret': 'EKajPGuMXR1SE43qot6aAHdXMwVYzTc2N2stge01cP9NpzbIdM72eU6Tk5Vv3MlwwIWJ6RdgyKI6uIDS'   
    */
});

exports.getAgreement = (billingAgreementId, cb) =>{
    paypal.billingAgreement.get(billingAgreementId, function (error, billingAgreement) {
        if (error) {
            return cb(error, null);
        } else {
            return cb(null, billingAgreement);
        }
    });
}
exports.cancelAgreement = (billingAgreementId, cb)=> {
    var cancel_note = {
        "note": "Canceling the agreement"
    };

    paypal.billingAgreement.get(billingAgreementId, function (error, billingAgreement) {
        if (error) {   
            return cb(error, null);
        } else if (billingAgreement.state == "Active") {
            paypal.billingAgreement.cancel(billingAgreementId, cancel_note, function (error, response) {
                if (error) {
                    return cb(error, null);
                } else {
                    return cb(null, response);
                }
            });
        } else {
            return cb(null, billingAgreement);
        }
    });
}

exports.initiateAgreement = (data, cb)=> {
            let isoDate = new Date();
            isoDate.setMonth(isoDate.getMonth() + 1);
            isoDate.toISOString().slice(0, 19) + 'Z';
            const billingPlanId = "P-8PX11254GJ4936414SBYGFPQ",
             billingAgreementAttributes = {
                "name": "Billing Agreement for billing in FOPSwipe",
                "description": "This Agreement will give you a full access to funnels in the platform",
                "start_date": isoDate,
                "plan": {
                    "id": billingPlanId
                },
                "payer": {
                    "payment_method": "paypal",
                }
            };
            // Use activated billing plan to create agreement
            paypal.billingAgreement.create(billingAgreementAttributes, (error, response) => {
                if (error) {
                    return cb(error, null);
                } else {
                    return cb(null, response);
                }
            });
}


exports.createPlan = (data, cb) =>{
    let billingPlanAttributes = {
        "description": "Billing plan of FOP Pro",
        "merchant_preferences": {
            "auto_bill_amount": "yes",
            "cancel_url": data.cancelUrl,
            "initial_fail_amount_action": "cancel",
            "max_fail_attempts": "0",
            "return_url": data.successUrl,
            "setup_fee": {
                "currency": "USD",
                "value": data.price
            }
        },
        "name": "FULL ACCESS TO FOPSwipe",
        "payment_definitions": [{
            "amount": {
                "currency": "USD",
                "value": data.price
            },
            "frequency": "MONTH",
            "frequency_interval": "1",
            "name": "FULL ACCESS TO FOPSwipe",
            "type": "REGULAR"
        }],
        "type": "INFINITE"
    };

    paypal.billingPlan.create(billingPlanAttributes, (error, billingPlan)=> {
        if (error) {
            return cb(error, null);
        } else {
            let billing_plan_update_attributes = [{
        "op": "replace",
        "path": "/",
        "value": {
            "state": "ACTIVE"
        }
    }];

    paypal.billingPlan.update(billingPlan.id, billing_plan_update_attributes, (error, response)=> {
        if (error) {
            return cb(error, null);
        } else {
            return cb(null, billingPlan);
        }
    });
        }
    });

}

exports.executeAgreement = (paymentToken, cb) => {
    paypal.billingAgreement.execute(paymentToken, {}, (error, billingAgreement) =>{
        if (error) {
            return cb(error, null);
        } else {
            return cb(null, billingAgreement);
        }
    });
}
