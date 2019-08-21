import { Meteor } from 'meteor/meteor';
import {checkRole} from '../../../utilities/'
import { TypeOfDonations, Funnels } from '../../collections'

Meteor.methods({
  'makeDonate': (data, projectId) => {
      let currentProject = Funnels.findOne(projectId);
      return new Promise((resolve, reject) => {
          const query = {$push: {"donators": data}}
          let project = Funnels.update({_id: projectId}, query);
          // Send Email to Donator
          const passedData = {
              name: data.lastName+' '+data.firstName,
              projectName: currentProject.projectName,
              amount: data.amount
          }
          Meteor.call('sendEmail', data.email, "Tontinards@gmail.com", "Donation for Tontinards", passedData, "donation.html")
          if (project) return resolve(project);
          return reject();
      })
  },
  'validateDonate': (data, projectId, updatedComment) => {
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
                  finalDonations[id].comment = updatedComment;
              }
          });
          const query = {$set: {"donators": finalDonations}}
          let project = Funnels.update({_id: projectId}, query);
          if (project) return resolve(project);
          return reject();
      })
  },

  'deleteDonate': (projectId, donID) => {
      let currentProject = Funnels.findOne(projectId);
      return new Promise((resolve, reject) => {
          let allDonations = currentProject.donators;
          let finalDonations = [];
          finalDonations = allDonations.filter(don => {
              return  don.id.toString() != donID.toString();
          })

          const query = {$set: {"donators": finalDonations}}
          let project = Funnels.update({_id: projectId}, query);
          if (project) return resolve(project);
          return reject();
      })
  },
})
  
Meteor.publish('typeOfDonations', function typeOfDonationsPublication() {
    return TypeOfDonations.find({});
});
Meteor.publish('typeOfDonation', function typeOfDonationPublication(id) {
  return TypeOfDonations.findOne({
    _id: id
  });
});
  
TypeOfDonations.allow({
    insert: function (userId) {
    return checkRole(['admin', 'user'], userId);
    },
    update: function (userId) {
    return checkRole(['admin', 'user'], userId);
    },
    remove: function (userId) {
    return checkRole(['admin', 'user'], userId);
    }
});
  