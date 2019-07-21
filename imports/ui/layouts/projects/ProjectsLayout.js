import React, { Component, Fragment } from 'react';
import MainLayout from '../MainLayout';
import { withTracker } from 'meteor/react-meteor-data';
import ProjectItem from '../../components/projects/ProjectItem';
import {Categories, Funnels} from '../../../api/collections';

class ProjectsLayout extends Component {
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
      <ProjectItem key={index} project={project} stateOfProject={sop} user="simpleUser"/>
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
    const {funnels, userId} = this.props;
    // console.log(funnels);
    const pendingProjects = [];
    const validatedProjects = [];
    const refusedProjects = [];
    const campaigns = [];
    funnels.map((project) => {
      project.currentState ? 
        project.currentState == "validated" ? validatedProjects.push(project) :
        project.currentState == "refused" ? refusedProjects.push(project) :
        project.currentState == "campaigns" ? campaigns.push(project): ""
      : 
      pendingProjects.push(project);
    })
    return (
      <div className="container-fluid no-padding">
        <div className="row projectsPageHeader">
            <h1>Projects List</h1>
            <hr/>
        </div>
        {/*---- Begining zone of Pending Projects------*/}
        <div className="row text-center pendingProjectsConatiner">
            <h2>Pending Projects</h2>
            <div className="projects">

              {this.renderProjects(pendingProjects, "pending")}
            </div>
            <br/>
            <br/>
            {/* <a  id="5" onClick={()=> this.pushMoreProjects("pendingProjects", this.state.pendingProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
        </div>
        {/*---- End zone of Pending Projects ------*/}

        {/*---- Begining zone of Validated Projects ------*/}
        {
          validatedProjects.length == 0 ? 
          "" 
          :
        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Validated Projects</h2>
            <div className="projects">
                {this.renderProjects(validatedProjects, "validated")}
            </div>
            <br/>
            <br/>
            {/* <a type="button" onClick={()=> this.pushMoreProjects("validatedProjects", this.state.validatedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
        </div>
        }
        {/*---- End zone of Validated Projects ------*/}

        {/*---- Begining zone of Resused Projects ------*/}
        {
          refusedProjects.length == 0 ? 
          "" 
          :
        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Rejected Projects</h2>
            <div className="projects">
                {this.renderProjects(refusedProjects, "refused")}
            </div>
            <br/>
            <br/>
            {/* <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
        </div>
        }
        {/*---- End zone of Rejected Projects ------*/}

        {/*---- Begining zone of Campaigns ------*/}
        {
          campaigns.length == 0 ? 
          "" 
          :
        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Campaigns</h2>
            <div className="projects">
                {this.renderProjects(campaigns, "campaign")}
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
  let q={};
  return {
    funnels: Funnels.find(q).fetch(),
    userId:Meteor.userId()
  }
})(ProjectsLayout);