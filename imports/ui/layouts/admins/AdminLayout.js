import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminComponent from '../../components/admins/AdminComponent';
import {Categories, Funnels, FoundRaiseAs, ForWhoFoundsRaise } from '../../../api/collections'

// App component - represents the whole app
class AdminLayout extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const location = {path: ['Home', 'Projects', 'Admin'], projectName: 'Administration' };
    const {funnels, categories, foundRaiseAs, forWhoFoundsRaise} = this.props;
    return (
      <Fragment>
          <Location location={location} />
          <AdminComponent funnels={funnels} categories={categories} foundRaiseAs={foundRaiseAs} forWhoFoundsRaise={forWhoFoundsRaise} />
      </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('adminFunnels');
  Meteor.subscribe('categories');
  Meteor.subscribe('foundRaiseAs');
  Meteor.subscribe('forWhoFoundsRaise');

  return {
    funnels: Funnels.find({}).fetch(),
    categories: Categories.find({}).fetch(),
    foundRaiseAs: FoundRaiseAs.find({}).fetch(),
    forWhoFoundsRaise : ForWhoFoundsRaise.find({}).fetch(),
    }
})(AdminLayout)