import React, { Component } from 'react';

import Moment from 'react-moment';

import 'moment-timezone';

import {Link,Redirect} from 'react-router-dom';

import AwesomeSlider from 'react-awesome-slider';

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';

import 'react-awesome-slider/dist/styles.css';

import Input from '../../globalComponents/Input';
import TextArea from '../../globalComponents/Textarea';
import {Categories, FoundRaiseAs, Funnels ,ForWhoFoundsRaise} from '../../../api/collections';
import {toObjectId} from '../../../utilities/';

// App component - represents the whole app
class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: [],
            story: true,
            hideButton: true
        }
    }


    /**
 * 
 * @goal submit comments about the current project
 * @returns void
 * @Author Ranyl
 */
    saveComment=()=>{
        const {message}=this.state;
        let data = {message};
        data._id = toObjectId(null);
        Funnels.update({_id: toObjectId(project._id._str) }, { $push: { messages:  data.message } });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.saveComment()
    }

            /**
     * 
     * @goal change the projectState of the current project 
     * @returns void
     * @Author Ranyl & roland
     */
    setProjectState = ()=>{
        const {project,user}= this.props;
        console.log(user);
        if(user.profile.role == 'admin' && project.projectState == 'PENDING'){

            this.setState({ 
                hideButton: false,
            })
            Funnels.update({_id:toObjectId(project._id._str)},{$set:{projectState: "VALID"}})

         }else if(user.profile.role == 'admin' && project.projectState == 'VALID'){

            this.setState({
                hideButton: true,
            })
            Funnels.update({_id:toObjectId(project._id._str)},{$set:{projectState: "START CAMPAIGN"}})

         }else{

            return 'all right reserved to admin';
        }
    }


    setProjectStateToRefused = ()=>{
        const {project,user}= this.props;
        if(user.profile.role == 'admin' && project.projectState == 'PENDING'){
           
            Funnels.update({_id:toObjectId(project._id._str)},{$set:{projectState: "REFUSED"}})

         }else{

            return 'all right reserved to admin';
        }
    }

    editProject=()=>{
        console.log('this project has been edited !!')
    }





    toggleContent = () => {
        this.setState({story: !this.state.story})
    }

    render() {
        const {project,user}= this.props;
        const category = Categories.findOne({_id:project&&project.category}); 
        if(project.currentAmount=="") project.currentAmount = 0;
        const percentage = Math.floor((project.currentAmount / parseInt(project.objectifAmount))* 100);
        // foundRaiseAs = FoundRaiseAs.findOne({_id: toObjectId(project.onefoundRaiseAs._str)});
        // foundRaiseAs = FoundRaiseAs.findOne({_id:project&&project.onefoundRaiseAs});
        // const forWhoFoundsRaise = ForWhoFoundsRaise.findOne({_id:project&&project.oneForWhoFoundsRaise});
        
        return (
            <div className="container" id="projectdetails">
                <div className="row">
                    <div className="col-sm-12 col-md-8 left">
                        <div className="infos">
                            {/* For Team */}
                            {
                                project.teamImage.length > 0 ?
                                    <AwesomeSlider bullets={false}>
                                        <div data-src={project.projectImage} />
                                        <div data-src={project.teamImage} />
                                    </AwesomeSlider>:
                                    <img src={project.projectImage} />
                            }
                            {/* For Team */}
                            <div className="otherinfos">
                                <h2>{project.projectName}</h2>
                                <h5>{project.teamName.length > 0 ? "Team Name: "+project.teamName : null}</h5>
                                <hr/>
                                {/* <div className="founds">
                                    <h4>Found Raise As</h4>
                                    <h4>For Who Founds Raise</h4>
                                </div> */}
                                {/* <div className="shareButtons">
                                    <div className="socialBtn">
                                        <button className="fb btn">Share on Facebook</button>
                                        <button className="tw btn">Share on Twitter</button>
                                    </div>
                                    <p>Be the first person to share</p>
                                </div>
                                <hr/> */}
                            </div>

                            <div className="moreinfos">
                                <div className="headers">
                                    <h3 
                                        onClick={this.toggleContent}
                                        className={this.state.story ? "story btn1 active-content": "story btn1"}>Story</h3>
                                    <h3 
                                        onClick={this.toggleContent}
                                        className={!this.state.story ? "statement btn1 active-content": "statement btn1"}>Reviews</h3>
                                </div>
                                <div className="content">
                                    {
                                        this.state.story ?
                                        <div className="text">
                                            <div className="text description" dangerouslySetInnerHTML={{__html: project&&project.description}} />
                                        </div>:
                                        <div className="reviews">
                                        {
                                            Meteor.userId() == project.userId._id ||  Meteor.user().profile.role == "admin"?
                                            <p>{project.feedback.length > 0 ? 
                                                <div className="text description" dangerouslySetInnerHTML={{__html: project.feedback}} />  : null}</p>:
                                            null
                                        }
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="form-content">
                             <form className="input__form" onSubmit={()=>this.handleSubmit}>
                                <div className="form-group">
                                    <textarea placeholder="Enter your message" className="form-control" onChange={(e) => this.setState({message: e.target.value})} id="textmessage" rows="3"></textarea>
                                </div>
                                <button className="btn send-btn" type="submit">Send</button>
                             </form>
                            </div>
                            <div>
                              
                        </div>
                        </div>
                       
                    </div>

                    <div className="col-sm-12 col-md-4 right">
                        <div className="infos">
                            <div className="otherinfos0">
                                <div className="item">
                                    <h4><strong>OBJECTIVE: </strong></h4>
                                    <h4>{project.objectifAmount} FCFA</h4>
                                </div>
                                <div className="item">
                                    <h4><strong>CURRENT AMOUNT: </strong></h4>
                                    <h4>{project.currentAmount} FCFA</h4>
                                </div>
                                {/* <h4><strong>OBJECTIVE: </strong> {project.objectifAmount} FCFA</h4>
                                <h4><strong>CURRENT AMOUNT: </strong> {project.currentAmount} FCFA</h4> */}
                            </div>        
                            <div className="otherinfos">
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <div>
                                        <p>Campagne crée depuis <Moment fromNow ago>{project.createdAt}</Moment>.</p>
                                    </div>
                                    <div className="progress">
                                        <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            strokeWidth = {15}
                                            styles={buildStyles({
                                                rotation: 0,
                                                strokeLinecap: 'butt',
                                                textSize: '20px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `#18a689`,
                                                textColor: '#333',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="socialBtn">
                                    <Link to={{pathname:'/projects/donate/'+project._id._str}} className="btn btn-primary st">Donate </Link>
                                    {/* <button className="fb btn">Partager sur Facebook</button> */}
                                             {
                              user.profile.role == 'admin'&& project.projectState == 'PENDING' 
                              ?                               
                               <button className="st btn btn-lg" onClick={()=>this.setProjectState()}>Validate</button>                                
                                :
                                 '' 
                              }
                            {
                              user.profile.role == 'admin'&& project.projectState == 'PENDING'  
                               ?
                                <button className="btn btn-danger mt-3 refuse" onClick={()=>this.setProjectStateToRefused()}>Refuse</button>       
                                :
                                 '' 
                              }

                            {
                              user.profile.role == 'admin'&& project.projectState == 'VALID'  && this.state.hideButton == true
                              ?
                               <button className="st btn btn-lg" onClick={()=>this.setProjectState()}>Start campaign</button> 
                                :
                                 '' 
                              }

                            {
                              user.profile.role == 'admin' && project.projectState == 'VALID' && this.state.hideButton == true
                              ?
                               <button className="fb btn" onClick={()=>this.editProject()}>Edit</button> 
                                :
                                 '' 
                              }
                                </div>
                            </div>
                        </div>
                        <div className="video">
                            {
                                project.projectVideo ? 
                                <video width="100%" height="100%" poster="/images/img2.png" controls>
                                    <source src="movie.mp4" type="video/mp4"></source>
                                    <source src="movie.ogg" type="video/ogg"></source>
                                </video>: null
                            }
                        </div>
                        <div className="date">
                            <p>Date de création : <b>
                                <Moment parse="YYYY-MM-DD">
                                    {project.createdAt}
                                </Moment></b>
                            </p>
                        </div>
                        <div className="profile">
                            <img src="/images/user.png" />
                            <div className="profile-infos">
                                <div>
                                    <p>{project.userId.profile ? project.userId.profile.name: project.userId.username}</p>
                                    <p>{project.country}</p>
                                </div>
                                <div>
                                    <p>{project.phoneNumber}</p>
                                </div>
                            </div> 
                        </div>
                        <div className="messages">
                            <div className="allmessages">
                                <h4>Donations</h4>
                            </div>
                            <div className="messages-items">
                                {!project.donators ?
                                    <h5>Aucun don pour l'instant. Participez au lancement de cette campagne et devenez le premier donateur.</h5>:
                                    <div className="alldons">
                                        {project.donators.map((don) => {
                                            return (
                                                <div className="messages-item">
                                                    <h5>{don.firstName}: {don.amount} FCFA</h5><hr/>
                                                </div>
                                            );
                                        })}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="messages">
                            <div className="allmessages">
                                <h4>Inbox Messages</h4>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectDetails;