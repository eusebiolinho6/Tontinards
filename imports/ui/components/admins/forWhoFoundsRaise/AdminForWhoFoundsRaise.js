import React, { Component, Fragment } from 'react';
import ForWhoFoundsRaiseModalForm from './ForWhoFoundsRaiseModalForm';
import Input from '../../../globalComponents/Input'
import {Modal, Button} from 'react-bootstrap';
import adminfundRaiseForPageFr from '../../../../../traduction/adminfundRaiseForPage/fr.json';
import adminfundRaiseForPageEn from '../../../../../traduction/adminfundRaiseForPage/en.json';

// App component - represents the whole app
const monthNamesEn = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

let lang = localStorage.getItem('lang');
let monthNames = [];
let monthNamesFr = [
    "Janvier", "Fevrier", "Mars",
    "Avril", "Mai", "Juin", "Juillet",
    "Août", "Septembre", "Octobre",
    "Novembre", "Decembre"
];
lang == 'fr'?
    monthNames = monthNamesFr
:
    monthNames = monthNamesEn

class AdminForWhoFoundsRaise extends Component {
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
  editForWhoFoundsRaise(oneForWhoFoundsRaise){
      this.setState({
          name: oneForWhoFoundsRaise.name,
          devName: oneForWhoFoundsRaise.devName,
          id:oneForWhoFoundsRaise._id,
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
        let lg = adminfundRaiseForPageFr;
        let lang = localStorage.getItem('lang')

          lang == 'fr'?
              lg = adminfundRaiseForPageFr
              :
              lg = adminfundRaiseForPageEn;

        const { show, name, devName, id } = this.state;
        const {forWhoFoundsRaise}=this.props;
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
   <div className="row">

<div className="col-lg-12">
    <div className="ibox float-e-margins">
        <div className="ibox-projectName">
            <h5>{lg.FundsRaiseFor}</h5>
        </div>
        <div className="ibox-content">
            <div className="row">
             <div className="col-sm-3">
                    <button type="button" className="btn btn-primary" onClick={()=> this.setState({show:true}) } > {lg.CreateNew}</button>
            </div>
            <ForWhoFoundsRaiseModalForm id={id} name={name} devName={devName} show={show} closeModal={()=>this.closeModal()} />
             </div>
            {forWhoFoundsRaise&&forWhoFoundsRaise.length ? <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>{lg.Name}</th>
                        <th>{lg.DevName}</th>
                        <th>{lg.CreatedAt}</th>
                        <th className="pull-right">{lg.Action}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {forWhoFoundsRaise&&forWhoFoundsRaise.map((oneForWhoFoundsRaise)=>(<tr key={oneForWhoFoundsRaise._id}>
                        <td>{oneForWhoFoundsRaise.name}</td>
                        <td>{oneForWhoFoundsRaise.devName}</td>
                        <td>{this.formatDate(oneForWhoFoundsRaise.createdAt)} </td>
                        <td> <button onClick={() =>this.editForWhoFoundsRaise(oneForWhoFoundsRaise)} type="button" className="btn btn-sm btn-primary pull-right">{lg.Editbtn} <i className="fa fa-pencil"></i> </button></td>
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

export default AdminForWhoFoundsRaise;