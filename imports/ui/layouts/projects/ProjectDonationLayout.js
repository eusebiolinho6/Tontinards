import React, { Component, Fragment } from 'react';
import ProjectItem from '../../components/projects/ProjectItem';
import { withTracker } from 'meteor/react-meteor-data';
import {toObjectId} from '../../../utilities/';
import {Funnels, FoundRaiseAs, ForWhoFoundsRaise} from '../../../api/collections';
import ProjectDonation from '../../components/projects/ProjectDonation';
import Footer from '../../globalComponents/Footer'

class ProjectDonationLayout extends Component {
    constructor(props) {
      super(props);
      this.state={
      }
    }
  
    render() {
        const {project,user} = this.props;
        let data = null;
        // Verify if all data are ready, then render this data
        if((this.props.project && this.props.user) || this.props.project) {
          data = (
            <Fragment>
                <ProjectDonation user={user} project={project} />
                <Footer/>
            </Fragment>
          )
        }
        return data;
        }
  }

export default withTracker((props)=>{
  //if the project has changed, we change the value in localStorage too
  if (props.projectId != localStorage.getItem("projectId")){
    localStorage.setItem("projectId", props.projectId)
  } 
  Meteor.subscribe('funnels');
  Meteor.subscribe('funnel');
  // Meteor.subscribe('categories');
  Meteor.subscribe('foundRaiseAs');
  Meteor.subscribe('onefoundRaiseAs');
  Meteor.subscribe('forWhoFoundsRaise');
  Meteor.subscribe('typeOfDonations');
  const project = Funnels.findOne({_id: toObjectId(props.projectId)});
  // const foundRaiseAs = FoundRaiseAs.findOne({_id: toObjectId(project.onefoundRaiseAs)});
  // console.log(foundRaiseAs);
  console.log(project);
    return {
        user: Meteor.user(),
        project: project,
    }
})(ProjectDonationLayout)

