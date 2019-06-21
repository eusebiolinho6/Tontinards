import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import HeaderLayout from '../globalComponents/layouts/HeaderLayout';
import AdminPage from '../pages/admins/AdminPage';
import AdminIndustryPage from '../pages/admins/AdminIndustryPage';
import AdminCategoryPage from '../pages/admins/AdminCategoryPage';
import authenticate from '../../utilities/authenticate';
// The Roster component matches one of two different routes
// depending on the full pathname
const Admin = () => (
  <Switch>
    <Fragment>
      <HeaderLayout />
        <Route exact path='/admin/funnels' component={authenticate(AdminPage)}/>
        <Route exact path='/admin/industries' component={authenticate(AdminIndustryPage)}/>
        <Route exact path='/admin/categories' component={authenticate(AdminCategoryPage)}/>
    </Fragment>
  </Switch>
)

export default Admin;
