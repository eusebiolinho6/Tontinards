import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import {Categories} from '../../../api/collections'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Switch from "react-switch";
import Child from './Child';
// const percentage = 60;
// Task component - represents a single todo item
 export default class AdminProjectItem extends Component {
    
    constructor() {
        super();
        this.state = { 
            checked: false,
            active: true,
         };

        this.handleChange = this.handleChange.bind(this);
    }
    
    
   /**
 * 
  * @param {} checked is the object that permit to activate or desactivate toggle
  * @param {} checked is the object that permit to show or hide child component

 */
    handleChange(checked) {
        this.setState({ 
            checked,
            active: !this.state.active
         });
      }

    // handleClick() {
    //     this.setState({
    //         active: !this.state.active
    //     });
    // }
    


    render() {
        const{project,propclass} = this.props;
        const percentage = Math.floor((project.currentAmount / project.goal)* 100);
        console.log(percentage);
        const category = Categories.findOne({_id:project.category});
    return ( 
         <div className = {
             propclass == 'details' ? 'col-md-3 subject-container' : 'col-md-3 subject-container'}>
            <div className="ibox text-center">
                <div className="ibox-content product-box active">
                    <div className="imageContainer">
                        <div className={!project.img?'product-imitation':''}>
                        <Link to={{pathname:'/funnels/'}}> {project&&project.img ? <img className="projetImage" style={{borderBottom:'1px solid rgb(191, 194, 197)'}} width="100%" src={project.img} /> : '[     ]'}
                            </Link>
                        </div>
                    </div>
                    <div className="product-desc">

                        <div className="projectTitle">
                            <Link to={{pathname:'/funnels/'}} className="product-name"> {project.projectTitle}</Link>
                        </div>
                       
                        <label htmlFor="normal-switch">
                                {this.state.active && <Child />}
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    id="normal-switch"
                                />
                            </label>

                        {/* <div>
                            {this.state.active && <Child />}

                            <button type="button" onClick={this.handleClick}>
                                Toggle
                            </button>

                         </div> */}
                        {/* <h4 className="text-muted">Raised: {project.currentAmount} Fcfa / Goal: {project.goal} Fcfa </h4> */}
                        {/* <div className="m-t text-righ">

                            <Link to={{pathname:'/funnels/'}} className="btn btn-primary donateBtn">Donate </Link>
                            <Link to={{pathname:'/funnels/'}} className="btn btn-outline btn-primary viewMoreBtn">Details </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        );
       
    }
}