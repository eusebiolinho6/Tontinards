import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import {Categories,Industries} from '../../../api/collections'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// Task component - represents a single todo item
 export default class FunnelItem extends Component {
    render() {
        const percentage = 66;
        const{funnel,propclass} = this.props;
        const industry = Industries.findOne({_id:funnel.industry}),
        category=Categories.findOne({_id:funnel.category});
    return ( 
         <div className = {
             propclass == 'details' ? 'col-md-3 subject-container' : 'col-md-4 subject-container'}>
            <div className="ibox">
                <div className="ibox-content product-box active">

                    <div className={!funnel.image?'product-imitation':''}>
                    <Link to={{pathname:'/funnels/'+funnel._id._str}}> {funnel&&funnel.image ? <img style={{borderBottom:'1px solid rgb(191, 194, 197)'}} width="100%" src={funnel.image} /> : '[     ]'}
                        </Link>
                    </div>
                    <div className="product-desc">
                        {funnel&&!Number(funnel.price)&& <span className="product-price">
                        FREE</span>}
                        <div className="row">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                        </div>
                        <Link to={{pathname:'/funnels/'+funnel._id._str}} className="product-name"> {funnel.title}</Link>
                        <h5 className="text-muted">{industry&&industry.name||'No Industry'}  {/**category&&category.name||'No Category'*/}</h5>
                        <div className="m-t text-righ">

                            <Link to={{pathname:'/funnels/'+funnel._id._str }} className="btn btn-outline btn-primary">Details <i className="fa fa-long-arrow-right"></i> </Link>
                            <a  href="" type="submit" className="btn-lg btn-primary addprojectBtn">Add Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}