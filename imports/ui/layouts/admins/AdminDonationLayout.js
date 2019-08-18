import React, { Component, Fragment } from 'react';

import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Location from '../../globalComponents/Location';
import AdminDonations from '../../components/admins/donations/AdminDonations';
import { Funnels, TypeOfDonations } from '../../../api/collections'
// App component - represents the whole app
class AdminDonationLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Donations', 'Admin'], projectName: 'Administration' };
    const {projects, donationsTypes} = this.props;
    console.log(this.props);
    return (
      <Fragment>
          <Location location={location} />
            <AdminDonations projects={projects} donationsTypes={donationsTypes} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('typeOfDonations');

  return {
    projects: Funnels.find({}).fetch(),
    donationsTypes: TypeOfDonations.find({}).fetch(),
  }
})(AdminDonationLayout)