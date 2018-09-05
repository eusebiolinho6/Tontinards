import React, { Component, Fragment } from 'react';
import {Categories, Industries} from '../../api/funnels/methods';
// App component - represents the whole app
class FunnelDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {funnel, funnels}= this.props;
        const industry = Industries.findOne({_id:funnel&&funnel.industry}),
            category = Categories.findOne({_id:funnel&&funnel.category});
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
         <div className="col-lg-12">
            <div className="ibox product-detail">
                <div className="ibox-content">

                    <div className="row">
                        <div className="col-md-5">
                                    <div className={funnel&&!funnel.descriptionImageUrl?'image-imitation':''}>
                                        {funnel&&funnel.descriptionImageUrl ? <img width='100%' src={funnel&&funnel.descriptionImageUrl} /> : '[ Image ]'}
                                    </div>
                        </div>
                        <div className="col-md-7">

                            <h2 className="font-bold m-b-xs">
                                {funnel&&funnel.title}
                            </h2>
                            <div className="m-t-md">
                                <h2 className="product-main-price">${funnel&&funnel.price} <small className="text-muted">Exclude Tax</small> </h2>
                            </div>
                            <hr/>

                            <dl className="small m-t-md">
                                <dt>Industry: {industry&&industry.name||'No industry'} </dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Category: {category&&category.name||'No category'} </dt>
                                <dd>A description list is perfect for defining terms.</dd>
                            </dl>

                            <h4>Description</h4>

                            <div className="small text-muted">
                               {funnel&&funnel.description}
                            </div>
                            
                            <hr />

                            <div>
                                <div className="btn-group">
                                    <button style={{margin:'1px'}} className="btn btn-primary btn-sm"><i className="fa fa-cart-plus"></i> Images</button>
                                    <button style={{margin:'1px'}} className="btn btn-primary btn-sm "><i className="fa fa-cart-plus"></i> Images and Pdf</button>
                                    <button style={{margin:'1px'}} className="btn btn-primary btn-sm "><i className="fa fa-cart-plus"></i> Images, Pdf and Videos</button>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
                <div className="ibox-footer">
                            <span className="pull-right">
                                Full stock - <i className="fa fa-clock-o"></i> 14.04.2016 10:04 pm
                            </span>
                    The generated Lorem Ipsum is therefore always free
                </div>
            </div>

        </div>
        </div>
        </div>
        )
    }
}

export default FunnelDetails;