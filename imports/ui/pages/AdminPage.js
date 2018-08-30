import React, { Component, Fragment } from 'react';
import AdminLayout from '../layouts/AdminLayout';
// App component - represents the whole app
class AdminPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AdminLayout />
    )
  }
}

export default AdminPage;