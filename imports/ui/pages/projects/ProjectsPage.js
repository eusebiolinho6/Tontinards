import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
import PendingProjectItem from '../../components/projects/Pending-Project-Item';
import ValidatedProjectItem from '../../components/projects/Validated-Project-Item'

const fakePendingProjects = [
    {
      "img": "/images/img1.PNG",
      "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
      "currentAmount": "200000",
      "goal": "10000000"
    },
    {
      "img": "/images/img1.PNG",
      "projectTitle": "Project Number Two",
      "currentAmount": "50000",
      "goal": "500000"
    },
    {
      "img": "/images/img1.PNG",
      "projectTitle": "Project Number Three",
      "currentAmount": "2100000",
      "goal": "2000000"
    },
    {
      "img": "/images/img1.PNG",
      "projectTitle": "Project Number Four",
      "currentAmount": "17500975",
      "goal": "63000000"
    }
  ]
const fakeValidatedProjects = [
    {
      "img": "/images/img5.PNG",
      "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
      "currentAmount": "20000",
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

const fakeRefusedProjects = [
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
class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state={
        pendingProjects: fakePendingProjects,
        validatedProjects: fakeValidatedProjects,
        rejectedProjects: fakeRefusedProjects
    }
  }

  /**
   * 
   * @param {Array} projects is the array of projects we will map to display each of them
   * @param {*} Component the corresponding Component to be rendrered
   * returns a rendered Component 
   */
  renderProjects(projects, Component){
    return projects.map((project, index)=>(
      <Component key={index} project={project} />
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
                {this.renderProjects(this.state.pendingProjects, PendingProjectItem)}
            </div>
            <br/>
            <br/>
            <a  id="5" onClick={()=> this.pushMoreProjects("pendingProjects", this.state.pendingProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
        </div>
        {/*---- End zone of Pending Projects ------*/}

        {/*---- Begining zone of Validated Projects ------*/}
        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Validated Projects</h2>
            <div className="projects">
                {this.renderProjects(this.state.validatedProjects, ValidatedProjectItem)}
            </div>
            <br/>
            <br/>
            <a type="button" onClick={()=> this.pushMoreProjects("validatedProjects", this.state.validatedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
        </div>
        {/*---- End zone of Validated Projects ------*/}

        {/*---- Begining zone of Rejected Projects ------*/}
        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Rejected Projects</h2>
            <div className="projects">
                {this.renderProjects(this.state.rejectedProjects, PendingProjectItem)}
            </div>
            <br/>
            <br/>
            <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
        </div>
        {/*---- End zone of Rejected Projects ------*/}
        

      </div>
    )
  }
}

export default ProjectsPage;