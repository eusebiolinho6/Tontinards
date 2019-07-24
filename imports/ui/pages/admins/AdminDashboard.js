import React, { Component, Fragment } from 'react';
import AdminDashboardLayout from '../../layouts/admins/AdminDashboardLayout'
import ProjectItem from '../../components/projects/ProjectItem';
import ToggleButton from 'react-toggle-button';
import Switch from "react-switch";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
       <AdminDashboardLayout />
     </div>
    )
}
}

export default AdminDashboard;