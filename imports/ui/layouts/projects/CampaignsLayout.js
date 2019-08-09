import React, { Component, Fragment } from 'react';
import MainLayout from '../MainLayout';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ProjectItem from '../../components/projects/ProjectItem';
import {Categories, Funnels} from '../../../api/collections';

class CampaignsLayout extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

/**
 * 
 * @param {Array} projects is the array of projects we will map to display each of them
 * @param {string} sop stands for State Of Projects, is the state of the projects ("pending", "validated", "Campaign" or "refused")
 * @returns rendered Components 
 * @Author Cindy and Junior
 */
  renderProjects(projects, sop){
    return projects.map((project, index)=>(
      <ProjectItem key={index} project={project} stateOfProject={sop} user={this.props.user}/>
    ))
  }

  /**
   * 
   * @param {state} state: it is a state of the component, since component is automatically
   * redrawn when state changes, we actually use states to render projects in order to
   * display more projects without refreshing the page  
   * @param {Array} initialArray: this is the array of rendred projects before more projects
   * are loaded
   * returns nothing, just sets the state to it new value
   */
  pushMoreProjects(state, initialArray ){
    for (let i=0; i<4; i++){
      this.setState({
        state: initialArray.push(fakeValidatedProjects[i])
      })
    } 
  }



  render() {
    const {funnels, userId, user} = this.props;
    const campaigns = [];
    funnels.map((project) => {
      project.projectState ? 
        project.projectState == "START CAMPAIGN" ? 
          campaigns.push(project)
          : 
          null
      : 
      null
    })
    console.log(user);
    return (
      <div className="container-fluid no-padding">
        <div className="row projectsPageHeader">
            <br/>
            <h1>Select startups you can fund</h1>
            <br/>
            {/* <hr/> */}
        </div>
        

        {/*---- Begining zone of Campaigns ------*/}
        {
          campaigns.length == 0 ? 
          "" 
          :
        <div className="row text-center validatedProjectsConatiner">
            {/* <hr/> */}
            {/* <h2>Campaigns</h2> */}
            <div className="projects">
                {this.renderProjects(campaigns, "START CAMPAIGN")}
            </div>
            <br/>
            <br/>
            {/* <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
        </div>
        }
        {/*---- End zone of Rejected Projects ------*/}
        

      </div>
    )
  }
}

export default withTracker((props)=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('categories');  
  Meteor.subscribe('users');
  let q={};
  return {
    funnels: Funnels.find(q).fetch(),
    userId:Meteor.userId(),
    user: Meteor.user()
  }
})(CampaignsLayout);