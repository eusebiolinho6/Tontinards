import React, { Component, Fragment } from 'react';
import AdminDonationLayout from '../../layouts/admins/AdminDonationLayout';
import Header from '../../globalComponents/Header'
// App component - represents the whole app
class AdminDonationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <AdminDonationLayout />
      </Fragment>
    )
  }
}

export default AdminDonationPage;