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
          <div className="col-md-12 no-padding bg-overlay text-center ">
            <p className="titleMain  text-center">Want to <strong>raise funds <br/>for your business ?</strong></p>
            <p className="text-center" id="getStarted">Get started below</p>
            <br/>
            <br/> 
              <a  href="/" type="submit" className=" addprojectBtn Link">Let's Get started</a>
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
          {/* <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe> */}
           <br/>
           <br/>
          
          <div class="row helpTitle">
              <p >We are here to <strong>help you</strong></p>
          </div>
          
           <div className="helpContainer ">
              <div className="help">
                  <img src="/images/user.png" className="helpImgIcon"></img>
                  <br/>
                  <br/>

                  <p>
                    <strong>Get the rigth people to fund your bussiness</strong>
                  </p>
                  <br/>
                  <p>  
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et 
                  la mise en page avant impression. 
                  Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                  </p>
              </div>

              <br/>
              <div className="help" >
              <img src="/images/user.png" className="helpImgIcon"></img>
                  <br/>
                  <br/>
                 
                  <p>
                    <strong>Get the rigth people to fund your bussiness</strong>
                  </p>
                  <br/>
                  <p>  
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et 
                  la mise en page avant impression. 
                  Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                  </p>
              </div>

              <br/>
              <div className="help">
              <img src="/images/user.png" className="helpImgIcon"></img>
                  <br/>
                  <br/>
                 
                  <p>
                    <strong>Get the rigth people to fund your bussiness</strong>
                  </p>
                  <br/>
                  <p>  
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et 
                  la mise en page avant impression. 
                  Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                  </p>
              </div>
           </div>
           <br/>
           <br/>
           <br/>
           <br/>
           
        </div>
        {/* <div className="col-md-12 submainTextContainer">
          <p className = "submainText">
            Crowdfunding is the practice of funding a project or venture by raising small amounts of money from a large number of people,
            typically via the Internet. Crowdfunding is a form of crowdsourcing and alternative finance. In 2015, over US$34 billion was raised worldwide by crowdfunding
          </p>
        </div> */}
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
           <div className="col-md-6 descriptionText">
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
            <div className="col-md-6">
              <img src = "/images/imge1.png"
                  className = "imgWhyTontinard"
                  alt = "Goal Image"
                />
            </div>
          </div>
          <div className="col-md-2 col-sm-2"></div>
        </div>

        <div className="col-md-12 col-sm-12 fullwidthBlue no-padding">
          <div className="col-md-4 col-sm-2 col-xs-2"></div>
          <div className="col-md-4 col-sm-8 col-xs-8 centerDiv">
            <p className="firstText">
              Do you want to <strong>join us transform Africa’s solidarity to Profit?</strong>
            </p>
            <br/>
            {/*these links Will come from cindy */}
            <a type="btn btn-lg" href="#" className=" addprojectBtn Link"> Start Funding</a>
            <a type="btn btn-lg" href="#" className=" addprojectBtn Link"> Get Funding</a>
          </div>
          <div className="col-md-4 col-sm-2 col-xs-2"></div>
        </div>

      </div>
    )
  }
}

export default FunnelList;