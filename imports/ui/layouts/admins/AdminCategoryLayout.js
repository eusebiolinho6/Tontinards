import React, { Component, Fragment } from 'react';

import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Location from '../../globalComponents/Location';
import AdminCategory from '../../components/admins/categories/AdminCategory';
import {Categories} from '../../../api/collections'

// App component - represents the whole app
class AdminCategoryLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let lang = localStorage.getItem('lang')

    let head = ['Accueil','Catégories', 'Administrateur']
     lang == 'fr'?
       head = ['Accueil','Categories', 'Administrateur']
       :
       head = ['Home', 'Categories', 'Admin']
    const location = {path: head, projectName: 'Administration' };
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