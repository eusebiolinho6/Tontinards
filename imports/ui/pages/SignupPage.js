import React, { Component, Fragment } from 'react';
import SignupLayout from '../layouts/SignupLayout';
// App component - represents the whole app
class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SignupLayout />
    )
  }
}

export default SignupPage;