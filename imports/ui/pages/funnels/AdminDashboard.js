import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
import FunnelDetailsPage from './FunnelsDetailsPage'
import {Link} from 'react-router-dom';
import AdminProjectPending from '../../components/funnels/AdminProjectPending';
import AdminProjectValidated from '../../components/funnels/AdminProjectValidated';

// App component - represents the whole app
class AdminDshb extends Component {
  constructor(props) {
    super(props);
    this.state={
      isFree:false
    }
  }

    toggleFree(b) {
      this.setState({isFree:b});
    }

  render() {
    const {match, location} = this.props; 
    const {isFree}=this.state;
    return (
      
        <div className="container-fluid no-padding">
          <br/>
          <div>
            <h1 className = "AdminProjectH1">Projects List </h1>
            <hr className = "AdminProjectHr"/>
            <br/>
            <h2 className = "AdminProjectH2">Pending Projects </h2>
            <br/>
           <AdminProjectPending />
          </div>
          <div>
            <hr className = "AdminProjectSHr"/>
            <h2 className = "AdminProjectH2">Valided Projects </h2>
            <br/> 
            <AdminProjectValidated />
          </div>
          <div>
            <hr className = "AdminProjectSHr"/>
            <h2 className = "AdminProjectH2">Refused Projects </h2>
            <br/> 
            <AdminProjectPending />
          </div>
       
      </div>
    )
  }
}

export default AdminDshb;