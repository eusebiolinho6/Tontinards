import React, { Component } from 'react';

import Moment from 'react-moment';

import 'moment-timezone';

import {Link,Redirect} from 'react-router-dom';

import AwesomeSlider from 'react-awesome-slider';

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';

import 'react-awesome-slider/dist/styles.css';

import Input from '../../globalComponents/Input';
import {Meteor} from 'meteor/meteor';
import TextArea from '../../globalComponents/Textarea';
import 'react-awesome-slider/dist/styles.css';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {Categories, FoundRaiseAs, Funnels ,ForWhoFoundsRaise} from '../../../api/collections';
import CurrencyFormat from 'react-currency-format';
import {toObjectId} from '../../../utilities/';
import detailPageFr from '../../../../traduction/detailPage/fr.json' ;
import detailPageEn from '../../../../traduction/detailPage/en.json';
import Footer from '../../globalComponents/Footer'

let lang = localStorage.getItem('lang')
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
        this.notificationDOMRef = React.createRef();
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

    componentWillMount = () => {
        console.log(this.props);
        // this.props.navigation.navigate('Details', {
        //     itemId: 86,
        //     otherParam: 'anything you want here',
        //   });
    }

    /**
     * 
     * @goal change the projectState of the current project 
     * @returns void
     * @Author Ranyl & roland
     */
    setProjectState = ()=>{
        const {project,user}= this.props;
                
        if(user.profile.role == 'admin' && project.projectState == 'PENDING'){

            this.setState({ 
                hideButton: false,
            })
            Funnels.update({_id:toObjectId(project._id._str)},{$set:{projectState: "VALID"}});
            lang == 'fr'?
                this.addNotification("Projet Validé!")
                :
                this.addNotification("Project Validated!");

         }else if(user.profile.role == 'admin' && project.projectState == 'VALID'){

            this.setState({
                hideButton: true,
            })
            Funnels.update({_id:toObjectId(project._id._str)},{$set:{projectState: "START CAMPAIGN"}})
            // send mail to the project owner
            const projectData = {
                owner: project.userId.username,
                name: project.projectName,
                link: "http://tontinards.biz/user/campaigns"
            };

            lang == 'fr'?
              this.addNotification("Campagne debutée avec succès!")
            :
             this.addNotification("Campaign started successfully!");

            Meteor.call("sendEmail",
                project.userId.emails[0].address,
                "Tontinards",
                "Your campaign is started",
                projectData,
                "campaign-started.html"
            );
         }else{

            return 'all right reserved to admin';
        }
    }

    addNotification = (message) => {
        let title = 'ETAT DU PROJECT';
        lang == 'fr'?
            title = 'ETAT DU PROJECT'
            :
            title = "PROJECT STATE"
        this.notificationDOMRef.current.addNotification({
          title: title,
          message: message,
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 2000 },
          dismissable: { click: true }
        });
    }


    setProjectStateToRefused = ()=>{
        const {project,user}= this.props;
        if(user.profile.role == 'admin' && project.projectState == 'PENDING'){
           
            Funnels.update({_id:toObjectId(project._id._str)},{$set:{projectState: "REFUSED"}});
            lang == 'fr'?
              this.addNotification("Projet rejetté avec succès!")
            :
             this.addNotification("Project Refused Successsfully!");

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
        let lg = detailPageFr;
        let lang = localStorage.getItem('lang')
          lang == 'fr'?
              lg = detailPageFr
              :
              lg = detailPageEn;
              
        const {project,user}= this.props;
        console.log(project);
        console.log(user);
        const category = Categories.findOne({_id:project&&project.category}); 
        if(project.currentAmount=="") project.currentAmount = 0;
        const percentage = Math.floor((project.currentAmount / parseInt(project.objectifAmount))* 100);
        // foundRaiseAs = FoundRaiseAs.findOne({_id: toObjectId(project.onefoundRaiseAs._str)});
        // foundRaiseAs = FoundRaiseAs.findOne({_id:project&&project.onefoundRaiseAs});
        // const forWhoFoundsRaise = ForWhoFoundsRaise.findOne({_id:project&&project.oneForWhoFoundsRaise});
         //we extract the first 4 chars from the proectId to make the routeId 
         let routeId = project._id._str.slice(0,4);
         //we convert the project name to lower case and removeall spaces
         let routeProjectName = project.projectName.toLowerCase().replace(/\s/g, '-');
         let finalProjectRoute = routeProjectName;
 
        return (
            <div className="container" id="projectdetails">
                <ReactNotification ref={this.notificationDOMRef} />
                <div className="row">
                    <div className="col-sm-12 col-md-8 left">
                        <div className="infos">
                            {/* For Team */}
                            {project.teamImage ?
                                // project.teamImage.length > 0 ?
                                    <AwesomeSlider bullets={false}>
                                        <div data-src={project.projectImage} />
                                        <div data-src={project.teamImage} />
                                    </AwesomeSlider>
                                // :
                            :        
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
                                        className={this.state.story ? "story btn1 active-content": "story btn1"}>{lg.story}</h3>
                                    {
                                        user ?
                                        <h3 
                                            onClick={this.toggleContent}
                                            className={!this.state.story ? "statement btn1 active-content": "statement btn1"}>{lg.reviews}</h3>:null
                                    }
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
                            {/* <div className="form-content">
                             <form className="input__form" onSubmit={()=>this.handleSubmit}>
                                <div className="form-group">
                                    <textarea placeholder="Enter your message" className="form-control" onChange={(e) => this.setState({message: e.target.value})} id="textmessage" rows="3"></textarea>
                                </div>
                                <button className="btn send-btn" type="submit">Send</button>
                             </form>
                            </div> */}
                            <div>
                              
                        </div>
                        </div>
                       
                    </div>

                    <div className="col-sm-12 col-md-4 right">
                        <div className="infos">
                            <div className="otherinfos0">
                                <div className="item">
                                    <h4><strong>{lg.Objective}</strong></h4>
                                    
                                    <h4>
                                        <CurrencyFormat  value={project.objectifAmount} displayType={'text'} thousandSeparator=" "/> FCFA
                                    </h4>
                                </div>
                                <div className="item">
                                    <h4><strong>{lg.currentAmount}</strong></h4>
                                    <h4>
                                        <CurrencyFormat  value={project.currentAmount} displayType={'text'} thousandSeparator=" "/> FCFA
                                    </h4>
                                </div>
                                {/* <h4><strong>OBJECTIVE: </strong> {project.objectifAmount} FCFA</h4>
                                <h4><strong>CURRENT AMOUNT: </strong> {project.currentAmount} FCFA</h4> */}
                            </div>        
                            <div className="otherinfos">
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <div>
                                        <p>Campaign Lauched <Moment fromNow>{project.createdAt}</Moment>.</p>
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
                                                pathColor: `#005dac`,
                                                textColor: '#231F20',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="socialBtn">
                                {user ? 
                                    user.profile.role == 'admin' ?
                                        null
                                    :  
                                    //user._id == user._id ?
                                    user._id == project.userId._id ?
                                        ""
                                        :
                                        <Link to={{pathname:'/projects/'+routeId+'/'+ finalProjectRoute + '/donate', projectId: project._id._str}} className="btn st donationBtn">{lg.donateBtn} </Link>
                                    :
                                    null
                                }
                                    {/* <button className="fb btn">Partager sur Facebook</button> */}
                                    {
                                        user ? 
                                            user.profile.role == 'admin'&& project.projectState == 'PENDING' ?                               
                                                <button className="st btn btn-lg validateBtn" onClick={()=>this.setProjectState()}>{lg.Validate}</button>                                
                                            : '' 
                                        : 
                                        <Link to={{pathname:'/projects/'+routeId+'/'+ finalProjectRoute + '/donate', projectId: project._id._str}} className="btn st donationBtn">{lg.donateBtn} </Link>
                                    }
                            {
                                user ? 
                                user.profile.role == 'admin'&& project.projectState == 'PENDING'  
                               ?
                                <button className="btn btn-danger mt-3 refuse" onClick={()=>this.setProjectStateToRefused()}>{lg.Refuse}</button>       
                                :
                                 '' : null
                              }

                            {
                                user ? 
                                user.profile.role == 'admin'&& project.projectState == 'VALID'  && this.state.hideButton == true
                                ?
                                <button className="st btn btn-lg startCampaignBtn" onClick={()=>this.setProjectState()}>{lg.StartCampaign}</button> 
                                    :
                                    '' : null
                              }
                                </div>
                            </div>
                        </div>
                        <div className="video">
                            {
                                project.video ? 
                                <video width="100%" height="100%" poster="/images/img2.png" controls>
                                    <source src={project.video} type="video/mp4"></source>
                                    <source src={project.video} type="video/ogg"></source>
                                </video>: null
                            }
                        </div>
                        <div className="date">
                            <p>Creation Date: <b>
                                <Moment parse="YYYY-MM-DD">
                                    {project.createdAt}
                                </Moment></b>
                            </p>
                        </div>
                        <div className="profile">
                            <img src="/images/user.png" />
                            <div className="profile-infos">
                                <div>
                                    <p>{project.userId.profile ? project.userId.profile.name ? project.userId.profile.name: project.userId.username : project.userId.username}</p>
                                    <p>{project.country}</p>
                                </div>
                                <div>
                                    <p>{project.phoneNumber}</p>
                                </div>
                            </div> 
                        </div>
                        <div className="messages">
                            <a className="btn readproject" href={project.document}>{lg.readDetailedBtn}</a>                            
                        </div>
                        <div className="messages">
                            <div className="allmessages">
                                <h4>{lg.donationMessage}</h4>
                            </div>
                            <div className="messages-items">
                                {!project.donators ?
                                    <h5>{lg.donationsubMessage}.</h5>:
                                    <div className="alldons">
                                        {project.donators.map((don) => {
                                            if(don.validated) {
                                                return (
                                                    <div className="messages-item">
                                                        <h5>{don.firstName}: <CurrencyFormat  value={don.amount} displayType={'text'} thousandSeparator=" "/> FCFA</h5><hr/>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                }
                            </div>
                        </div>

                       

                        {/* <div className="messages">
                            <div className="allmessages">
                                <h4>Inbox Messages</h4>
                                <span>5</span>
                            </div>
                        </div>  */}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
       
}
export default ProjectDetails;