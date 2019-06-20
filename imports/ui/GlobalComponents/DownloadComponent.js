import React, { Component, Fragment } from 'react';
import FilterFunnelMenu from '../components/FilterFunnelMenu'
import FunnelList from '../components/FunnelList'
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