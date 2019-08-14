import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Categories, Industries } from '../../../api/collections'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import FunnelModalForm from '../funnels/Funnel-Modal-Form';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import CurrencyFormat from 'react-currency-format';



export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            countries: []
        };
        this.notificationDOMRef = React.createRef();
    }

    componentWillReceiveProps() {
        this.loadCountry();
    }

    async loadCountry() {
        const countries = await axios.get('https://restcountries.eu/rest/v2/regionalbloc/au')
            .then(function (response) {
                // handle success
                return response;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        //console.log(countries.data[0].name);
        this.setState({ countries: countries.data });
    }

    editFunnel = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
        this.addNotification()
    }

    addNotification() {
        this.notificationDOMRef.current.addNotification({
          title: "EDIT PROJECT",
          message: "Project Succcessfully Edited!",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 2000 },
          dismissable: { click: true }
        });
    }

    render() {
        // var IntlMixin = ReactIntl.IntlMixin;
        // var FormattedNumber = ReactIntl.FormattedNumber;
        const { project, propclass, user } = this.props;
        if (project.currentAmount == "") project.currentAmount = 0;
        const percentage = Math.floor((project.currentAmount / parseInt(project.objectifAmount)) * 100);
        const { city, phoneNumber, userId, objectifAmount, projectName,
            currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise,
            description, _id, category, document, projectImage, teamImage, email,
            feedback, video, country, projectState } = project;

        //we extract the first 4 chars from the proectId to make the routeId 
        let routeId = project._id._str.slice(0,4);
        //we convert the project name to lower case and removeall spaces
        let routeProjectName = project.projectName.toLowerCase().replace(/\s/g, '-');
        let finalProjectRoute = routeProjectName;
        return (
            <div className={propclass == 'details' ? 'col-md-3 subject-container' : propclass == 'donation' ? 'col-md-10' : 'col-md-4    subject-container'}>
                <FunnelModalForm
                    userId={userId} isReview={true}
                    feedback={feedback} city={city}
                    categories={this.props.categories} id={_id}
                    category={category} phoneNumber={phoneNumber}
                    description={description} user={userId}
                    projectName={projectName} projectState={projectState}
                    currentAmount={currentAmount} teamName={teamName}
                    forWhoFoundsRaise={this.props.forWhoFoundsRaise}
                    oneForWhoFoundsRaise={oneForWhoFoundsRaise}
                    video={video} show={this.state.showModal} projectImage={projectImage}
                    teamImage={teamImage} document={document}
                    foundRaiseAs={this.props.foundRaiseAs} onefoundRaiseAs={onefoundRaiseAs}
                    email={email} objectifAmount={objectifAmount} country={country}
                    countries={this.state.countries} closeModal={this.closeModal} />
                    <ReactNotification ref={this.notificationDOMRef} />
                <div className="ibox text-center">
                    <div className="ibox-content product-box active">
                        <div className="imageContainer">
                            <div className={!project.img ? 'product-imitation' : ''}>
                                {/**Link to details */}
                                <Link  to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str }}> {project && project.projectImage ? <img className="projetImage" style={{ borderBottom: '1px solid rgb(191, 194, 197)' }} width="100%" src={project.projectImage} /> : '[     ]'}
                                </Link>
                            </div>
                            <div className="product-desc">
                                <div className="bigProgressBarContainer">
                                    <div className="circularProgessBarContainer">
                                        {/**When the project is in stage of START CAMPAIGN, we display the funds progress bar
                                   * When it is in stage of pending or REFUSED or VALID, we don't display */}
                                        {projectState == "START CAMPAIGN" ?
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                strokeWidth={15}
                                                styles={buildStyles({
                                                    // Rotation of path and trail, in number of turns (0-1)
                                                    rotation: 0,

                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',

                                                    // Text size
                                                    textSize: '25px',

                                                    // How long animation takes to go from one percentage to another, in seconds
                                                    pathTransitionDuration: 0.5,

                                                    // Can specify path transition in more detail, or remove it entirely
                                                    // pathTransition: 'none',

                                                    // Colors d6d6d6 #005991 
                                                    pathColor: `#005991`,
                                                    textColor: '#005991',
                                                    trailColor: '#d6d6d6',
                                                    backgroundColor: '#005991',
                                                })}
                                            /> : ""
                                        }
                                    </div>
                                </div>
                                <div className="projectTitle">
                                    {/**Link to details */}
                                    <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str }} className="product-name"> {project.projectName} </Link>
                                </div>
                                {projectState == "START CAMPAIGN" ?
                                    <h4 className="text-muted">
                                       <span>Raised :  </span> 
                                        <CurrencyFormat  value={project.currentAmount} displayType={'text'} thousandSeparator=" "/>
                                         Fcfa / 
                                        <span>Goal :  </span>
                                        <CurrencyFormat  value={project.objectifAmount} displayType={'text'} thousandSeparator=" "/>
                                         Fcfa 
                                     </h4>
                                    : ""
                                }
                                <div className="m-t text-righ">
                                    {user?
                                        user.profile.role == "user" ?
                                            projectState == "REFUSED" ?
                                                <span>POUBELLE</span>
                                                :
                                                <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str }} className="btn detailBtn">Details</Link>
                                        :
                                        user.profile.role == "admin" ?
                                            projectState == "VALID" ?
                                                <div id="wrap-btn">
                                                    <button onClick={this.editFunnel} className="btn btn-warning">Edit</button>
                                                    <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str }} className="btn  detailBtn">Details </Link>
                                                </div>
                                            :
                                                //this leads to the page where admin will validate or reject project
                                                <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str }} className="btn  detailBtn">Details </Link>
                                        :
                                            propclass == "donation" ?
                                                <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str  }} className="btn btn-outline viewMoreBtn detailBtn">Details</Link>

                                            :
                                                <span>
                                                    <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute + '/donate', projectId: project._id._str }} className="btn donateBtn">Donate </Link>
                                                    <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str  }} className="btn btn-outline viewMoreBtn detailBtn">Details </Link>
                                                </span>
                                        :
                                            <Link to={{ pathname: '/projects/' +routeId+'/'+ finalProjectRoute , projectId: project._id._str }} className="btn  detailBtn">Details </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}