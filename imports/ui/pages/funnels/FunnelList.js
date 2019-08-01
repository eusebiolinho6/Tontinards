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
            <p className="mainText container text-center">Want to <strong>raise funds <br/>for your business ?</strong></p>
            <p className="text-center">Get started below</p>
            <br/>
            <br/>
            <a  href="/admin/funnels" type="submit" className=" addprojectBtn Link">Lets get started</a>
          </div>
          <div className="toggle-downIcon text-center">
            <a href="#Help" className="Link">
              <span class="glyphicon glyphicon-menu-down "  aria-hidden="true">
              </span>
            </a>
          </div>
        </div>
        
        <div className="row no-padding helpSection" id="Help">
          {/* <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe> */}
          <div className="row helpTitle">
              <p >We are here to <strong>help you</strong></p>
          </div>
          
           <div className="helpContainer  ">  
              <div className="help col-xs-3">
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

      </div>
    )
  }
}

export default FunnelList;