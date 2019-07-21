import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
// import PendingProjectItem from '../../components/projects/Pending-Project-Item';
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
class ProjectDonation extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  /**
   * 
   * @param {Array} projects in array of only one project, that is the 
   * chosen project, the one we want to donate for
   * returns the Component, I mean the project we indeed want to donate for 
   */
  renderSelectedProject(projects){
    return projects.map((project, index)=>(
      <ValidatedProjectItem key={index} project={project} propclass="whenDonating" />
    ))
  }


  render() {
    return (
      <div className="container-fluid no-padding">
        <div className="row projectsPageHeader">
            <h1>Invest</h1>
            <hr/>
        </div>
        
        <div className="row donationPageContent col-md-7">
            <h3>Enter your Investment</h3>

            <form>
                <div class="form-group inputContainer">
                    <input type="number" className="donationInput" required /> Fcfa
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input type="text" className="form-control" required id="firstNameInput" placeholder="Enter your first name"/>
                </div>
                <div className="form-group">
                    <label for="lastNameInput">Last Name</label>
                    <input type="text" className="form-control" required id="lastNameInput" placeholder="Enter your last name"/>
                </div>
                <div className="form-group">
                    <label for="phoneNumberInput">Phone Number</label>
                    <input type="text" className="form-control" required id="phoneNumberInput" placeholder="Enter your phone number"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail">Email address</label>
                    <input type="email" className="form-control" required id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>

                <br/>

            </form>
        </div>
        <div className="col-md-4">
            {this.renderSelectedProject(fakeValidatedProjects)}
        </div>
        
      </div>
    )
  }
}

export default ProjectDonation;