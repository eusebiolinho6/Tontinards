import React, { Component, Fragment } from 'react';
import ProjectDonationLayout from '../../layouts/projects/ProjectDonationLayout';

class ProjectDonationPage extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }



  render() {
    return (
      <div>
        <ProjectDonationLayout projectId={this.props.match.params.projectId} />
      </div>
    )
  }
}

export default ProjectDonationPage;

