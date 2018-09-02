import React, { Component, Fragment } from 'react';

// App component - represents the whole app
class FunnelDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {funnel}= this.props;
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
         <div className="col-lg-12">
            <div className="ibox product-detail">
                <div className="ibox-content">

                    <div className="row">
                        <div className="col-md-5">
                                    <div className="image-imitation">
                                        {funnel&&funnel.descriptionImageUrl ? <img src={funnel&&funnel.descriptionImageUrl} /> : '[ Image ]'}
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

                            <h4>Product description</h4>

                            <div className="small text-muted">
                               {funnel&&funnel.description}
                            </div>
                            <dl className="small m-t-md">
                                <dt>Differents type of payments</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt>Malesuada porta</dt>
                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                            </dl>
                            <hr />

                            <div>
                                <div className="btn-group">
                                    <button className="btn btn-primary btn-sm"><i className="fa fa-cart-plus"></i> Images</button>
                                    <button className="btn btn-white btn-sm"><i className="fa fa-cart-plus"></i> Images and Pdf</button>
                                    <button className="btn btn-white btn-sm"><i className="fa fa-cart-plus"></i> Images, Pdf and Videos</button>
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