import React, { Component, Fragment } from 'react';
import FunnelModalForm from './Funnel-Modal-Form';
import Input from './Input'
import {Modal, Button} from 'react-bootstrap';
// App component - represents the whole app
class FunnelLIstAdmin extends Component {
    constructor(props) {
        super(props);
     this.state = {
        title: '',
        price: '',
        description: '',
        industry: '',
        id: '',
        show: false
    };
}

  handleInputChange(e) {
      console.log(e);
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
      });
  }
  editFunnel(funnel){
      this.setState({
          price: funnel.price,
          description: funnel.description,
          title: funnel.title,
          industry: funnel.industry,
          id:funnel._id,
          show: true
      });
  }
  closeModal(){
      this.setState({show:false});
      this.setState({
          title: '',
          price: '',
          description: '',
          industry: '',
          errors: {},
          id: '',
          isLoading: false,
      })
  }

    render() {
         const { show, price, title, description, industry } = this.state;
        const {funnels}=this.props;
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
   <div className="row">

<div className="col-lg-12">
    <div className="ibox float-e-margins">
        <div className="ibox-title">
            <h5>Funnel List</h5>
        </div>
        <div className="ibox-content">
            <div className="row">
             <div className="col-sm-3">
                    <button type="button" className="btn btn-sm btn-primary" onClick={()=> this.setState({show:true}) } > New Funnel</button>
            </div>
            <FunnelModalForm price={price} description={description} title={title} industry={industry} show={show} closeModal={()=>this.closeModal()} />
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
                        <td>{funnel.industry}</td>
                        <td>${funnel.price} </td>
                        <td>Jul 14, 2013</td>
                        <td> <button onClick={() =>this.editFunnel(funnel)} type="button" className="btn btn-xs btn-primary pull-right">Edit <i className="fa fa-pencil"></i> </button></td>
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