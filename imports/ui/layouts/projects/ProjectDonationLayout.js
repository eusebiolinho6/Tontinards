import React, { Component, Fragment } from 'react';
import ProjectItem from '../../components/projects/ProjectItem';
import { withTracker } from 'meteor/react-meteor-data';
import {toObjectId} from '../../../utilities/';
import {Funnels, FoundRaiseAs, ForWhoFoundsRaise} from '../../../api/collections';
import ProjectDonation from '../../components/projects/ProjectDonation';

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
            </Fragment>
          )
        }
        return data;
        }
  }

export default withTracker((props)=>{
    Meteor.subscribe('funnels');
    Meteor.subscribe('funnel');
    // Meteor.subscribe('categories');
    Meteor.subscribe('foundRaiseAs');
    Meteor.subscribe('onefoundRaiseAs');
    Meteor.subscribe('forWhoFoundsRaise');
    const project = Funnels.findOne({_id: toObjectId(props.projectId)});
    // const foundRaiseAs = FoundRaiseAs.findOne({_id: toObjectId(project.onefoundRaiseAs)});
    // console.log(foundRaiseAs);
    console.log(project);
      return {
          user: Meteor.user(),
          project: project 
      }
  })(ProjectDonationLayout)

