import React, { Component, Fragment } from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Link} from 'react-router-dom';

// App component - represents the whole app
class LandingPage extends Component {
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
            <a  href="funnels/adminDashboard" type="submit" className="btn-lg btn-primary addprojectBtn">Add Project</a>
          </div>
        </div>
        <div className="embed-responsive embed-responsive-16by9 mainVideo">
          <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe>
        </div>
        <p className = "submainText">
          Crowdfunding is the practice of funding a project or venture by raising small amounts of money from a large number of people,
          typically via the Internet. Crowdfunding is a form of crowdsourcing and alternative finance. In 2015, over US$34 billion was raised worldwide by crowdfunding
        </p>

        {/*---- Previous One ----*/}
        {/* <MainLayout isFree={isFree} toggleFree={(b)=>this.toggleFree(b)} search={location.search} params={match.params} /> */}
        
        <MainLayout  />

        <Link to={{pathname:'/admin/admindashboard'}} className="btn btn-primary donateBtn">adminDashboard </Link>

      </div>
    )
  }
}

export default LandingPage;