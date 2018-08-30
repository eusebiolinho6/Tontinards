import React, { Component, Fragment } from 'react';
// App component - represents the whole app
class FunnelLIstAdmin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
   <div class="row">

<div class="col-lg-12">
    <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h5>Custom responsive table </h5>
        </div>
        <div class="ibox-content">
            <div class="row">
                <div class="col-sm-9 m-b-xs">
                   
                </div>
                <div class="col-sm-3">
                    <div class="input-group">
                    <input type="text" placeholder="Search" class="input-sm form-control" />
                     <span class="input-group-btn">
                      <button type="button" class="btn btn-sm btn-primary"> Go!</button>
                       </span></div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                    <tr>

                        <th>Project </th>
                        <th>Name </th>
                        <th>Phone </th>
                        <th>Company </th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Project <small>This is example of project</small></td>
                        <td>Patrick Smith</td>
                        <td>0800 051213</td>
                        <td>Inceptos Hymenaeos Ltd</td>
                        <td>20%</td>
                        <td>Jul 14, 2013</td>
                        <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                    </tr>
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