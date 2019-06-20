import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../components/Location';
import AdminComponent from '../../components/AdminComponent';
import {Categories, Industries, Funnels} from '../../../api/collections';

// Type: section display component
// Goal: displays the CRUD category section
class AdminLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Funnels', 'Admin'], title: 'Administration' };
    const {funnels, industries, categories} = this.props;
    return (
      <Fragment>
          <Location location={location} />
            <AdminComponent funnels={funnels} categories={categories} industries={industries} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('adminFunnels');
  Meteor.subscribe('industries');
  Meteor.subscribe('categories');

  return {
    funnels: Funnels.find({}).fetch(),
    industries: Industries.find({}).fetch(),
    categories: Categories.find({}).fetch()
    }
})(AdminLayout)