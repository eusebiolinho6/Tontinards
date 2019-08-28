import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import MainLayout from '../../layouts/MainLayout';
import landingFr from '../../../../traduction/landingPage/fr.json'
import landingEn from '../../../../traduction/landingPage/en.json';
import '../../../../client/css/home.css';

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
      let lg = landingFr;
      let lang = localStorage.getItem('lang')
      
      lang == 'fr'?
          lg = landingFr
          :
          lg = landingEn;
    return (
      <Fragment>
        <div className="container-fluid" id="main-content">
          <section id="firstSection">
            <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6 image-container">
                      <img src="/images/imge1.png" className="imgfirstcontain"></img>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6 right-container">
                    <div className="textWrapper">
                      <h2 className="titleMain"><strong><span>{lg.Invest}</span> </strong><strong><br/>{lg.landing1}</strong></h2>
                      <p className="getStarted">{lg.landing2}</p>
                    </div>
                    <div className="allbuttons">
                      <a key="landing3" href="/projects/campaigns" type="submit" className="btn addprojectBtn"> {lg.landing3} </a>
                      <a key="landing4" href="/user/projects" type="submit" className="btn getfundBtn ">{lg.landing4}</a>
                  </div>
                  </div>
              </div>
            </div>
          </section>
        </div>

        <section id="secondSection">
          <div className="container-fluid">
            <div className="descriptionContainer row">
                <div>
                    <div className="col-md-6 col-sm-7 col-xs-12">
                      <h3> {lg.landing5}</h3>
                      <p >
                        {lg.landing6}  
                        <br/>
                        <br/>
                        {lg.landing61}
                      </p>
                      <br/>
                      {/* <a type="btn btn-lg" href="#"> Learn more</a> */}
                    </div>
                    <div className="col-md-6 col-sm-5">
                      <img src = "/images/imge2.png"
                          className = "imgWhyTontinard"
                          alt = "Goal Image"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Project List */}
        <div className="container-fluid" id="projects-content">
            <section id="projectlist-wrapper">
                <div className="container-fluid" id="container-fluid">
                  <div className="row">
                    <MainLayout isFree={isFree} toggleFree={(b)=>this.toggleFree(b)}  />
                  </div>
              </div>
            </section>
        </div>

        <section id="fourthSection">
          <div className="container-fluid">
            <div className="callToActionContainer row">
              <div className="col-md-12">
                  <div className="col-md-3 col-sm-1"></div>
                  <div className="col-md-6 col-sm-10 col-xs-12">
                    <p>{lg.landing7} &nbsp; 
                      <strong>{lg.landing71}</strong>
                    </p>
                  </div>
                  <div className="col-md-12 buttonsContainer">
                    <a href="/projects/campaigns" type="submit" className="btn fundBtn"> {lg.landing8} </a>
                    <a href="/user/projects" type="submit" className="btn getFundedBtn">{lg.landing9}</a>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default FunnelList;