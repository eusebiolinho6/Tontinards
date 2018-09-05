import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import Header from '../components/FunnelDetails';
import Location from '../components/Location';
import FunnelDetails from '../components/FunnelDetails';
import FunnelList from '../components/FunnelList'

import {Funnels, toObjectId} from '../../api/funnels/methods';

// App component - represents the whole app
class FunnelDetailsLayout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const location = {path: ['Home', 'Funnels', 'detail'], title: 'Details' };
    const {funnel, funnels} = this.props;
    return (
        <Fragment>
            <Location location={location} />
            <FunnelDetails funnel={funnel} />
         {funnels&&funnels.length?<div className="col-lg-12 animated fadeInRight">
            <h2>Also check the following funnels</h2>
             <hr />
            <div className="row">
                <FunnelList propclass="details" funnels={funnels} />
            </div>
        </div>:''}
        </Fragment>
      )
  }
}

export default withTracker(props=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('industries');
  Meteor.subscribe('categories');
  const funnel =Funnels.findOne({_id: toObjectId(props.funnelId)});
  return {
    funnel: funnel,
    funnels:Funnels.find({$or:[{industry:funnel&&funnel.industry},{category:funnel&&funnel.category}]})
  }
})(FunnelDetailsLayout)