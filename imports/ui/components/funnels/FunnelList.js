import React, { Component, Fragment } from 'react';
import FunnelItem from './Funnel-Item';
import ValidatedProjectItem from '../projects/Validated-Project-Item';
import ModalSubscription from './../payments/ModalSubscription';
import { checkRole } from '../../../utilities';
import ProjectItem from '../projects/ProjectItem';

const fakeProjects = [
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


// App component - represents the whole app
class FunnelList extends Component {
    constructor(props) {
        super(props);
        this.state={
          show:false,
          fakeProjects:fakeProjects
        }

    }
    closeModal() {
        this.setState({
            show: false
        });
    }

    /**
 * 
 * @param {Array} projects is the array of projects we will map to display each of them
 * @param {string} sop stands for State Of Projects, is the state of the projects ("pending", "validated", "Campaign" or "refused")
 * @returns rendered Components 
 * @Author Cindy and Junior
 */
  renderProjects(projects, sop){
    return projects.map((project, index)=>(
        <ProjectItem key={index} project={project} stateOfProject={sop} user="guest"/>
    ))
  }

      render() {
        const {show}=this.state;
        const{funnels, userId}=this.props,
        isAuthorized = checkRole(['user'], userId);
        console.log(funnels);

        return (
        <div style={{width: '100%', paddingTop: '0px'}} className="wrapper wrapper-content animated fadeInRight">
        {!isAuthorized&&<div>
            <ModalSubscription userId={userId} show={show} closeModal={()=>this.closeModal()} />
       
        </div>}
        
        <div id="funnelListkamer" className="row">
          {this.renderProjects(funnels,"campaign")}
        </div>

</div>
        )
    }
}

export default FunnelList;