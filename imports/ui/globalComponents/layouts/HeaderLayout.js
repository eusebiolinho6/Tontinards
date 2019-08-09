import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Header from '../../globalComponents/Header';
import { Meteor } from 'meteor/meteor';

// App component - represents the whole app
class HeaderLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    let data = null;
    // Verify if all data are ready, then render this data
    if(this.props.user) {
      data = (
        <Header user={user} />
      )
    }
    return data;
  }
}

export default withTracker((props) => {
  return {
    user: Meteor.user()
  }
})(HeaderLayout)