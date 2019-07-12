import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminComponent from '../../components/admins/AdminComponent';
import {Categories, Industries, Funnels, FoundRaiseAs} from '../../../api/collections'

// App component - represents the whole app
class AdminLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Funnels', 'Admin'], title: 'Administration' };
    const {funnels, industries, categories, foundRaiseAs} = this.props;
    console.log(foundRaiseAs);
    /* console.log(categories);
    console.log(funnels);
    console.log(industries); */
    return (
      <Fragment>
          <Location location={location} />
          <AdminComponent funnels={funnels} categories={categories} industries={industries} foundRaiseAs={foundRaiseAs} />
      </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('adminFunnels');
  Meteor.subscribe('industries');
  Meteor.subscribe('categories');
  Meteor.subscribe('foundRaiseAs');

  return {
    funnels: Funnels.find({}).fetch(),
    industries: Industries.find({}).fetch(),
    categories: Categories.find({}).fetch(),
    foundRaiseAs: FoundRaiseAs.find({}).fetch()
    }
})(AdminLayout)