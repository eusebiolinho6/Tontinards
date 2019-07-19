import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminFoundRaiseAs from '../../components/admins/foundRaiseAs/AdminFoundRaiseAs';
import {FoundRaiseAs} from '../../../api/collections'
// App component - represents the whole app
class AdminFoundRaiseAsLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'FoundRaiseAs', 'Admin'], projectName: 'Administration' };
    const {foundRaiseAs} = this.props;
    return (
      <Fragment>
          <Location location={location} />
            <AdminFoundRaiseAs foundRaiseAs={foundRaiseAs} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('foundRaiseAs');

  return {
    foundRaiseAs: FoundRaiseAs.find({}).fetch()
     
  }
})(AdminFoundRaiseAsLayout)