import React, { Component, Fragment } from 'react';
import SignupForm from '../../components/auths/SignupForm';
import Location from '../../globalComponents/Location'
import Footer from '../../globalComponents/Footer'

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
            <Footer />
        </Fragment>
        
    )
  }
}

export default SignupLayout;