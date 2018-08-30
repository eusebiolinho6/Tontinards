import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import FunnelList from '../pages/FunnelList'
import HeaderLayout from '../layouts/HeaderLayout'

// The Roster component matches one of two different routes
// depending on the full pathname
const Funnel = () => (
  <Switch>
    <Fragment>
      <HeaderLayout />
        <Route exact path='/funnels' component={FunnelList}/>
    </Fragment>
  </Switch>
)

export default Funnel;
