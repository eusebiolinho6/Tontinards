import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
import FunnelItem from '../../components/funnels/Funnel-Item';

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

  renderProjects(projects){
        return projects.map((project, index)=>(
            <FunnelItem key={index} project={project} />
        ))
   }

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
        <div className="row text-center pendingProjectsConatiner">
            <h2>Pending Projects</h2>
            <div className="projects">
                {this.renderProjects(this.state.pendingProjects)}
            </div>
            <br/>
            <br/>
            <a  id="5" onClick={()=> this.pushMoreProjects("pendingProjects", this.state.pendingProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
        </div>

        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Validated Projects</h2>
            <div className="projects">
                {this.renderProjects(this.state.validatedProjects)}
            </div>
            <br/>
            <br/>
            <a type="button" onClick={()=> this.pushMoreProjects("validatedProjects", this.state.validatedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
        </div>

        <div className="row text-center validatedProjectsConatiner">
            <hr/>
            <h2>Rejected Projects</h2>
            <div className="projects">
                {this.renderProjects(this.state.rejectedProjects)}
            </div>
            <br/>
            <br/>
            <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a>
        </div>
        

      </div>
    )
  }
}

export default ProjectsPage;