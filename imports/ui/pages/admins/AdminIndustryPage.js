import React, { Component, Fragment } from 'react';
import AdminIndustryLayout from '../../layouts/admins/AdminIndustryLayout';
import Header from '../../globalComponents/Header'
// App component - represents the whole app
class AdminIndustryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <AdminIndustryLayout />
      </Fragment>
    )
  }
}

export default AdminIndustryPage;