import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import FunnelList from '../pages/funnels/FunnelList'
import HeaderLayout from '../GlobalComponents/layouts/HeaderLayout'
import FunnelDetailsPage from '../pages/funnels/FunnelsDetailsPage';
import AdminPage from '../pages/admins/AdminPage';

// The Roster component matches one of two different routes
// depending on the full pathname
const Funnel = () => (
  <Switch>
    <Fragment>
      <HeaderLayout />
        <Route exact path='/funnels/:industries/:categories' component={FunnelList}/>
        <Route exact path='/funnels/:funnelId' component={FunnelDetailsPage}/>
    </Fragment>
  </Switch>
)

export default Funnel;
