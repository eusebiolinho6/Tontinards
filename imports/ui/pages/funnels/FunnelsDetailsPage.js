import React, { Component, Fragment } from 'react';
import FunnelDetailsLayout from '../../layouts/funnels/FunnelDetailsLayout';

// App component - represents the whole app
class FunnelDetailsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <FunnelDetailsLayout funnelId={this.props.match.params.funnelId} />
    )
  }
}

export default FunnelDetailsPage;