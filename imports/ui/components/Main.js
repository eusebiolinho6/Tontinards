import React, { Component, Fragment } from 'react';
import FilterFunnelMenu from './FilterFunnelMenu'
import FunnelList from './FunnelList'
import Location from './Location'

// App component - represents the whole app
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{params, funnels, search, categories,userId, industries}=this.props;
        return (
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterFunnelMenu {...this.props} search={search} funnels={funnels} params={params} industries={industries} categories={categories} />
                        </div>
                        <div className="col-lg-9 animated fadeInRight">
                            <div className="row">
                                {
                                    funnels && funnels.length ? <FunnelList userId={userId} funnels={funnels} />:<h2 style={{display:'block', margin:'auto'}} >No funnels</h2 >}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Main;