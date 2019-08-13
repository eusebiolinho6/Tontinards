import React, { Component, Fragment } from 'react';

import {Link} from 'react-router-dom';

import AdminDashboard from '../admins/AdminDashboard';
import MainLayout from '../../layouts/MainLayout';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout'

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
    const {isFree}=this.state;

    return (
      <div className="container-fluid no-padding">
        <div className="row no-padding">
          <div className="col-md-12 no-padding firstContain  text-center ">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6 ">
              <img src="/images/imge1.png" className="imgfirstcontain "></img>
            </div>
            <div className="firstContaindiv col-md-6 col-sm-6 col-xs-6" >
              <p className="titleMain  text-center"><strong><span>Invest in Cameroon’s</span> </strong><strong><br/>most promising startups</strong></p>
              <p className="text-center getStarted">We have selected Cameroon’s most promising startups so you can
                invest to share future profits or just invest to support a project you
                are interested in.
              </p>
              <br/>
              <br/> 
              <div className="row allbuttons">
                <a  href="/projects/campaigns" type="submit" className="btn addprojectBtn Link"> Start Funding </a>
                <a  href="/user/projects" type="submit" className="btn getfundBtn ">Get Funded</a>
              </div>
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
        <div className="col-md-12 col-sm-12 descriptionDiv">
          <div className="col-md-2 col-sm-2"></div>
          <div className="col-md-8 col-sm-8 col-xs-12">
           <div className="col-md-6 col-sm-7 col-xs-8 descriptionText">
              <h3> Why Tontinards?</h3>
              <p >
                African Solidarity meets Profitability!
                <br/>
                <br/>

                It’s simple! Because no other people have more solidarity than Africans. Most Africans help their family members like brothers, sisters, aunts, cousines, father, mother, friends, tribesmen, colleagues and the list goes on.
                All what the Tontinard platform carefully select the most promising startups, so that you can enjoy showing your African solidarity by supporting a project you love and sharing in the future profit.
                  
              </p>
              <br/>
              <a type="btn btn-lg" href="#"> Learn more</a>
            </div>
            <div className="col-md-6 col-sm-5 col-xs-4 imgWhyTontinardDiv">
              <img src = "/images/imge2.png"
                  className = "imgWhyTontinard"
                  alt = "Goal Image"
                />
            </div>
          </div>
          <div className="col-md-2 col-sm-2"></div>
        </div>
        <section id="projectlist-wrapper">
          <div className="container-fluid" id="container-fluid">
            <div className="col-md-12">
              <MainLayout isFree={isFree} toggleFree={(b)=>this.toggleFree(b)}  />
            </div>
          </div>
        </section>
        <div className="col-md-12 col-sm-12 fullwidthBlue no-padding">
          <div className="col-md-2 col-sm-2 col-xs-0"></div>
          <div className="col-md-8 col-sm-8 col-xs-12 centerDiv">
            <div className="col-md-12 firstTextDiv">
              <p className="firstText">
                Do you want to <strong>join us transform Africa’s solidarity to Profit?</strong>
              </p>
            </div>
            <div className="col-md-12 buttonsContainer">
              <a  href="/projects/campaigns/all" type="submit" className="btn addprojectBtn Link"> Start Funding </a>
              <a  href="/user/projects" type="submit" className="btn getfundBtn ">Get Funded</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FunnelList;