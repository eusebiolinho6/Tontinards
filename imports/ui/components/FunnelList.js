import React, { Component, Fragment } from 'react';
import FunnelItem from './Funnel-Item';
// App component - represents the whole app
class FunnelList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
        <FunnelItem />
        <FunnelItem />
        <FunnelItem />
    </div>

</div>
        )
    }
}

export default FunnelList;