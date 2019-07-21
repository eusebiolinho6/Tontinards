import React, { Component, Fragment } from 'react';
import FunnelModalForm from './../funnels/Funnel-Modal-Form';
import Input from '../../globalComponents/Input'
import Tr from '../../globalComponents/Tr'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

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
            projectName: '',
            projectState: 0,
            currentAmount: 0,
            onefoundRaiseAs: '',
            oneForWhoFoundsRaise: '',
            objectifAmount: '',
            zipCode: '',
            description: '',
            category: '',
            document: '',
            projectImage: '',
            teamName: '',
            teamImage: '',
            video: '',
            id: '',
            country: '',
            email: '',
            show: false,
            feedback: ''
        };
    }

    componentWillReceiveProps() {
        this.loadCountry();

    }

    async loadCountry() {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                // handle success
                return response;
                console.log(this.state.category);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        //console.log(countries.data[0].name);
        this.setState({ countries: countries.data });
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

    editFunnel(funnel) {
        this.setState({
            zipCode: funnel.zipCode,
            objectifAmount: funnel.objectifAmount,
            onefoundRaiseAs: funnel.onefoundRaiseAs,
            oneForWhoFoundsRaise: funnel.oneForWhoFoundsRaise,
            description: funnel.description,
            projectName: funnel.projectName,
            projectState: funnel.projectState,
            currentAmount: funnel.currentAmount,
            category: funnel.category,
            id: funnel._id,
            document: funnel.document,
            projectImage: funnel.projectImage,
            teamName: funnel.teamName,
            teamImage: funnel.teamImage,
            video: funnel.video,
            country: funnel.country,
            email: funnel.email,
            show: true
        });
    }

    closeModal() {
        this.setState({ show: false });
        this.setState({
            projectName: '',
            projectState: '',
            currentAmount: '',
            onefoundRaiseAs: '',
            oneForWhoFoundsRaise: '',
            objectifAmount: '',
            zipCode: '',
            description: '',
            category: '',
            document: '',
            projectImage: '',
            teamName: '',
            teamImage: '',
            video: '',
            errors: {},
            id: '',
            country: '',
            email: '',
            isLoading: false,
        })
    }

    render() {
        const { show, zipCode, objectifAmount, projectName, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, description, id, category, document, projectImage, teamImage, video, email, feedback,  country, countries } = this.state;
        const { funnels, categories, foundRaiseAs, forWhoFoundsRaise } = this.props;
        console.log(funnels)
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-projectName">
                                <h5>Projects</h5>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <button type="button" className="btn btn-primary" onClick={() => this.setState({ show: true })} > New Project</button>
                                    </div>
                                    <FunnelModalForm feedback={feedback} categories={categories} id={id} category={category} zipCode={zipCode} description={description} projectName={projectName} projectState={projectState} currentAmount={currentAmount} teamName={teamName} forWhoFoundsRaise={forWhoFoundsRaise} oneForWhoFoundsRaise={oneForWhoFoundsRaise} video={video} show={show} projectImage={projectImage} teamImage={teamImage} document={document} foundRaiseAs={foundRaiseAs} onefoundRaiseAs={onefoundRaiseAs} objectifAmount={objectifAmount} email={email} country={country} countries={countries} closeModal={() => this.closeModal()} />
                                </div>
                                {funnels && funnels.length ? <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>zipCode</th>
                                                <th>Email</th>
                                                <th>Objectif Amount</th>
                                                <th>Current Amount</th>
                                                <th>Created At</th>
                                                <th className="pull-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {funnels && funnels.map((funnel, index) => (
                                                <Tr key={funnel._id} funnel={funnel} editFunnel={(funnel) => this.editFunnel(funnel)} formatDate={(date) => this.formatDate(date)} />
                                            ))}

                                        </tbody>
                                    </table>
                                </div> : ''}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default FunnelLIstAdmin;