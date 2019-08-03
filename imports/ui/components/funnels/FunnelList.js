import React, { Component, Fragment } from 'react';

import ModalSubscription from './../payments/ModalSubscription';
import ProjectItem from '../projects/ProjectItem';
import { checkRole } from '../../../utilities';


// App component - represents the whole app
class FunnelList extends Component {
    constructor(props) {
        super(props);
        this.state={
          show:false,
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
  renderProjects(projects){
    return projects.map((project, index)=>(
      <div>
          { project.projectState != "START CAMPAIGN"?
          ""
            :
            <ProjectItem key={index} project={project}  user={{ profile: {role: "guest" }}}/>
          }
      </div>
    ))
  }

      render() {
        const {show}=this.state;
        const{funnels, userId}=this.props,
        isAuthorized = checkRole(['user'], userId);

        return (
        <div style={{width: '100%', paddingTop: '0px'}} className="wrapper wrapper-content animated fadeInRight">
        {!isAuthorized&&<div>
            <ModalSubscription userId={userId} show={show} closeModal={()=>this.closeModal()} />
       
        </div>}
        
        <div id="funnelListkamer" className="row">
          {this.renderProjects(funnels)}
        </div>

</div> 
        )
    }
}

export default FunnelList;