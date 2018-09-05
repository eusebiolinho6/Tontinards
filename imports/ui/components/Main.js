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
        const{params, funnels, categories, industries}=this.props;
        return (
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterFunnelMenu funnels={funnels} params={params} industries={industries} categories={categories} />
                        </div>
                        <div className="col-lg-9 animated fadeInRight">
                            <div className="row">
                                <FunnelList funnels={funnels} />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Main;