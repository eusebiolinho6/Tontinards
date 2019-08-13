import React, { Component, Fragment } from 'react';

import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Location from '../../globalComponents/Location';
import AdminDonations from '../../components/admins/donations/AdminDonations';
import { Funnels } from '../../../api/collections'
// App component - represents the whole app
class AdminCategoryLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Donations', 'Admin'], projectName: 'Administration' };
    const {projects} = this.props;
    console.log(this.props);
    return (
      <Fragment>
          <Location location={location} />
            <AdminDonations projects={projects} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('funnels');

  return {
    projects: Funnels.find({}).fetch()
  }
})(AdminCategoryLayout)