import React, { Component, Fragment } from 'react';
import NavLink from 'react-router-dom'


// App component - represents the whole app
class BreadCrumb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {projectName, link } = this.props;
        return (
            <li className="breadcrumb-item">
                <NavLink to={link} activeClassName="active">{projectName}</NavLink>
            </li>
        )
    }
}

export default BreadCrumb;
