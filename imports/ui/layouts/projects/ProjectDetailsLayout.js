import React, { Component, Fragment } from 'react';
import ProjectDetails from '../../components/projects/ProjectDetails';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import {toObjectId} from '../../../utilities/';
import {Funnels, FoundRaiseAs, ForWhoFoundsRaise} from '../../../api/collections';

// App component - represents the whole app
class ProjectDetailsLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const{user, project}=this.props;
    let data = null;
    // Verify if all data are ready, then render this data
    if((this.props.project && this.props.user) || this.props.project) {
      data = (
        <Fragment>
            <ProjectDetails user={user} project={project} />
        </Fragment>
      )
    }
    return data;
  }
}

export default withTracker((props)=>{ console.log(props);
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
  })(ProjectDetailsLayout)