import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom'
import ProjectItem from '../../components/projects/ProjectItem';
import { withTracker } from 'meteor/react-meteor-data';
import {toObjectId} from '../../../utilities/';
import {Funnels, FoundRaiseAs, ForWhoFoundsRaise} from '../../../api/collections';

// App component - represents the whole app
class ProjectDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      name: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      redirect: false
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
      <ProjectItem key={index} project={project} propclass="donation" />
    ))
  }

  // Save the Donation
  submit(e) {
    e.preventDefault();
    const projectId = this.props.project._id;
    const newDonator = {
      firstName: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      amount: this.state.amount,
    }
    Meteor.call('makeDonate', newDonator, projectId);
    this.setState({
        redirect: true
    })
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    this.setState({
        [name]: value
    });
  }


  render() {
    const {project,user} = this.props,
    projects = [];
    /*here we want to apply donation on one project that's why we push one project inside the array of projects */
    projects.push(project)

    return (
      <div className="container-fluid no-padding">
        {this.state.redirect ? <Redirect to="/" />:null}
        <div className="row projectsPageHeader">
            <h1>Invest</h1>
            <hr/>
        </div>
        
        <div className="row donationPageContent col-md-7 col-sm-9">
            <h3>Enter your Investment</h3>

            <form>
                  <div>
                    <div className="form-group inputContainer">
                        <input type="number" className="donationInput" name="amount"
                          value={this.state.amount} onChange={(event) => this.handleInputChange(event)} required /> Fcfa
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                  </div>
                <div className="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input type="text" className="form-control" name="name"
                      value={this.state.name} onChange={(event) => this.handleInputChange(event)}
                      required id="firstNameInput" placeholder="Enter your first name"/>
                </div>
                <div className="form-group">
                    <label for="lastNameInput">Last Name</label>
                    <input type="text" className="form-control" name="lastName"
                      value={this.state.lastName} onChange={(event) => this.handleInputChange(event)}
                      required id="lastNameInput" placeholder="Enter your last name"/>
                </div>
                <div className="form-group">
                    <label for="phoneNumberInput">Phone Number</label>
                    <input type="text" className="form-control" name="phoneNumber"
                      value={this.state.phoneNumber} onChange={(event) => this.handleInputChange(event)}
                      required id="phoneNumberInput" placeholder="Enter your phone number"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail">Email address</label>
                    <input type="email" className="form-control" name="email"
                      value={this.state.email} onChange={(event) => this.handleInputChange(event)}
                      required id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <button onClick={(event) => this.submit(event)} className="btn btn-primary">Submit</button>

                <br/>

            </form>
        </div>
        <div className="col-md-4">
            {this.renderSelectedProject(projects)}
        </div>
        
      </div>
    )
  }
}
export default ProjectDonation;

