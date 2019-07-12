import React, { Component, Fragment } from 'react';
import AdminFoundRaiseAsLayout from '../../layouts/admins/AdminFoundRaiseAsLayout';
import Header from '../../globalComponents/Header'
// App component - represents the whole app
class AdminFoundRaiseAsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <AdminFoundRaiseAsLayout />
      </Fragment>
    )
  }
}

export default AdminFoundRaiseAsPage;