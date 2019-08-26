import React, { Component, Fragment } from 'react';
import {Modal, Button} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import DonationTypeModalForm from './DonationTypeModalForm';
import ValidationModalForm from './validationModalForm';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import adminDonationPageFr from '../../../../../traduction/adminDonationPage/fr.json';
import adminDonationPageEn from '../../../../../traduction/adminDonationPage/en.json';

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


class AdminDonations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            devName: '',
            id: '',
            show: false,
            clickValidate: false,
            comment: '',
            don: null, 
            projectId: null, 
        };
        this.notificationDOMRef = React.createRef();
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
    editDonationType(donationType){
        this.setState({
            name: donationType.name,
            devName: donationType.devName,
            id:donationType._id,
            show: true,
            don: null, 
            projectId: null, 
            comment: ''
        });
    }
    closeModal(){
        this.setState({show:false, clickValidate: false});
        this.setState({
            name: '',
            devName: '',
            errors: {},
            id: '',
            comment: '',
            don: null, 
            projectId: null, 
        })
    }
    // Validate a Donation
    // validate(don, projectId, comment) {
    //     // open the popup
    //     this.setState({ 
    //         clickValidate: true, 
    //         comment: comment,  
    //         don: don, 
    //         projectId: projectId
    //     })
    // }

  // Validate a Donation
  validate(don, projectId, comment){
    // open the popup
    this.setState({ 
        clickValidate: true, 
        comment: comment,  
        don: don, 
        projectId: projectId
    })
  }
    // Validate a donation
    displayNotification = () => {
        let title = 'Effectué avec Succès';
        lang == 'fr'?
            title = 'Effectué avec Succès'
            :
            title = "Successfully done!"
        this.addNotification(title, "success")
    }

    // Delete a donation
    delete(projectId, donID){
        let title = 'Supprimé avec Succès';
        lang == 'fr'?
            title = 'Supprimé avec Succès'
            :
            title = "Successfully deleted!"
        Meteor.call('deleteDonate', projectId, donID)
        this.addNotification(title, "success")
    }


  addNotification = (message, type) => {
    let title = "Don!";
    lang == 'fr'?
        title = "Don!"
        :
        title = "Donation!"
    this.notificationDOMRef.current.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

    render() {
        let lg = adminDonationPageFr;
        let lang = localStorage.getItem('lang')

          lang == 'fr'?
              lg = adminDonationPageFr
              :
              lg = adminDonationPageEn;

        const { show, name, devName, id, clickValidate, comment, don, projectId } = this.state;
        const { projects, donationsTypes } = this.props;
        let donations = [];
        projects.forEach((project) => {
            if(project.donators) {
                project.donators.forEach((don) => {
                    if(!don.validated) {
                        donations.push(
                            <tr key={don.id.toString()}>
                                <td>{project.projectName}</td>
                                <td>{don.firstName+" "+don.lastName}</td>
                                <td><CurrencyFormat  value={don.amount} displayType={'text'} thousandSeparator=" "/> FCFA</td>
                                <td>{don.choosenDonationType}</td>
                                <td>{this.formatDate(don.date)} </td>
                                    <td> 
                                        <button onClick={() =>this.delete(project._id, don.id)} type="button" className="btn btn-sm btn-danger m-l-md pull-right">{lg.Delete}</button>
                                        <button onClick={() =>this.validate(don, project._id , don.comment)} type="button" className="btn btn-sm btn-primary pull-right">{lg.validatebtn}</button>
                                    </td>
                            </tr>
                        )
                    }
                })
            }
        })
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <ReactNotification ref={this.notificationDOMRef} />
                <DonationTypeModalForm id={id} name={name} devName={devName} show={show} closeModal={() => this.closeModal()} />
                <ValidationModalForm id={id} don={don} projectId={projectId} comment={comment} show={clickValidate} displayNotification={this.displayNotification} closeModal={() => this.closeModal()} />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-projectName">
                                <h5>{lg.DonationList}</h5>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-primary" onClick={()=> this.setState({show:true}) } >{lg.NewDonationType}</button>
                                </div>
                                </div>
                                <div className="row m-t-md">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="table-responsive">
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
                                                    {donationsTypes&&donationsTypes.map((donationsType)=>(
                                                        <tr key={donationsType._id}>
                                                            <td>{donationsType.name}</td>
                                                            <td>{donationsType.devName}</td>
                                                            <td>{this.formatDate(donationsType.createdAt)} </td>
                                                            <td> <button onClick={() =>this.editDonationType(donationsType)} 
                                                                type="button" className="btn btn-sm btn-primary pull-right">{lg.Edit} <i className="fa fa-pencil"></i> </button></td>
                                                        </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-projectName">
                                <h5>Pending Donation</h5>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        {projects&&projects.length ? <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>{lg.ProjectName}</th>
                                                    <th>{lg.DonatorName}</th>
                                                    <th>{lg.Amount}</th>
                                                    <th>{lg.Date}</th>
                                                    <th className="pull-right">{lg.Action}</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {donations}
                                                </tbody>
                                            </table>
                                        </div>:''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDonations;