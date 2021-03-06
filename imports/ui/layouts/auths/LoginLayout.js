import React, { Component, Fragment } from 'react';
import LoginForm from '../../components/auths/LoginForm';
import Location from '../../globalComponents/Location';

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