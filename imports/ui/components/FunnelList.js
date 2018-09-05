import React, { Component, Fragment } from 'react';
import FunnelItem from './Funnel-Item';
// App component - represents the whole app
class FunnelList extends Component {
    constructor(props) {
        super(props);
    }
    renderFunnels(){
        const {funnels, propclass} = this.props;
       return funnels.map((funnel)=>(
            <FunnelItem key={funnel._id} funnel={funnel} />
        ))
    }
    render() {
        const{funnels}=this.props;
        return (
        <div style={{width: '100%', paddingTop: '0px'}} className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
        {this.renderFunnels()}
        </div>

</div>
        )
    }
}

export default FunnelList;