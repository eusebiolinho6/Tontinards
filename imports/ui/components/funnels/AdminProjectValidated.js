import React, { Component, Fragment } from 'react';
import FunnelItem from './Funnel-Item';
import AdminProjectItemPending from './AdminProjectItemPending';
import AdminProjectItemValidated from './AdminProjectItemValidated';
import ModalSubscription from './../payments/ModalSubscription';
import { checkRole } from '../../../utilities';
// App component - represents the whole app
class AdminProject extends Component {
    constructor(props) {
        super(props);
        this.state={show:false}
    }
    closeModal() {
        this.setState({
            show: false
        });
    }
    renderFunnels(){
      const {funnels, propclass} = this.props;
      const fakeProjectsPending = [
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
          "currentAmount": "200000",
          "goal": "10000000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Two",
          "currentAmount": "50000",
          "goal": "500000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Three",
          "currentAmount": "2100000",
          "goal": "2000000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Four",
          "currentAmount": "17500975",
          "goal": "63000000"
        }
      ]
      const fakeProjectsValidated = [
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
          "currentAmount": "200000",
          "goal": "10000000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Two",
          "currentAmount": "50000",
          "goal": "500000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Three",
          "currentAmount": "2100000",
          "goal": "2000000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Four",
          "currentAmount": "17500975",
          "goal": "63000000"
        }
      ]
      const fakeProjectsRefused = [
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number One Project Number One Project Number One Project Number One Project Number One",
          "currentAmount": "200000",
          "goal": "10000000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Two",
          "currentAmount": "50000",
          "goal": "500000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Three",
          "currentAmount": "2100000",
          "goal": "2000000"
        },
        {
          "img": "/images/img4.PNG",
          "projectTitle": "Project Number Four",
          "currentAmount": "17500975",
          "goal": "63000000"
        }
      ]

       return fakeProjectsPending.map((project, index)=>(
            <AdminProjectItemValidated key={index} project={project} />
        ))
      //  return funnels.map((funnel)=>(
      //       <FunnelItem key={funnel._id} funnel={funnel} />
      //   ))
    }
    render() {
        const {show}=this.state;
        const{funnels, userId}=this.props,
        isAuthorized = checkRole(['admin', 'paid'], userId);

        return (
        <div style={{width: '100%', paddingTop: '0px'}} className="wrapper wrapper-content animated fadeInRight">
        {!isAuthorized&&<div>
            <ModalSubscription userId={userId} show={show} closeModal={()=>this.closeModal()} />
        {/* <div className="box-offer col-md-12">
            <div className="row">
              <div className="col-md-8 col-xs-12 cell">
                <h2>PAY 9$ PER MONTH AND GET A FULL ACCESS</h2>
                <p>
                Subscribe to our billing plan on <strong>PAYPAL</strong> with only 7$ per month and access to images, documents and videos of all funnels on the platform.
                </p>
                <p>
                Don 't have enought funds? you can access to images of all funnels, you can also access to images, documents and videos of the free funnels.
                </p>

              </div>
              <div className="col-md-2 col-xs-12 cell">
                <button type="button" onClick={()=> this.setState({show:true})} className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div> */}
        </div>}
        
        <div id="funnelListkamer" className="row">
        {this.renderFunnels()}
        </div>

</div>
        )
    }
}

export default AdminProject;