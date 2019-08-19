import React, { Component, Fragment } from 'react';
import {Modal, Button} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
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

  validate(don, projectId){
    Meteor.call('validateDonate', don, projectId)
    this.addNotification("Successfully done!", "success")
  }

  addNotification = (message, type) => {
    this.notificationDOMRef.current.addNotification({
      title: "Donation!",
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

        const { show, name, devName, id } = this.state;
        const { projects } = this.props;
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
                                <td>{this.formatDate(don.date)} </td>
                                    <td> <button onClick={() =>this.validate(don, project._id)} type="button" className="btn btn-md btn-primary pull-right">Validate</button></td>
                            </tr>
                        )
                    }
                })
            }
        })
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <ReactNotification ref={this.notificationDOMRef} />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-projectName">
                                <h5>{lg.DonationList}</h5>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-lg-4">

                                    </div>
                                </div>
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