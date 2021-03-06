import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import {Categories,Industries} from '../../../api/collections'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import FunnelModalForm from '../funnels/Funnel-Modal-Form';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';


 export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            countries: []
        };
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
        })
    }

    render() {
        const{project, propclass, user} = this.props;
        if(project.currentAmount=="") project.currentAmount = 0;
        const percentage = Math.floor((project.currentAmount / parseInt(project.objectifAmount))* 100);
        const { city, phoneNumber, userId, objectifAmount, projectName, 
            currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, 
            description, _id, category, document, projectImage, teamImage, email,
            feedback, video, country, projectState } = project;
    return ( 
         <div className = {propclass == 'details' ? 'col-md-3 subject-container' : 'col-md-3 subject-container'}>
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
            <div className="ibox text-center">
                <div className="ibox-content product-box active">
                    <div className="imageContainer">
                        <div className={!project.img?'product-imitation':''}>
                        {/**Link to details */}
                        <Link to={{pathname:'/projects/'+project._id._str}}> {project&&project.projectImage ? <img className="projetImage" style={{borderBottom:'1px solid rgb(191, 194, 197)'}} width="100%" src={project.projectImage} /> : '[     ]'}
                            </Link>
                        </div>
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
                                        strokeWidth = {15}
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
                                            
                                        // Colors
                                        pathColor: `rgba(62, 152, 199})`,
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                        })}
                                    /> : ""
                                }
                            </div>
                        </div>
                        <div className="projectTitle">
                            {/**Link to details */}
                            <Link to={{pathname:'/projects/'+project._id._str}} className="product-name"> {project.projectName} </Link>
                        </div>
                        {projectState=="START CAMPAIGN"?
                            <h4 className="text-muted"> Raised: {project.currentAmount} Fcfa / Goal: {project.objectifAmount} Fcfa  </h4>
                            :""
                        }
                        <div className="m-t text-righ">
                            {user == "simpleUser" ?
                                projectState == "REFUSED" ?
                                    <span>POUBELLE</span> 
                                :
                                    <Link to={{pathname:'/projects/'+project._id._str}} className="btn btn-primary">Details</Link>
                            :
                            user == "admin" ?
                                projectState == "VALID" ?
                                    <div id="wrap-btn">
                                        <button onClick={this.editFunnel} className="btn btn-warning">Edit</button>
                                        <Link to={{pathname:'/projects/'+project._id._str}} className="btn btn-primary">Details </Link>
                                    </div>
                                :
                                    //this leads to the page where admin will validate or reject project
                                    <Link to={{pathname:'/projects/'+project._id._str}} className="btn btn-primary">Details </Link>
                            :
                                <span>
                                    <Link to={{pathname:'/projects/donate/'+project._id._str}} className="btn btn-primary donateBtn">Donate </Link>
                                    <Link to={{pathname:'/projects/'+project._id._str}} className="btn btn-outline btn-primary viewMoreBtn">Details </Link>
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}