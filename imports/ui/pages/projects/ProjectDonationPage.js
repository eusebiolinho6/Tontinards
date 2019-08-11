import React, { Component, Fragment } from 'react';
import ProjectDonationLayout from '../../layouts/projects/ProjectDonationLayout';

class ProjectDonationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
    }
  }

   /**
   * just before the component is mounted, we setthe state
   *  of the projectId to what is in our local sotrage
   */
  componentWillMount(){
    this.setState({
      projectId: localStorage.getItem("projectId")
    })
  }


  render() {
    return (
      <div>
        {this.props.location.projectId?
          <ProjectDonationLayout projectId={this.props.location.projectId}/>
        :
          <ProjectDonationLayout projectId={this.state.projectId}/>
        }
      </div>
    )
  }
}

export default ProjectDonationPage;

