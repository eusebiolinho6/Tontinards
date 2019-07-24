import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import {Categories,Industries} from '../../../api/collections'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


 export default class ProjectItem extends Component {
    render() {
        const{project, propclass, stateOfProject, user} = this.props;
        console.log(project);
        if(project.currentAmount=="") project.currentAmount = 0;
        const percentage = Math.floor((project.currentAmount / parseInt(project.objectifAmount))* 100);
        // const industry = Industries.findOne({_id:project.industry}),
        // category=Categories.findOne({_id:project.category});
    return ( 
         <div className = {
             propclass == 'details' ? 'col-md-3 subject-container' : 'col-md-3 col-sm-6 subject-container'}>
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
                                {/**When the project is in stage of campaign, we display the funds progress bar
                                   * When it is in stage of pending or refused or validated, we don't display */}
                                {stateOfProject == "campaign" ?
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
                                    />
                                    :
                                    ""
                                }
                            </div>
                        </div>
                        <div className="projectTitle">
                            {/**Link to details */}
                            <Link to={{pathname:'/projects/'+project._id._str}} className="product-name"> {project.projectName} </Link>
                        </div>
                        {stateOfProject=="campaign"?
                            <h4 className="text-muted"> Raised: {project.currentAmount} Fcfa / Goal: {project.objectifAmount} Fcfa  </h4>
                            :""
                        }
                        <div className="m-t text-righ">
                            {user == "simpleUser" ?
                                stateOfProject == "refused" ?
                                    <span>POUBELLE</span> 
                                :
                                    <Link to={{pathname:'/projects/'+project._id._str}} className="btn btn-primary">Details</Link>
                            :
                            user == "admin" ?
                                stateOfProject == "validated" ?
                                    <Link to={{pathname:'#'}} className="btn btn-warning">Edit</Link>
                                :
                                    //this leads to the page where admin will validate or reject project
                                    <Link to={{pathname:'/projects/'+project._id._str}} className="btn btn-primary">Details </Link>
                            :
                                <span>
                                    <Link to={{pathname:'/project/donate'}} className="btn btn-primary donateBtn">Donate </Link>
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