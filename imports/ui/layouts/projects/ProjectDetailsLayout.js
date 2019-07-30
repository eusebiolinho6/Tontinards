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
    return (
        <Fragment>
            <ProjectDetails user={user} project={project} />
        </Fragment>
    )
  }
}

export default withTracker((props)=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('funnel');
  // Meteor.subscribe('categories');
  Meteor.subscribe('foundRaiseAs');
  Meteor.subscribe('onefoundRaiseAs');
  Meteor.subscribe('forWhoFoundsRaise');
  console.log(Meteor.user())
  const project = Funnels.findOne({"userId": Meteor.user()});
  // const foundRaiseAs = FoundRaiseAs.findOne({_id: toObjectId(project.onefoundRaiseAs)});
  // console.log(foundRaiseAs);
  console.log(project);
    return {
        user: Meteor.user(),
        project: project 
    }
})(ProjectDetailsLayout)