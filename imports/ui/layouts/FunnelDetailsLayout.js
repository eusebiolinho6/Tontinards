import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Header from '../components/FunnelDetails';
import Location from '../components/Location';
import FunnelDetails from '../components/FunnelDetails';
import {Funnels, toObjectId} from '../../api/funnels/methods';

// App component - represents the whole app
class FunnelDetailsLayout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const location = {path: ['Home', 'Funnels', 'detail'], title: 'Details' };
    return (
        <Fragment>
            <Location location={location} />
            <FunnelDetails funnel={this.props.funnel} />
        </Fragment>
      )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('funnels');

  return {
    funnel: Funnels.findOne({_id: toObjectId(props.funnelId)})
     
  }
})(FunnelDetailsLayout)