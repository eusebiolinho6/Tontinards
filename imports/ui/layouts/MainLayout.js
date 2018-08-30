import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Location from '../components/Location'
import Main from '../components/Main'
import {Funnels} from '../../api/funnels/methods'


// App component - represents the whole app
class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const location = {
      path: ['Home', 'Funnels'],
      title: 'List of funnels'
    };
    return (
      <Fragment>
        <Location location={location} />
         <Main funnels={this.props.funnels} />
      </Fragment>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('funnels');
  return {
    funnels: Funnels.find({}).fetch()
     
  }
})(MainLayout)