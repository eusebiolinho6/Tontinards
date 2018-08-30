import React, { Component, Fragment } from 'react';
// App component - represents the whole app
class FunnelLIstAdmin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {funnels}=this.props;
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
   <div className="row">

<div className="col-lg-12">
    <div className="ibox float-e-margins">
        <div className="ibox-title">
            <h5>Funnel Administration</h5>
        </div>
        <div className="ibox-content">
            <div className="row">
                <div className="col-sm-9 m-b-xs">
                   
                </div>
                <div className="col-sm-3">
                      <button type="button" className="btn btn-sm btn-primary  pull-right"> New Funnel</button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th>Name </th>
                        <th>Industry </th>
                        <th>Price </th>
                        <th>Date</th>
                        <th className="pull-right">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {funnels&&funnels.map((funnel)=>(<tr key={funnel._id}>
                        <td>{funnel.title}</td>
                        <td>Patrick Smith</td>
                        <td>${funnel.price} </td>
                        <td>Jul 14, 2013</td>
                        <td> <button type="button" className="btn btn-sm btn-primary pull-right"><i className="fa fa-pencil"></i> </button></td>
                    </tr>))}
                    
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>

</div>
</div>
        )
    }
}

export default FunnelLIstAdmin;