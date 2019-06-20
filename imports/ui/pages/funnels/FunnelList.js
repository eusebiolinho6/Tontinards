import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';

// App component - represents the whole app
class FunnelList extends Component {
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
        <MainLayout isFree={isFree} toggleFree={(b)=>this.toggleFree(b)} search={location.search} params={match.params} />
    )
  }
}

export default FunnelList;