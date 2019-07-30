import React, { Component, Fragment } from 'react';
import AdminDashboardLayout from '../../layouts/admins/AdminDashboardLayout'
import ProjectItem from '../../components/projects/ProjectItem';
import Menu from '../../globalComponents/Menu';
import ToggleButton from 'react-toggle-button';
import Switch from "react-switch";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-container container-fluid row no-padding">
        <AdminDashboardLayout />
      </div>
    )
  }
}

export default AdminDashboard;