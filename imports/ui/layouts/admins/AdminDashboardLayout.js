import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import ProjectItem from '../../components/projects/ProjectItem';
import { withTracker } from 'meteor/react-meteor-data';
import {Categories, Funnels, ForWhoFoundsRaise, FoundRaiseAs} from '../../../api/collections';

class AdminDashboardLayout extends Component {
  constructor(props) {
    super(props);
  }

/**
 * 
 * @param {Array} projects is the array of projects we will map to display each of them
 * @returns rendered Components 
 * @Author Cindy and Junior
 */
  renderProjects(projects){
    return projects.map((project, index)=>(
        <ProjectItem key={index} project={project} 
          foundRaiseAs={this.props.foundRaiseAs}
          forWhoFoundsRaise={this.props.forWhoFoundsRaise}
          categories={this.props.categories} user="admin" />
    ))
  } 

/**
 * 
  * @param {Array} initialArray is the array of more pending projects 
    @param {} state 
   * returns an Array of more pending project
 */
  pushMoreProjects(state, initialArray ){
    for (let i=0; i<4; i++){
      this.setState({
        state: initialArray.push(fakeProjectsPending[i])
      })
    } 
  }



  render() {
    const {funnels, userId} = this.props;
    const pendingProjects = [];
    const validatedProjects = [];
    const refusedProjects = [];
    const campaigns = [];
    funnels.map((project) => {
      project.projectState ? 
        project.projectState == "VALID" ? validatedProjects.push(project) :
        project.projectState == "REFUSED" ? refusedProjects.push(project) :
        project.projectState == "START CAMPAIGN" ? campaigns.push(project): pendingProjects.push(project)
      : 
      ''
    })
    
    return (
      <div className="container-fluid row">
          <div className="col-sm-8 col-md-12">
            <br/>
            <h1 className = "AdminProjectH1">Projects List </h1>
            <hr className = "AdminProjectHr"/>
            {
                pendingProjects.length == 0 ? 
                "" 
                :
              <div className="row text-center pendingProjectsContainer">
                <br/>
                <h2 className = "AdminProjectH2">Pending Projects </h2>
                <br/>
                <div className="projects">
                    {this.renderProjects(pendingProjects)}
                </div>
                <br/>
                {/* <a  id="5" onClick={()=> this.pushMoreProjects("pendingProjects", this.state.pendingProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
                <br/>
              </div>
            }

            {
              validatedProjects.length == 0 ? 
              "" 
              :
              <div className="row text-center validatedProjectsConatiner">
                <hr className = "AdminProjectSHr"/>
                <h2 className = "AdminProjectH2">Valided Projects </h2>
                <div className="projects">
                    {this.renderProjects(validatedProjects)}
                </div>
                <br/>
                {/* <a type="button" onClick={()=> this.pushMoreProjects("validatedProjects", this.state.validatedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
                <br/>
              </div>
            }

            {
              campaigns.length == 0 ? 
              "" 
              :
              <div className="row text-center validatedProjectsConatiner">
                <hr className = "AdminProjectSHr"/>
                <h2 className = "AdminProjectH2">Campaigns </h2>
                <div className="projects">
                  {this.renderProjects(campaigns)}
                </div>
                <br/>
                {/* <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
                <br/>
              </div>
            }
          </div>
      </div>   
    )
  }
}

export default withTracker((props)=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('categories');  
  Meteor.subscribe('forWhoFoundsRaise');  
  Meteor.subscribe('foundRaiseAs');  
  let q={};
  return {
    funnels: Funnels.find(q).fetch(),
    categories: Categories.find({}).fetch(),
    foundRaiseAs: ForWhoFoundsRaise.find({}).fetch(),
    forWhoFoundsRaise: FoundRaiseAs.find({}).fetch()
  }
})(AdminDashboardLayout);