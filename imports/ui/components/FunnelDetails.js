import React, { Component, Fragment } from 'react';
import {Categories, Industries} from '../../api/funnels/methods';
import {asyncMethodCall} from '../../utilities/shared'
import {Meteor} from 'meteor/meteor'
import CustomAlert from './CustomAlert';
import DownloadComponent from './DownloadComponent'
// App component - represents the whole app
class FunnelDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:'',
            message:'',
            type:'danger'
        }
    }
    clearMessage(){
        this.setState({message:''});
    }
    downloadFile(e, field){
    e.preventDefault();
    const {funnel, user}= this.props;
    if(!user) {
       return this.setState({message:"You are not  authorized", type: 'danger'});
    }
    asyncMethodCall('checkRoles', {userId:user._id}).then((result)=>{
    if (funnel[field]) {
        const file_path = funnel[field],
            a = document.createElement('A');
        a.href = file_path;
        a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        this.setState({
            message: 'This field does not exists in funnel'
        })
     }
    }).catch((er)=>{
        return this.setState({
            message: "You are not  authorized",
            type: 'danger'
        });
    })
    }
    render() {
        const {funnel, funnels,user}= this.props;
        const {message,type, url}=this.state;
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
                            {/**<div className="m-t-md">
                                <h2 className="product-main-price">${funnel&&funnel.price} <small className="text-muted">Exclude Tax</small> </h2>
                            </div>*/}
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
                                    <button style={{margin:'1px'}} type="button" onClick={(e)=>this.downloadFile(e, 'funnelImageUrl')} className="btn btn-primary btn-sm"><i className="fa fa-download"></i> IMAGE</button>
                                    <button style={{margin:'1px'}} type="button" onClick={(e)=>this.downloadFile(e,'funnelPdfUrl')} className="btn btn-primary btn-sm "><i className="fa fa-download"></i> PDF</button>
                                    <button style={{margin:'1px'}} type="button" onClick={(e)=>this.downloadFile(e, 'funnelVideoUrl')} className="btn btn-primary btn-sm "><i className="fa fa-download"></i> VIDEO</button>
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
                {message&&<CustomAlert clearMessage={()=> this.clearMessage()} text={message} type={type} ttl={5} />}
            </div>

        </div>
        </div>
        </div>
        )
    }
}

export default FunnelDetails;