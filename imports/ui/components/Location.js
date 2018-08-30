import React, { Component, Fragment } from 'react';

// App component - represents the whole app
class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                
        )
    }
}

export default Location;