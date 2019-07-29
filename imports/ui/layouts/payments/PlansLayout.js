import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Location from '../../globalComponents/Location'
import PlanItem from '../../components/payments/PlanItem';


// App component - represents the whole app
class PlansLayout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {userId}=this.props;
    const location = {
      path: ['Home', 'Pricing'],
      projectName: 'Our plans'
    }, plans=[
        {name: "BASIC",
         phoneNumber: 1,
        description: "With this Plan you can download all funnel images in FOPSwipe."  
        },
{
    name: "PRO",
    phoneNumber: 2    ,
    description: "With this Plan you can download all our funnel images and pdfs in FOPSwipe."
}, {
    name: "ULTIMATE",
    phoneNumber: 3,
    description: "With this Plan you can download all our funnel images, pdfs and videos in FOPSwipe."
}];
    return (
      <Fragment>
        <Location location={location} />
        <h2 className="text-center" style={{marginBottom: '30px'}} >Choose a plan and download the funnels you want</h2>
         <div className="row"> {plans.map((plan, index)=>(<PlanItem key={index} userId={userId} plan={plan} />)) }</div>
      </Fragment>
    )
  }
}

export default withTracker(props => {
 
  return {
    userId: Meteor.userId(),
  }
})(PlansLayout)