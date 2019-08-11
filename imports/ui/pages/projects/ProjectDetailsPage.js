import React, { Component, Fragment } from 'react';
import ProjectDetailsLayout from '../../layouts/projects/ProjectDetailsLayout';

// App component - represents the whole app
class AdminCategoryPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <ProjectDetailsLayout projectId={this.props.location.projectId}/>
      </Fragment>
    )
  }
}

export default AdminCategoryPage;