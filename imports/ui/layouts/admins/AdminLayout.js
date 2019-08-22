import React, { Component, Fragment } from 'react';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Location from '../../globalComponents/Location';
import AdminComponent from '../../components/admins/AdminComponent';
import { Categories, Funnels, FoundRaiseAs, ForWhoFoundsRaise, TypeOfDonations } from '../../../api/collections'

// App component - represents the whole app
 
class AdminLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     /**
     * @goal change the location path if is user or admin 
     * @Author roland
     */

    const locationUser = { path: ['Home', 'Projects'], projectName: 'Administration' };
    
    const { funnels, categories, foundRaiseAs, forWhoFoundsRaise, user, typeOfDonations } = this.props;
    return (
      <Fragment>
        <Location location={locationUser}/>
        <AdminComponent typeOfDonations={typeOfDonations} funnels={funnels} user={user} categories={categories} foundRaiseAs={foundRaiseAs} forWhoFoundsRaise={forWhoFoundsRaise} />
      </Fragment>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('adminFunnels');
  Meteor.subscribe('categories');
  Meteor.subscribe('foundRaiseAs');
  Meteor.subscribe('forWhoFoundsRaise');
  Meteor.subscribe('users');
  Meteor.subscribe('typeOfDonations');
  // console.log(Meteor.call('getTheCurrent', Meteor.userId()));

  return {
    funnels: Funnels.find({}).fetch(),
    categories: Categories.find({}).fetch(),
    foundRaiseAs: FoundRaiseAs.find({}).fetch(),
    forWhoFoundsRaise: ForWhoFoundsRaise.find({}).fetch(),
    typeOfDonations: TypeOfDonations.find({}).fetch(),
    user:Meteor.user(),
  }
})(AdminLayout)