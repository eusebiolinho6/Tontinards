import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import ProjectsPage from '../pages/projects/ProjectsPage'
import HeaderLayout from '../globalComponents/layouts/HeaderLayout'
import FunnelDetailsPage from '../pages/funnels/FunnelsDetailsPage';
import AdminPage from '../pages/admins/AdminPage';

// The Roster component matches one of two different routes
// depending on the full pathname
const Project = () => (
  // <Switch>
    <Fragment>
      <div>
        <HeaderLayout />
        {/* <Route exact path='/projects/all' component={ProjectsPage}/> */}
        <div>
          <ProjectsPage />
        </div>
      </div>
    </Fragment>
  // </Switch>
)

export default Project;
