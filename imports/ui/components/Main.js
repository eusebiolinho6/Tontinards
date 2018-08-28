import React, { Component, Fragment } from 'react';

import FilterFunnelMenu from './FilterFunnelMenu'
import FunnelList from './FunnelList'

// App component - represents the whole app
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2>File Manager</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                App Views
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>File Manager</strong>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterFunnelMenu />
                        </div>
                        <div className="col-lg-9 animated fadeInRight">
                            <div className="row">
                                <FunnelList />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default Main;