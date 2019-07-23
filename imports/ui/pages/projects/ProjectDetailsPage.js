import React, { Component, Fragment } from 'react';
import ProjectDetailsLayout from '../../layouts/projects/ProjectDetailsLayout';

// App component - represents the whole app
class AdminCategoryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <ProjectDetailsLayout projectId={this.props.match.params.projectId}/>
      </Fragment>
    )
  }
}

export default AdminCategoryPage;