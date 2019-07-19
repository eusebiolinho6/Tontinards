import React, { Component} from 'react';
import {asyncMethodCall} from '../../../utilities/'
import { withTracker } from 'meteor/react-meteor-data';
import CustomAlert from '../../globalComponents/CustomAlert';

// Task component - represents a single todo item
 export default class PlanItem extends Component {
constructor(props) {
    super(props);
    this.state={
        isLoading:false,
        message:'',
        type:''
    }
}

clearMessage() {
    this.setState({
        message: ''
    });
}

initiateAgreement(e) {
    e.preventDefault();
    const {
        userId,plan
    } = this.props;
    name = plan&&plan.name;
    if(!userId) return this.setState({message: 'Please log in to subscribe'});
    this.setState({isLoading:true});
    asyncMethodCall('initiateAgreement', {
        userId,
        name
    }).then((result) =>{
        let links = result && result.links || [];
        if (links) {
            links.forEach(function (link) {
                if (link.rel === "approval_url") window.location = link.href;
            });
        }
    }).catch((er)=> {
        this.setState({
            isLoading: false,
            type: 'danger',
            message: typeof er.error == "object" ? 'Initialisation fails, please try again' : er.error || 'Initialisation fails, please try again',
        });
    });
}
    render() {
        const{plan} = this.props;
    const {isLoading,message, type}=this.state;
    return ( 
         <div className = 'col-md-4 subject-container'>
            <div className="ibox">
                <div className="ibox-content product-box active">

                    <div className='product-imitation'>
                    [ Image ]
                    </div>
                    <div className="product-desc">
                                <span className="product-zipCode">
                                    ${plan&&plan.zipCode}/MONTH</span>
                        <a href="#" className="product-name"><span>{plan?plan.name:''}</span> </a>
                        <div className="m-t-xs">
                             {plan&&plan.description}
                        </div>
                        <div className="m-t text-righ">
                            <button disabled={isLoading} className="btn btn-sm btn-outline btn-primary" onClick={(e)=> this.initiateAgreement(e)}><span style={{color:"#1ab394"}} className="spec-span" >Subscribe{isLoading&&<i className="fa fa-spin fa-spinner"></i>} <i className="fa fa-long-arrow-right"></i></span> </button>
                        </div>
                    </div>
                </div>
            </div>
            {message&&<CustomAlert clearMessage={()=> this.clearMessage()} text={message}  type={type} ttl={5} />}
        </div>
        );
    }
}