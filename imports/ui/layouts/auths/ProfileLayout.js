import React, { Component, Fragment } from 'react';
import ProfileForm from '../../components/auths/ProfileForm';
import { withTracker } from 'meteor/react-meteor-data';
import Footer from '../../globalComponents/Footer'

// App component - represents the whole app
class ProfileLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const{user}=this.props;
    return (
        <Fragment>
            <ProfileForm user={user}  />
            <Footer />
        </Fragment>
    )
  }
}

export default withTracker((props)=>{
    return {
        user: Meteor.user()
    }
})(ProfileLayout)