import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Header from '../../globalComponents/Header';
import { Meteor } from 'meteor/meteor';

// App component - represents the whole app
class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null}
  }

  render() {
    const { user } = this.props;
    console.log(user)
    return <Header user={user} />;
  }
}

export default withTracker((props) => {
  return {
    user: Meteor.user()
  }
})(HeaderLayout)