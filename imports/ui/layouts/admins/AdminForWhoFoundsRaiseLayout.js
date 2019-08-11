import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Location from '../../globalComponents/Location';
import AdminForWhoFoundsRaise from '../../components/admins/forWhoFoundsRaise/AdminForWhoFoundsRaise';
import {ForWhoFoundsRaise} from '../../../api/collections'
// App component - represents the whole app
class AdminForWhoFoundsRaiseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {path: ['Home', 'Funds Raise For', 'Admin'], projectName: 'Administration' };
    const {forWhoFoundsRaise} = this.props;
    return (
      <Fragment>
          <Location location={location} />
            <AdminForWhoFoundsRaise forWhoFoundsRaise={forWhoFoundsRaise} />
        </Fragment>
    )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('forWhoFoundsRaise');

  return {
    forWhoFoundsRaise: ForWhoFoundsRaise.find({}).fetch()
     
  }
})(AdminForWhoFoundsRaiseLayout)