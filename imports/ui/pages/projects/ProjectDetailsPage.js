import React, { Component, Fragment } from 'react';
import ProjectDetailsLayout from '../../layouts/projects/ProjectDetailsLayout';

// App component - represents the whole app
class AdminCategoryPage extends Component {
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
      <Fragment>
      {this.props.location.projectId?
        <ProjectDetailsLayout projectId={this.props.location.projectId}/>
        :
        <ProjectDetailsLayout projectId={this.state.projectId}/>
      }
      </Fragment>
    )
  }
}

export default AdminCategoryPage;