import React, {
    Component
} from 'react';
import { Meteor } from 'meteor/meteor';

// Task component - represents a single todo item
export default class FunnelItem extends Component {

    render() {

    return ( 
         <div className="col-md-4">
            <div className="ibox">
                <div className="ibox-content product-box active">

                    <div className="product-imitation">
                        [ INFO ]
                    </div>
                    <div className="product-desc">
                                <span className="product-price">
                                    $10
                                </span>
                        <small className="text-muted">Category</small>
                        <a href="#" className="product-name"> Product</a>



                        <div className="small m-t-xs">
                            Many desktop publishing packages and web page editors now.
                        </div>
                        <div className="m-t text-righ">

                            <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}