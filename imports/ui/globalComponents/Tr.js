import React, { Component, Fragment } from 'react';
import { Categories, Industries } from '../../api/collections'// App component - represents the whole app
class Tr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { funnel } = this.props;
        const category = Categories.findOne({ _id: funnel.category });
        return (
            <tr key={funnel._id}>
                <td>{funnel.projectName}</td>
                <td>{category && category.name}</td>
                <td>{funnel.phoneNumber} </td>
                <td>{funnel.email} </td>
                <td>$ {funnel.objectifAmount} </td>
                <td>$ {funnel.currentAmount} </td>
                <td>{this.props.formatDate(funnel.createdAt)} </td>
                <td> <button onClick={() => this.props.editFunnel(funnel)} type="button" className="btn btn-sm btn-primary pull-right">Edit <i className="fa fa-pencil"></i> </button></td>
            </tr>
        )
    }
}

export default Tr;