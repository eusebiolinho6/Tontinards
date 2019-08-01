import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
import AdminDashboard from '../admins/AdminDashboard';
import FunnelDetailsPage from './FunnelsDetailsPage'
import {Link} from 'react-router-dom';

// App component - represents the whole app
class FunnelList extends Component {
  constructor(props) {
    super(props);
    this.state={
      isFree:false
    }
  }

    toggleFree(b) {
      this.setState({isFree:b});
    }

  render() {
    const {match, location} = this.props; 
    const {isFree}=this.state;
    return (
      <div className="container-fluid no-padding">
        <div className="row no-padding">
          <div className="col-md-12 no-padding bg-overlay text-center ">
            <h1 className="mainText container text-center">Get Funding and Develop your Business</h1>
            <br/>
            <br/>
            <a  href="/admin/funnels" type="submit" className="btn-lg btn-primary addprojectBtn">Add Project</a>
          </div>
        </div>
        <div className="embed-responsive embed-responsive-16by9 text-center mainVideo">
          <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe>
        </div>
        <div className="col-md-12 submainTextContainer">
          <p className = "submainText">
            Crowdfunding is the practice of funding a project or venture by raising small amounts of money from a large number of people,
            typically via the Internet. Crowdfunding is a form of crowdsourcing and alternative finance. In 2015, over US$34 billion was raised worldwide by crowdfunding
          </p>
        </div>
        <div className="col-md-12">
          <MainLayout isFree={isFree} toggleFree={(b)=>this.toggleFree(b)} search={location.search} params={match.params} />
          <Link to={{pathname:'/admin/admindashboard'}} className="btn btn-primary donateBtn">adminDashboard </Link>
        </div>

        <div className="col-md-12 col-sm-12 descriptionDiv">
          <div className="col-md-2 col-sm-2"></div>
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="col-md-6">
            < img src = "/images/img3.PNG"
                className = "imgWhyTontinard"
                alt = "Goal Image"
              />
            </div>
            <div className="col-md-6 descriptionText">
              <h3> Why Tontinard?</h3>
              <p >
                Qui aime est patient et bon, il n'est pas envieux, ne se vante pas et n'est pas prétentieux; qui aime ne fait rien de honteux, n'est pas égoïste, ne s'irrite pas et n'éprouve pas de rancune. Qui aime supporte tout et garde en toute circonstance la foi, l'espérance et la patience. 
              </p>
              <br/>
              <a type="btn btn-lg" href="#"> Learn more</a>
            </div>
          </div>
          <div className="col-md-2 col-sm-2"></div>
        </div>

        <div className="col-md-12 col-sm-12 fullwidthBlue no-padding">
          <div className="col-md-4 col-sm-2 col-xs-2"></div>
          <div className="col-md-4 col-sm-8 col-xs-8 centerDiv">
            <p className="firstText">
              Interested in <strong>raisong funds for your business now?</strong>
            </p>
            <p className="secondText">Get started below</p>
            <a type="btn btn-lg" href="#"> Let's Get Started</a>
          </div>
          <div className="col-md-4 col-sm-2 col-xs-2"></div>
        </div>

      </div>
    )
  }
}

export default FunnelList;