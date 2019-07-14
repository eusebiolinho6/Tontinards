import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminComponent from '../../components/admins/AdminComponent';
import {Categories, Industries, Funnels, FoundRaiseAs, ForWhoFoundsRaise } from '../../../api/collections'

// App component - represents the whole app
class AdminLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Funnels', 'Admin'], title: 'Administration' };
    const {funnels, industries, categories, foundRaiseAs, forWhoFoundsRaise} = this.props;
    return (
      <Fragment>
          <Location location={location} />
          <AdminComponent funnels={funnels} categories={categories} industries={industries} foundRaiseAs={foundRaiseAs} forWhoFoundsRaise={forWhoFoundsRaise} />
      </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('adminFunnels');
  Meteor.subscribe('industries');
  Meteor.subscribe('categories');
  Meteor.subscribe('foundRaiseAs');
  Meteor.subscribe('forWhoFoundsRaise');

  return {
    funnels: Funnels.find({}).fetch(),
    industries: Industries.find({}).fetch(),
    categories: Categories.find({}).fetch(),
    foundRaiseAs: FoundRaiseAs.find({}).fetch(),
    forWhoFoundsRaise : ForWhoFoundsRaise.find({}).fetch(),
    }
})(AdminLayout)