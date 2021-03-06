import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminCategory from '../../components/admins/categories/AdminCategory';
import {Categories} from '../../../api/collections'
// App component - represents the whole app
class AdminCategoryLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Categories', 'Admin'], projectName: 'Administration' };
    const {categories} = this.props;
    console.log(this.props);
    return (
      <Fragment>
          <Location location={location} />
            <AdminCategory categories={categories} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('categories');

  return {
    categories: Categories.find({}).fetch()
     
  }
})(AdminCategoryLayout)