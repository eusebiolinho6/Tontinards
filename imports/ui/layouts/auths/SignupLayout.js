import React, { Component, Fragment } from 'react';
import SignupForm from '../../components/auth/SignupForm';
import Location from '../../GlobalComponents/Location'
// App component - represents the whole app
class SignupLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Fragment>
          <Location />
            <SignupForm />
        </Fragment>
        
    )
  }
}

export default SignupLayout;