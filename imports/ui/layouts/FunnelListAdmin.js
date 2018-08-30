import React, { Component, Fragment } from 'react';

import FunnelListAdmin from '../components/FunnelListAdmin'

// App component - represents the whole app
class FunnelListAdminLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
         <FunnelListAdmin/>
    )
  }
}

export default FunnelListAdminLayout;