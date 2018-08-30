import React, { Component, Fragment } from 'react';
import FunnelListAdmin from '../layouts/FunnelListAdmin';
// App component - represents the whole app
class FunnelListAdminPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <FunnelListAdmin />
    )
  }
}

export default FunnelListAdminPage;