import React, { Component, Fragment } from 'react';
import AdminCategoryLayout from '../../layouts/admins/AdminCategoryLayout';
import Header from '../../globalComponents/Header'
// App component - represents the whole app
class AdminCategoryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
        <AdminCategoryLayout />
      </Fragment>
    )
  }
}

export default AdminCategoryPage;