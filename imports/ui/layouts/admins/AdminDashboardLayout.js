import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import {Link} from 'react-router-dom';
import ProjectItem from '../../components/projects/ProjectItem';
import { withTracker } from 'meteor/react-meteor-data';
import {Categories, Funnels, ForWhoFoundsRaise, FoundRaiseAs} from '../../../api/collections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const emptyIcon = <FontAwesomeIcon icon={faBan} size="3x"/>

class AdminDashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPendingProjects: true,
      displayValidatedProjects: false,
      displayCampaings: false,
    }
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
          categories={this.props.categories} user={this.props.user} />
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

  filterProjects = (projectsToDisplay) =>{
    projectsToDisplay == "PENDING" ?
      this.setState({
        displayPendingProjects: true,
        displayValidatedProjects: false,
        displayCampaings: false
      }) 
    : projectsToDisplay == "VALID" ? 
      this.setState({
        displayPendingProjects: false,
        displayValidatedProjects: true,
        displayCampaings: false
      }) 
      :
      this.setState({
        displayPendingProjects: false,
        displayValidatedProjects: false,
        displayCampaings: true
      })
  }



  render() {
    const {funnels, userId, user} = this.props,
    pendingProjects = [],
    validatedProjects = [],
    refusedProjects = [],
    campaigns = [],
    {displayPendingProjects,displayValidatedProjects, displayCampaings} = this.state;

      let data = null;
      // Verify if all data are ready, then render this data
      if(this.props.funnels && 
        this.props.user && 
        this.props.categories && 
        this.props.foundRaiseAs && 
        this.props.forWhoFoundsRaise) {
      // Filter projects. Display all projects to admin and only user project to the current user
      let newFunnels = [...funnels];
      if (user.profile.role != "admin") {
        newFunnels = funnels.filter(project => {
          return project.userId._id == user._id;
        })
      }
      newFunnels.map((project) => {
        project.projectState ? 
          project.projectState == "VALID" ? validatedProjects.push(project) :
          project.projectState == "REFUSED" ? refusedProjects.push(project) :
          project.projectState == "START CAMPAIGN" ? campaigns.push(project): pendingProjects.push(project)
        : 
        ''
      })
        data = (
          <div className="container-fluid row">
          <br/>
          <h1 className = "AdminProjectH1">Projects List </h1>
          <hr className = "AdminProjectHr"/>
  
  
          {/*------------------------ FILTER MENU CONTAINER ----------------------*/}
          <div className="filerMenu col-md-3" id="filerMenu">
            <h1 className="transparent">.</h1>
            <form className="form">
              <h2>Filter Options</h2>
              {/* <div className="inputGroup">
                <input id="option1" name="option1" type="checkbox"/>
                <label for="option1">Pending projects<AdminDashboardLayout/label>
              </div>
              
              <div className="inputGroup">
                <input id="option2" name="option2" type="checkbox"/>
                <label for="option2">Validated projects</label>
              </div>
  
              <div className="inputGroup">
                <input id="option2" name="option2" type="checkbox"/>
                <label for="option2">Campaigns</label>
              </div> */}
  
              <div className="inputGroup">
                <input id="radio1" name="radio" type="radio" checked={displayPendingProjects} onChange={()=>this.filterProjects("PENDING")}/>
                <label for="radio1"><span>Pending projects</span></label>
              </div>
  
              <div className="inputGroup">
                <input id="radio2" name="radio" type="radio" onChange={()=>this.filterProjects("VALID")}/>
                <label for="radio2"><span>Validated projects</span></label>
              </div>
  
              <div className="inputGroup">
                <input id="radio3" name="radio" type="radio" onChange={()=>this.filterProjects("CAMPAIGNS")}/>
                <label for="radio3"><span>Campaigns</span></label>
              </div>
            </form>
  
          </div>
  
          {/*------------------------ PROJECTS CONATINER -------------------------*/}        
            <div className="container-fluid row col-md-9">
              {displayPendingProjects ?        
                <div className="row text-center pendingProjectsContainer">
                    <br/>
                    <h2 className = "AdminProjectH2">Pending Projects </h2>
                    <br/>
                    {
                    pendingProjects.length == 0 ? 
                    <div className="noProject">
                      <span>{emptyIcon}</span>
                      <h3>No project.</h3>
                    </div>
                    :
                    <div>
                      <div className="projects">
                          {this.renderProjects(pendingProjects)}
                      </div>
                      <br/>
                      {/* <a  id="5" onClick={()=> this.pushMoreProjects("pendingProjects", this.state.pendingProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
                      <br/>
                    </div> 
                  }
                </div>
                :
                ""
              }
  
              {displayValidatedProjects ?
                <div className="row text-center validatedProjectsConatiner">
                  {/* <hr className = "AdminProjectSHr"/> */}
                  <br/>
                  <h2 className = "AdminProjectH2">Validated Projects </h2>
                  <br/>
                  {
                  validatedProjects.length == 0 ? 
                  <div className="noProject">
                    <span>{emptyIcon}</span>
                    <h3>No project.</h3>
                  </div>
                  :
                  <div>
                    <div className="projects">
                        {this.renderProjects(validatedProjects)}
                    </div>
                    <br/>
                    {/* <a type="button" onClick={()=> this.pushMoreProjects("validatedProjects", this.state.validatedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
                    <br/>
                  </div>
                  }
                </div>
                :
                ""
              }
  
             {displayCampaings ?
              <div className="row text-center validatedProjectsConatiner">
                {/* <hr className = "AdminProjectSHr"/> */}
                <br/>
                <h2 className = "AdminProjectH2">Campaigns </h2>
                <br/>
                {
                  campaigns.length == 0 ? 
                  <div className="noProject">
                    <span>{emptyIcon}</span>
                    <h3>No project.</h3>
                  </div> 
                  :
                  <div>
                    <div className="projects">
                      {this.renderProjects(campaigns)}
                    </div>
                    <br/>
                    {/* <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
                    <br/>
                  </div>
                }
              </div>
              :
              ""
            }
          </div>
        </div>
        )
    }
    
    return data;
  }
}

export default withTracker((props)=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('categories');   
  Meteor.subscribe('forWhoFoundsRaise');  
  Meteor.subscribe('foundRaiseAs');
  Meteor.subscribe('users');  
  let q={};
  return {
    funnels: Funnels.find(q).fetch(),
    categories: Categories.find({}).fetch(),
    forWhoFoundsRaise: ForWhoFoundsRaise.find({}).fetch(),
    foundRaiseAs: FoundRaiseAs.find({}).fetch(),
    user: Meteor.user()
  }
})(AdminDashboardLayout);