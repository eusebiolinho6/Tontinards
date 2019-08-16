import React, { Component, Fragment } from 'react';

import {Link} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import MainLayout from '../../layouts/MainLayout';
import i18n from '../../../../traduction/landingPage/translation'

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
              <p  className="titleMain  text-center"><strong><span>{i18n.t('Invest')}</span> </strong><strong><br/>{i18n.t('landing1')}</strong></p>
              <p className="text-center getStarted">{i18n.t('landing2')}
              </p>
              <br/>
              <br/> 
              <div className="row allbuttons">
                <a key="landing3" href="/projects/campaigns" type="submit" className="btn addprojectBtn Link"> {i18n.t('landing3')} </a>
                <a key="landing4" href="/user/projects" type="submit" className="btn getfundBtn ">{i18n.t('landing4')}</a>
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
              <h3> {i18n.t('landing5')}</h3>
              <p >
              {i18n.t('landing6')}  
              <br/>
              <br/>
              {i18n.t('landing61')}
              </p>
              <br/>
              {/* <a type="btn btn-lg" href="#"> Learn more</a> */}
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
              <p className="firstText">{i18n.t('landing7')} &nbsp; 
              <strong>{i18n.t('landing71')}</strong>
              </p>
            </div>
            <div className="col-md-12 buttonsContainer">
              <a   href="/projects/campaigns/all" type="submit" className="btn addprojectBtn Link"> {i18n.t('landing8')} </a>
              <a href="/user/projects" type="submit" className="btn getfundBtn ">{i18n.t('landing9')}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FunnelList;