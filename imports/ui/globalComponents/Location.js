import React, { Component, Fragment } from 'react';

// App component - represents the whole app
class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this;
        return (
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2>{props.location&&props.location.projectName}</h2>
                        <ol className="breadcrumb">
                            {props.location&&props.location.path.map((path, index)=>(<li key={index} className="breadcrumb-item">
                                {path}
                            </li>)) }
                        </ol>
                    </div>
                </div>
                
        )
    }
}

export default Location;