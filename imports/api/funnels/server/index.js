import {Meteor} from 'meteor/meteor';
import { Mongo} from 'meteor/mongo';
import {checkRole} from '../../../utilities/'
import {initiateAgreement, executeAgreement, sendMail, createPlan} from '../../services/';
import {Payments, Funnels} from '../../collections'
const bound = Meteor.bindEnvironment((callback) => {callback();});

Meteor.methods({
'initiateAgreement' : (data)=> { console.log(data);
        return new Promise(function(resolve,reject){
                 let user = Meteor.users.findOne(data.userId);
                 console.log(user);
                 if(!user) return reject(new Meteor.Error('Sign in to purchase'));
             // Use activated billing plan to create agreement

           initiateAgreement({}, (err, res) => {
                bound(()=>{
                    if (err) { console.log(err);
                       return reject(new Meteor.Error(err))
                    } else {
                        let links = res && res.links || [],
                        tmpId ='';
                        console.log(links);
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
                            billingAgreementId: tmpId,
                            user: user._id
                        });
                        return resolve(res);

                    }
                })
            });
        })
    },

    'getFunnelLinks': (data)=>{
        return new Promise((resolve, reject)=>{
            if(!data||!data.funnelId) return reject(new Meteor.Error('User unauthorized'));
           let funnel = Funnels.findOne({_id:data.funnelId});
           if(funnel) return resolve({document:funnel.document, video:funnel.video});
           return reject(new Meteor.Error('User unauthorized'));
        })
    },
'executeAgreement' : (data) => {
    return new Promise(function(resolve, reject){
        executeAgreement(data.token, (error, billingAgreement)=>{
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
                let nextBillingDate = new Date(billingAgreement.agreement_details.next_billing_date);
                nextBillingDate.setHours(nextBillingDate.getHours()+10);
                Payments.update({_id:payment._id},{$set:{state:'active', nextBillingDate:nextBillingDate, billingAgreementId:billingAgreement.id}});
                let role = user.profile.role;
                if(role=="FREE")  Meteor.users.update({_id:user._id}, {$set:{'profile.role':"PAID"}});
                sendMail(user.emails[0].address, 'execute-agreement.html', {name: user.profile.name}, 'Subscribtion to FOPSwipe has succeed');
               return resolve(billingAgreement);
            }
           });
        });
    })
    },

    'makeDonate': (data, projectId) => {
        let currentProject = Funnels.findOne(projectId);
        return new Promise((resolve, reject) => {
            const query = {$push: {"donators": data}}
            let project = Funnels.update({_id: projectId}, query);
            // Send Email to Donator
            const passedData = {
                name: currentProject.userId.profile.name,
                projectName: currentProject.projectName,
                amount: data.amount
            }
            Meteor.call('sendEmail', data.email, "Tontinards@gmail.com", "Donation for Tontinards", passedData, "donation.html")
            if (project) return resolve(project);
            return reject();
        })
    },
    'validateDonate': (data, projectId) => {
        let currentProject = Funnels.findOne(projectId);
        // Get the previous amount add to the new
        let newAmount = parseInt(currentProject.currentAmount) + parseInt(data.amount);
        // Save the new value
        Funnels.update(projectId, { $set: { currentAmount: newAmount } });
        // Save the new donator
        return new Promise((resolve, reject) => {
            // Find and update the given donation
            let allDonations = currentProject.donators;
            let finalDonations = [...allDonations];
            allDonations.forEach((donation, id) => {
                if(donation.id.toString() == data.id.toString()) {
                    finalDonations[id].validated = true;
                }
            });
            const query = {$set: {"donators": finalDonations}}
            let project = Funnels.update({_id: projectId}, query);
            if (project) return resolve(project);
            return reject();
        })
    },
    /**,
    'createPlan': (data) => {
        return new Promise(function (resolve, reject) {
            createPlan(data, (error, billingPlan) => {
                bound(() => {
                    if (error) {
                        return reject(new Meteor.Error(error));
                    } else {
                        console.log(billingPlan, "billingPlan");
                        return resolve(billingPlan);
                    }
                });
            });
        })
    }*/
})
if (Meteor.isServer) {
  Meteor.publish('funnels', function funnelsPublication() {
    const hasPaid = checkRole(['user','admin'], this.userId);
    // if(hasPaid) return Funnels.find({image:{$exists:true}, document:{$exists:true}}, {fields:{zipCode:1, projectName:1, image:1, document:1,video:1, description:1, industry:1, category:1}});
    // return Funnels.find({image:{$exists:true}, document:{$exists:true}}, {fields:{zipCode:1, projectName:1, image:1, description:1, industry:1, category:1}});
    return Funnels.find({});
  });
  Meteor.publish('freeFunnels', function funnelsFreePublication(){
    //return Funnels.find({zipCode:'0'}, {fields:{zipCode:1, projectName:1, image:1, document:1,video:1, description:1, industry:1, category:1}})
    return Funnels.find({});
    });

Meteor.publish('adminFunnels', function funnelsPublication() {
    const isAdmin = checkRole(['admin'], this.userId);
    console.log(isAdmin)
   if (!isAdmin) return Funnels.find({"userId._id": this.userId});
    return Funnels.find();
  });

  Meteor.publish('funnel', function funnelPublication(funnelId) {
    return Funnels.findOne({
        
      _id: funnelId
    });
  });

Funnels.allow({
    insert: function (userId) {
     return checkRole(['user','admin'], userId);
    },
    update: function (userId) {
     return checkRole(['user','admin'], userId);
    },
    remove: function (userId) {
     return checkRole(['admin', 'user'], userId);
    }
  });
}