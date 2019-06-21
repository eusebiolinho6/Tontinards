import React, { Component, Fragment } from 'react';
import SignupForm from '../../components/auths/SignupForm';
import Location from '../../globalComponents/Location'
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