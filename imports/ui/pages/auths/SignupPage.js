import React, { Component, Fragment } from 'react';
import SignupLayout from '../../layouts/auths/SignupLayout';
// App component - represents the whole app
class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <SignupLayout />
      </div>
    )
  }
}

export default SignupPage;