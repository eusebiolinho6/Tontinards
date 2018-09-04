import React, { Component, Fragment } from 'react';
import FunnelModalForm from './Funnel-Modal-Form';
import Input from './Input'
import {Modal, Button} from 'react-bootstrap';
// App component - represents the whole app
const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];
class FunnelLIstAdmin extends Component {
    constructor(props) {
        super(props);
     this.state = {
        title: '',
        price: '',
        description: '',
        industry: '',
        category:'',
        descriptionImageUrl:'',
        funnelImageUrl:'',
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
          category: funnel.category,
          industry: funnel.industry,
          id:funnel._id,
          descriptionImageUrl: funnel.descriptionImageUrl,
          funnelImageUrl: funnel.funnelImageUrl,
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
          category: '',
          descriptionImageUrl:'',
          funnelImageUrl: '',
          errors: {},
          id: '',
          isLoading: false,
      })
  }

    render() {
         const { show, price, title, description, industry,id, category, descriptionImageUrl, funnelImageUrl } = this.state;
        const {funnels, industries,categories}=this.props;
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
            <FunnelModalForm industries={industries} categories={categories} id={id} category={category} price={price} description={description} title={title} industry={industry} show={show} funnelImageUrl={funnelImageUrl} descriptionImageUrl={descriptionImageUrl} closeModal={()=>this.closeModal()} />
             </div>
            {funnels&&funnels.length?<div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Industry</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th className="pull-right">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {funnels&&funnels.map((funnel, index)=>(<tr key={funnel._id}>
                        <td>{funnel.title}</td>
                        <td>{'funnel.industry'}</td>
                        <td>{funnel.category}</td>
                        <td>${funnel.price} </td>
                        <td>{this.formatDate(funnel.createdAt)} </td>
                        <td> <button onClick={() =>this.editFunnel(funnel)} type="button" className="btn btn-xs btn-primary pull-right">Edit <i className="fa fa-pencil"></i> </button></td>
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

export default FunnelLIstAdmin;