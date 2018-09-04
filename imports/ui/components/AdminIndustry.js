import React, { Component, Fragment } from 'react';
import IndustryModalForm from './IndustryModalForm';
import Input from './Input'
import {Modal, Button} from 'react-bootstrap';
// App component - represents the whole app
const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];
class AdminIndustry extends Component {
    constructor(props) {
        super(props);
     this.state = {
        name: '',
        devName: '',
        id: '',
        show: false
    };
}

 formatDate(d) {
     const date = new Date(d);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

  handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
      });
  }
  editIndustry(industry){
      this.setState({
          name: industry.name,
          devName: industry.devName,
          id:industry._id,
          show: true
      });
  }
  closeModal(){
      this.setState({show:false});
      this.setState({
          name: '',
          devName: '',
          errors: {},
          id: ''
         })
  }

    render() {
         const { show, name, devName, id } = this.state;
        const {industries}=this.props;
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
   <div className="row">

<div className="col-lg-12">
    <div className="ibox float-e-margins">
        <div className="ibox-title">
            <h5>Industry List</h5>
        </div>
        <div className="ibox-content">
            <div className="row">
             <div className="col-sm-3">
                    <button type="button" className="btn btn-sm btn-primary" onClick={()=> this.setState({show:true}) } > New Industry</button>
            </div>
            <IndustryModalForm id={id} name={name} devName={devName} show={show} closeModal={()=>this.closeModal()} />
             </div>
            {industries&&industries.length ? <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>DevName</th>
                        <th>Created At</th>
                        <th className="pull-right">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {industries&&industries.map((industry)=>(<tr key={industry._id}>
                        <td>{industry.name}</td>
                        <td>{industry.devName}</td>
                        <td>{this.formatDate(industry.createdAt)} </td>
                        <td> <button onClick={() =>this.editIndustry(industry)} type="button" className="btn btn-xs btn-primary pull-right">Edit <i className="fa fa-pencil"></i> </button></td>
                    </tr>))}
                    
                    </tbody>
                </table>
            </div>:''}

        </div>
    </div>
</div>

</div>
</div>
        )
    }
}

export default AdminIndustry;