import React, { Component, Fragment } from 'react';
import LoginLayout from '../layouts/LoginLayout';
// App component - represents the whole app
class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <LoginLayout />
    )
  }
}

export default LoginPage;