import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import {Categories} from '../../../api/collections'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// const percentage = 60;
// Task component - represents a single todo item
 export default class FunnelItem extends Component {
    render() {
        const{project,propclass} = this.props;
        const percentage = Math.floor((project.currentAmount / project.goal)* 100);
        console.log(percentage);
        const category=Categories.findOne({_id:project.category});
    return ( 
         <div className = {
             propclass == 'whenDonating' ? 'col-md-3 subject-container' : 'col-md-3 subject-container'}>
            <div className="ibox text-center">
                <div className="ibox-content product-box active">
                    <div className="imageContainer">
                        <div className={!project.img?'product-imitation':''}>
                        <Link to={{pathname:'/funnels/'}}> {project&&project.img ? <img className="projetImage" style={{borderBottom:'1px solid rgb(191, 194, 197)'}} width="100%" src={project.img} /> : '[     ]'}
                            </Link>
                        </div>
                    </div>
                    <div className="product-desc">
                        <div className="bigProgressBarContainer">
                            <div className="circularProgessBarContainer">
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
                            </div>
                        </div>
                        <div className="projectTitle">
                            <Link to={{pathname:'/funnels/'}} className="product-name"> {project.projectTitle}</Link>
                        </div>
                        <h4 className="text-muted">Raised: {project.currentAmount} Fcfa / Goal: {project.goal} Fcfa </h4>
                        <div className="m-t text-righ">

                            <Link to={{pathname:'/funnels/'}} className="btn btn-primary donateBtn">Donate </Link>
                            <Link to={{pathname:'/funnels/'}} className="btn btn-outline btn-primary viewMoreBtn">Details </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
        //  <div className = {
        //      propclass == 'details' ? 'col-md-3 subject-container' : 'col-md-3 subject-container'}>
        //     <div className="ibox text-center">
        //         <div className="ibox-content product-box active">
        //             <div className="imageContainer">
        //                 <div className={!funnel.image?'product-imitation':''}>
        //                 <Link to={{pathname:'/funnels/'+funnel._id._str}}> {funnel&&funnel.image ? <img className="projetImage" style={{borderBottom:'1px solid rgb(191, 194, 197)'}} width="100%" src={funnel.image} /> : '[     ]'}
        //                     </Link>
        //                 </div>
        //             </div>
        //             <div className="product-desc">
        //                 {funnel&&!Number(funnel.price)&& <span className="product-price">
        //                     FREE</span>}
        //                 <div className="bigProgressBarContainer">
        //                     <div className="circularProgessBarContainer">
        //                         <CircularProgressbar
        //                             value={percentage}
        //                             text={`${percentage}%`}
        //                             strokeWidth = {15}
        //                             styles={buildStyles({
        //                             // Rotation of path and trail, in number of turns (0-1)
        //                             rotation: 0,
                                
        //                             // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        //                             strokeLinecap: 'butt',
                                
        //                             // Text size
        //                             textSize: '25px',
                                
        //                             // How long animation takes to go from one percentage to another, in seconds
        //                             pathTransitionDuration: 0.5,
                                
        //                             // Can specify path transition in more detail, or remove it entirely
        //                             // pathTransition: 'none',
                                        
        //                             // Colors
        //                             pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        //                             textColor: '#f88',
        //                             trailColor: '#d6d6d6',
        //                             backgroundColor: '#3e98c7',
        //                             })}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div className="projectTitle">
        //                     <Link to={{pathname:'/funnels/'+funnel._id._str}} className="product-name"> {funnel.title}</Link>
        //                 </div>
        //                 <h4 className="text-muted">Raised: 250000 Fcfa / Goal: 1000000 Fcfa I reallly think this is a very big big price relally realy learuul git oooh rounon roun on roun on rounon rounon</h4>
        //                 <div className="m-t text-righ">

        //                     <Link to={{pathname:'/funnels/'+funnel._id._str }} className="btn btn-primary donateBtn">Donate </Link>
        //                     <Link to={{pathname:'/funnels/'+funnel._id._str }} className="btn btn-outline btn-primary viewMoreBtn">Details </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // );
    }
}