import React, { Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/auths/LoginPage'
import SignupPage from '../pages/auths/SignupPage'
import ProfilePage from '../pages/auths/ProfilePage'
import HeaderLayout from '../globalComponents/layouts/HeaderLayout';

// The Roster component matches one of two different routes
// depending on the full pathname
const Authentication = () => (
  <Switch>
    <Fragment>
        <HeaderLayout />
        <Route exact path='/authentication/signin' component={LoginPage}/>
        <Route exact path='/authentication/signup' component={SignupPage}/>
        <Route exact path='/authentication/profile' component={ProfilePage}/>
    </Fragment>
  </Switch>
)

export default Authentication;
