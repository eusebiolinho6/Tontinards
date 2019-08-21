import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom'
import ProjectItem from '../../components/projects/ProjectItem';
import Moment from 'react-moment';
import 'moment-timezone';
import { withTracker } from 'meteor/react-meteor-data';
import {toObjectId} from '../../../utilities/';
import {Funnels, FoundRaiseAs, ForWhoFoundsRaise} from '../../../api/collections';
import ReactNotification from "react-notifications-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "react-notifications-component/dist/theme.css";
import donatePageFr from '../../../../traduction/donatePage/fr.json';
import donatePageEn from '../../../../traduction/donatePage/en.json';

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
      redirect: false,
      message: '',
      location: ''
    }
    this.notificationDOMRef = React.createRef();
  }

  /**
   * 
   * @param {Array} projects in array of only one project, that is the 
   * chosen project, the one we want to donate for
   * returns the Component, I mean the project we indeed want to donate for 
   */
  renderSelectedProject(projects){
    return projects.map((project, index)=>( 
      <ProjectItem key={index} project={project} user={{ profile: {role: "guest" }}} propclass="donation" />
    ))
  }

  // Save the Donation
  submit(e) {
    e.preventDefault();
    const projectId = this.props.project._id;
    const newDonator = {
      id: new Mongo.ObjectID(),
      firstName: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      amount: this.state.amount,
      comment: this.state.message,
      location: this.state.location,
      date: new Date(),
      validated: false
    }
    if(this.state.amount.trim().length <= 0 ||
    this.state.email.trim().length <= 0 ||
    this.state.phoneNumber.trim().length <= 0 ) {
      this.addNotification("Amount, Phone Number and Email are required!", "danger");
    } else {
      Meteor.call('makeDonate', newDonator, projectId);
      this.addNotification("Successfully done!", "success")
      this.setState({
          redirect: true
      })
    }
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    this.setState({
        [name]: value
    });
  }

  addNotification = (message, type) => {
    this.notificationDOMRef.current.addNotification({
      title: "Donation!",
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }


  render() {
    let lg = donatePageFr;
        let lang = localStorage.getItem('lang')
          lang == 'fr'?
              lg = donatePageFr
              :
              lg = donatePageEn;
    
    const {project,user} = this.props,
    projects = [];
    /*here we want to apply donation on one project that's why we push one project inside the array of projects */
    projects.push(project);

    let comments = <p>{lg.Nocomment}</p>;
    if(project.donators) {
      let donators = project.donators.reverse();
      comments = donators.map(donator => {
        if (donator.comment) {
          return (
            <div className="comment-item">
              <div className="header">
                  <FontAwesomeIcon icon={faUserCircle} size={"2x"} />
                  <h4>{donator.lastName+" "+donator.firstName}</h4>
              </div>
              <div className="body">
                  <p>{donator.comment}</p>
                  <i>{donator.date ? <Moment fromNow>{donator.date}</Moment> : null}</i>
              </div>
            </div>
          );
        }
      })
    }

    return (
      <div className="container-fluid no-padding">
        {this.state.redirect ? <Redirect to="/" />:null}
        <ReactNotification ref={this.notificationDOMRef} />
        <div className="row projectsPageHeader">
            <h1>{lg.invest}</h1>
            <hr/>
        </div>
        
        <div className="row donationPageContent col-md-7 col-sm-9">
            <h3>{lg.enterYourInvest}</h3>

            <form>
                  <div>
                    <div className="form-group inputContainer">
                        <input type="number" className="donationInput" name="amount"
                          value={this.state.amount} onChange={(event) => this.handleInputChange(event)} required /> Fcfa
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                  </div>
                  {/* <br/> */}
                <div className="form-group">
                    <label for="firstNameInput">{lg.firstName}</label>
                    <input type="text" className="form-control" name="name"
                      value={this.state.name} onChange={(event) => this.handleInputChange(event)}
                      required id="firstNameInput" placeholder="Enter your first name"/>
                </div>
                <div className="form-group">
                    <label for="lastNameInput">{lg.lastName}</label>
                    <input type="text" className="form-control" name="lastName"
                      value={this.state.lastName} onChange={(event) => this.handleInputChange(event)}
                      required id="lastNameInput" placeholder="Enter your last name"/>
                </div>
                <div className="form-group">
                    <label for="phoneNumberInput">{lg.PhoneNumber}</label>
                    <input type="text" className="form-control" name="phoneNumber"
                      value={this.state.phoneNumber} onChange={(event) => this.handleInputChange(event)}
                      required id="phoneNumberInput" placeholder="Enter your phone number"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail">{lg.emailaddress}</label>
                    <input type="email" className="form-control" name="email"
                      value={this.state.email} onChange={(event) => this.handleInputChange(event)}
                      required id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail">{lg.informationsaboutLocation}</label>
                    <input type="text" className="form-control" name="location"
                      value={this.state.location} onChange={(event) => this.handleInputChange(event)}
                      required id="exampleInputLocation" aria-describedby="emailHelp" placeholder="Enter your Location"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail">{lg.comment}</label>
                    <textarea placeholder="Enter your comment" onChange={(event) => this.handleInputChange(event)}
                    name="message" value={this.state.message} className="form-control"  id="textmessage" rows="3"></textarea>
                </div>
                
                <button onClick={(event) => this.submit(event)} className="btn btn-primary">{lg.submit}</button>

                <br/>

            </form>

            <div className="comments" id="donation-comment-bloc">
                <h3>{lg.mostrecentcomments}</h3>
                {comments}
            </div>
        </div>
        <div className="col-md-4  hidden-xs">
            {this.renderSelectedProject(projects)}
        </div>
        
      </div>
    )
  }
}
export default ProjectDonation;

