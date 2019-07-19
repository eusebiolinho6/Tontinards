import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
import FunnelDetailsPage from '../funnels/FunnelsDetailsPage'
import {Link} from 'react-router-dom';
import AdminProjectItemValidated from '../../components/admins/AdminProjectItemValidated';
import AdminProjectItemPending from '../../components/admins/AdminProjectItemPending';
import FunnelItem from '../../components/funnels/Funnel-Item';
import ToggleButton from 'react-toggle-button';
import Switch from "react-switch";

const fakeProjectsPending = [
  {
    "img": "/images/img4.PNG",
    "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
    "currentAmount": "200000",
    "goal": "10000000"
  },
  {
    "img": "/images/img4.PNG",
    "projectTitle": "Project Number Two",
    "currentAmount": "50000",
    "goal": "500000"
  },
  {
    "img": "/images/img4.PNG",
    "projectTitle": "Project Number Three",
    "currentAmount": "2100000",
    "goal": "2000000"
  },
  {
    "img": "/images/img4.PNG",
    "projectTitle": "Project Number Four",
    "currentAmount": "17500975",
    "goal": "63000000"
  }
  ]
const fakeProjectsValidated = [
    {
      "img": "/images/img5.PNG",
      "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
      "currentAmount": "200000",
      "goal": "750000"
    },
    {
      "img": "/images/img5.PNG",
      "projectTitle": "Project Number Two",
      "currentAmount": "50000",
      "goal": "1000000"
    },
    {
      "img": "/images/img5.PNG",
      "projectTitle": "Project Number Three",
      "currentAmount": "900000",
      "goal": "1500000"
    },
    {
      "img": "/images/img5.PNG",
      "projectTitle": "Project Number Four",
      "currentAmount": "250000",
      "goal": "800000"
    }
]

const fakeProjectsRefused = [
    {
      "img": "/images/img4.PNG",
      "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
      "currentAmount": "50000",
      "goal": "150000"
    },
    {
      "img": "/images/img4.PNG",
      "projectTitle": "Project Number Two",
      "currentAmount": "850000",
      "goal": "10000000"
    },
    {
      "img": "/images/img4.PNG",
      "projectTitle": "Project Number Three",
      "currentAmount": "100000",
      "goal": "7000000"
    },
    {
      "img": "/images/img4.PNG",
      "projectTitle": "Project Number Four",
      "currentAmount": "175000",
      "goal": "600000"
    }
  ]
// App component - represents the whole app
class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
        pendingProjects: fakeProjectsPending,
        validatedProjects: fakeProjectsValidated,
        refusedProjects: fakeProjectsRefused,
    }
  }
/**
 * 
  * @param {Array} projects is the array of pending projects we will map to display each of them
   * returns pending project
   * author:cindy sonfack
  */
  renderProjectPending(projects){
        return projects.map((project, index)=>(
            <AdminProjectItemPending key={index} project={project} />
        ))
   }
/**
 * 
  * @param {Array} projects is the array of validated projects we will map to display each of them
   * returns validated project
   * author:cindy sonfack
  */
  renderProjectValidated(projects){
      return projects.map((project, index)=>(
          <AdminProjectItemValidated key={index} project={project} />
      ))
  }

  /**
 * 
  * @param {Array} projects is the array of refused projects  we will map to display each of them
   * returns refused projects
   * author:cindy sonfack
  */
  renderProjectPending(projects){
      return projects.map((project, index)=>(
          <AdminProjectItemPending key={index} project={project} />
      ))
  }

/**
 * 
  * @param {Array} initialArray is the array of more pending projects 
    @param {} state 
   * returns an Array of more pending project
 */
  pushMoreProjectsPending(state, initialArray ){
    for (let i=0; i<4; i++){
      this.setState({
        state: initialArray.push(fakeProjectsPending[i])
      })
  } 
   }

   /**
 * 
  * @param {Array} initialArray is the array of more validated projects 
    @param {} state 
   * returns an Array of more validated project
 */
   pushMoreProjectsValidated(state, initialArray ){
    for (let i=0; i<4; i++){
      this.setState({
        state: initialArray.push(fakeProjectsValidated[i])
      })
  } 
    
   }



  render() {
    
    return (
      <div className="container-fluid no-padding">
      <br/>
      <h1 className = "AdminProjectH1">Projects List </h1>
      <hr className = "AdminProjectHr"/>
          <div className="row text-center pendingProjectsConatiner">
            <br/>
            <h2 className = "AdminProjectH2">Pending Projects </h2>
            <br/>
            <div className="projects">
                {this.renderProjectPending(this.state.pendingProjects)}
            </div>
            <br/>
            <a  id="5" onClick={()=> this.pushMoreProjectsPending("pendingProjects", this.state.pendingProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
            <br/>
         </div>
         <div className="row text-center validatedProjectsConatiner">
            <hr className = "AdminProjectSHr"/>
            <h2 className = "AdminProjectH2">Valided Projects </h2>
            <div className="projects">
                {this.renderProjectValidated(this.state.validatedProjects)}
            </div>
            <br/>
            <a type="button" onClick={()=> this.pushMoreProjectsValidated("validatedProjects", this.state.validatedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
            <br/>
          </div>
          <div className="row text-center validatedProjectsConatiner">
            <hr className = "AdminProjectSHr"/>
            <h2 className = "AdminProjectH2">Refused Projects </h2>
            <div className="projects">
                {this.renderProjectPending(this.state.refusedProjects)}
            </div>
            <br/>
            <a type="button" onClick={()=> this.pushMoreProjectsPending("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
            <br/>
          </div>
        </div>
    )
}
}

export default AdminDashboard;