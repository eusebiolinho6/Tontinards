import React, { Component, Fragment } from 'react';
import AdminForWhoFoundsRaiseLayout from '../../layouts/admins/AdminForWhoFoundsRaiseLayout';
import Header from '../../globalComponents/Header'
// App component - represents the whole app
class AdminForWhoFoundsRaisePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <AdminForWhoFoundsRaiseLayout />
      </Fragment>
    )
  }
}

export default AdminForWhoFoundsRaisePage;