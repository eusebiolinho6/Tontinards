import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminIndustry from '../../components/admins/industries/AdminIndustry';
import { Industries} from '../../../api/collections'
// App component - represents the whole app
class AdminIndustryLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Industries', 'Admin'], projectName: 'Administration' };
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