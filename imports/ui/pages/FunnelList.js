import React, { Component, Fragment } from 'react';
import MainLayout from '../layouts/MainLayout';

// App component - represents the whole app
class FunnelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {match, location} = this.props; 
    return (
        <MainLayout search={location.search} params={match.params} />
    )
  }
}

export default FunnelList;