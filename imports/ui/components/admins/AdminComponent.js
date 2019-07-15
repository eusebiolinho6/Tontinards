import React, { Component, Fragment } from 'react';
import FunnelModalForm from './../funnels/Funnel-Modal-Form';
import Input from '../../globalComponents/Input'
import Tr from '../../globalComponents/Tr'
import {Modal, Button} from 'react-bootstrap';
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
            onefoundRaiseAs: '',
            oneForWhoFoundsRaise: '',
            objectifAmount : '',
            zipCode: '',
            description: '',
            industry: '',
            category:'',
            document:'',
            image:'',
            video:'',
            id: '',
            country:'',
            countries : [],
            show: false
        };
    }
    componentWillReceiveProps()
    {
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

    editFunnel(funnel){
        this.setState({
            zipCode: funnel.zipCode,
            objectifAmount : funnel.objectifAmount,
            onefoundRaiseAs: funnel.onefoundRaiseAs,
            oneForWhoFoundsRaise : funnel.oneForWhoFoundsRaise,
            description: funnel.description,
            projectName: funnel.projectName,
            category: funnel.category,
            industry: funnel.industry,
            id:funnel._id,
            document: funnel.document,
            image: funnel.image,
            video: funnel.video,
            country: funnel.country,
            show: true
        });
    }

    closeModal(){
        this.setState({show:false});
        this.setState({
            projectName: '',
            onefoundRaiseAs:'',
            oneForWhoFoundsRaise : '',
            objectifAmount : '',
            zipCode: '',
            description: '',
            industry: '',
            category: '',
            document:'',
            image: '',
            video: '',
            errors: {},
            id: '',
            country:'',
            isLoading: false,
        })
    }

    render() {
         const { show, zipCode, objectifAmount ,projectName, onefoundRaiseAs, oneForWhoFoundsRaise ,description, industry,id, category, document, image,video, country, countries } = this.state;
        const {funnels, industries,categories, foundRaiseAs, forWhoFoundsRaise }=this.props;
        
        return (
    <div className="wrapper wrapper-content animated fadeInRight">
   <div className="row">

<div className="col-lg-12">
    <div className="ibox float-e-margins">
        <div className="ibox-projectName">
            <h5>Funnel List</h5>
        </div>
        <div className="ibox-content">
            <div className="row">
             <div className="col-sm-3">
                    <button type="button" className="btn btn-primary" onClick={()=> this.setState({show:true}) } > New Funnel</button>
            </div>
            <FunnelModalForm industries={industries} categories={categories} id={id} category={category} zipCode={zipCode} description={description} projectName={projectName} industry={industry} forWhoFoundsRaise = {forWhoFoundsRaise} oneForWhoFoundsRaise={oneForWhoFoundsRaise}video={video} show={show} image={image} document={document} foundRaiseAs={foundRaiseAs} onefoundRaiseAs={onefoundRaiseAs} objectifAmount = {objectifAmount} country={country}  countries = {countries} closeModal={()=>this.closeModal()} />
             </div>
            {funnels&&funnels.length?<div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Industry</th>
                        <th>Category</th>
                        <th>zipCode</th>
                        <th>Created At</th>
                        <th className="pull-right">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {funnels&&funnels.map((funnel, index)=>(
                            <Tr key={funnel._id} funnel={funnel} editFunnel={(funnel)=>this.editFunnel(funnel)} formatDate={(date)=>this.formatDate(date)}/>
                    ))}
                    
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