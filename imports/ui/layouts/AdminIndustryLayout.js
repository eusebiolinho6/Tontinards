import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../components/Location';
import AdminIndustry from '../components/AdminIndustry';
import {Industries} from '../../api/funnels/methods'

// App component - represents the whole app
class AdminIndustryLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Industries', 'Admin'], title: 'Administration' };
    const {industries} = this.props;
    
    return (
      <Fragment>
          <Location location={location} />
            <AdminIndustry industries={industries} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('industries');

  return {
    industries: Industries.find({}).fetch()
     
  }
})(AdminIndustryLayout)