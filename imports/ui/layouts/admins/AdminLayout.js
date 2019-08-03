import React, { Component, Fragment } from 'react';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Location from '../../globalComponents/Location';
import AdminComponent from '../../components/admins/AdminComponent';
import { Categories, Funnels, FoundRaiseAs, ForWhoFoundsRaise } from '../../../api/collections'

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
    const locationAdmin = { path: ['Home', 'Projects', 'Admin'], projectName: 'Administration' };
    const locationUser = { path: ['Home', 'Projects', 'User'], projectName: 'Administration' };
    
    const { funnels, categories, foundRaiseAs, forWhoFoundsRaise, user } = this.props;
    return (
      <Fragment>
        <Location location={user.profile.role=="admin" ? locationAdmin : locationUser}/>
        <AdminComponent funnels={funnels} user={user} categories={categories} foundRaiseAs={foundRaiseAs} forWhoFoundsRaise={forWhoFoundsRaise} />
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

  return {
    funnels: Funnels.find({}).fetch(),
    categories: Categories.find({}).fetch(),
    foundRaiseAs: FoundRaiseAs.find({}).fetch(),
    forWhoFoundsRaise: ForWhoFoundsRaise.find({}).fetch(),
    user: Meteor.user()
  }
})(AdminLayout)