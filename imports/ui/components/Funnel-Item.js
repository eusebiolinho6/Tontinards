import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link} from 'react-router-dom';

// Task component - represents a single todo item
export default class FunnelItem extends Component {
    render() {
        const{funnel} = this.props;
    return ( 
         <div className="col-md-4 subject-container">
            <div className="ibox">
                <div className="ibox-content product-box active">

                    <div className={!funnel.descriptionImageUrl?'product-imitation':''}>
                        {funnel&&funnel.descriptionImageUrl ? <img width="100%" src={funnel.descriptionImageUrl} /> : '[ Image ]'}
                    </div>
                    <div className="product-desc">
                                <span className="product-price">
                                    ${funnel&&funnel.price}
                                </span>
                        <small className="text-muted">Category</small>
                        <Link to={{pathname:'/funnels/'+funnel._id._str+'/details' }} className="product-name"> {funnel&&funnel.industry}</Link>

                        <div className="small m-t-xs">
                             {funnel&&funnel.description}
                        </div>
                        <div className="m-t text-righ">

                            <Link to={{pathname:'/funnels/'+funnel._id._str+'/details' }}className="btn btn-xs btn-outline btn-primary">Details <i className="fa fa-long-arrow-right"></i> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}