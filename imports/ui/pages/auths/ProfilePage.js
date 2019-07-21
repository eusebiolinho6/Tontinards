import React, { Component, Fragment } from 'react';
import ProfileLayout from '../../layouts/auths/ProfileLayout';

// App component - represents the whole app
class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ProfileLayout />
    )
  }
}

export default ProfilePage;