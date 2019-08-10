import React, { Component, Fragment } from 'react';

import {Link} from 'react-router-dom';

import AdminDashboard from '../admins/AdminDashboard';
import MainLayout from '../../layouts/MainLayout';

import FunnelDetailsPage from './FunnelsDetailsPage';

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
          <div className="col-md-12 no-padding firstContain  text-center ">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/imge1.png" className="imgfirstcontain "></img>
            </div>
            <div className="firstContaindiv col-md-6" >
              <p className="titleMain  text-center"><strong><span>Invest in Cameroon’s</span> </strong><strong><br/>most promising startups</strong></p>
              <p className="text-center getStarted">We have selected Cameroon’s most promising startups so you can</p>
              <p className="text-center getStarted">invest to share future profits or just invest to support a project you</p>
              <p className="text-center getStartedlast">are interested in.</p>
              <br/>
              <br/> 
                <a  href="/" type="submit" className=" addprojectBtn Link"> Start Funding </a>
                <a  href="/" type="submit" className=" getfundBtn ">Get Funded</a>
            </div>
          </div>
          </div>
        </div>
        <div className="row no-padding helpSection" id="Help">
            <div className="row toggleiconwrapper">
              <div className="toggle-downIcon">
                <a href="#Help" className="Link">
                  <span className="glyphicon glyphicon-menu-down"  aria-hidden="true">
                  </span>
                </a>
              </div>
            </div>
         
       </div>
        <section id="projectlist-wrapper">
          <div className="container-fluid" id="container-fluid">
            <div className="col-md-12">
              <MainLayout isFree={isFree} toggleFree={(b)=>this.toggleFree(b)} search={location.search} params={match.params} />
            </div>
          </div>
        </section>

        <div className="col-md-12 col-sm-12 descriptionDiv">
          <div className="col-md-2 col-sm-2"></div>
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="col-md-6">
            <img src = "/images/img1.png"
                className = "imgWhyTontinard"
                alt = "Goal Image"
              />
            </div>
            <div className="col-md-6 descriptionText">
              <h3> Why Tontinards?</h3>
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
            <br/>
            <a type="btn btn-lg" href="#" className=" addprojectBtn Link"> Let's Get started</a>
          </div>
          <div className="col-md-4 col-sm-2 col-xs-2"></div>
        </div>

      </div>
    )
  }
}

export default FunnelList;