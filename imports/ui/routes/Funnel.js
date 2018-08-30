import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import FunnelList from '../pages/FunnelList'
import HeaderLayout from '../layouts/HeaderLayout'
import FunnelDetailsPage from '../pages/FunnelsDetailsPage';
import AdminPage from '../pages/AdminPage';

// The Roster component matches one of two different routes
// depending on the full pathname
const Funnel = () => (
  <Switch>
    <Fragment>
      <HeaderLayout />
        <Route exact path='/funnels' component={FunnelList}/>
        <Route exact path='/funnels/admin' component={AdminPage}/>
        <Route exact path='/funnels/:funnelId/details' component={FunnelDetailsPage}/>
    </Fragment>
  </Switch>
)

export default Funnel;
