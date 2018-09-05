import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import HeaderLayout from '../layouts/HeaderLayout'
import AdminPage from '../pages/AdminPage';
import AdminIndustryPage from '../pages/AdminIndustryPage';
import AdminCategoryPage from '../pages/AdminCategoryPage';

// The Roster component matches one of two different routes
// depending on the full pathname
const Admin = () => (
  <Switch>
    <Fragment>
      <HeaderLayout />
        <Route exact path='/admin/funnels' component={AdminPage}/>
        <Route exact path='/admin/industries' component={AdminIndustryPage}/>
        <Route exact path='/admin/categories' component={AdminCategoryPage}/>
    </Fragment>
  </Switch>
)

export default Admin;
