import React, { Component, Fragment } from 'react';
import {Categories, Industries} from '../../api/collections/'// App component - represents the whole app
class Tr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{funnel}=this.props;
        const industry=Industries.findOne({_id:funnel.industry}),
        category=Categories.findOne({_id:funnel.category});
        return (
                <tr key={funnel._id}>
                        <td>{funnel.title}</td>
                        <td>{industry&&industry.name}</td>
                        <td>{category&&category.name}</td>
                        <td>${funnel.price} </td>
                        <td>{this.props.formatDate(funnel.createdAt)} </td>
                        <td> <button onClick={() =>this.props.editFunnel(funnel)} type="button" className="btn btn-xs btn-primary pull-right">Edit <i className="fa fa-pencil"></i> </button></td>
                        </tr>
        )
    }
}

export default Tr;