import React, { Component, Fragment } from 'react';
import LoginForm from '../components/LoginForm';
import Location from '../GlobalComponents/Location'
// App component - represents the whole app
class LoginLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Fragment>
            <Location />
            <LoginForm />
        </Fragment>
        
    )
  }
}

export default LoginLayout;