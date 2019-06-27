import React, { Component, Fragment } from 'react';
import FilterFunnelMenu from './FilterFunnelMenu'
import FunnelList from './FunnelList'
import Location from './Location'

// App component - represents the whole app
class DownloadComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{url}=this.props;
        return (
              <div style={{display: 'none'}}>
               <iframe src={url} />
           </div>
        )
    }
}

export default DownloadComponent;