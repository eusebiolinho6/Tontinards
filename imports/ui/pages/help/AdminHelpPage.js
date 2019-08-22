import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';
import Footer from '../../globalComponents/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


class AdminHelpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <HeaderLayout />
        <section className="user-manual">
          <div className="container">
            <div className="row m-t-5 full-content">
              <div className="col">
                  <h2 className="text-center title">Manual for Admin</h2><hr/>
                  <div className="col-sm-12 content">
                    <h5 className="step text-center">System Overview</h5>
                    <p>Tontinards is a platform web, which connects people who have professional or personal projects and people who have financing capabilities.The application saves project data submitted by the funding applicants in the database.</p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step">2. DESCRIPTION OF EACH USE CASE FOR SIMPLE USER</h5>
                      <h6 className="">2.1 SIGN UP</h6>
                      <p><strong>As a simple user you want to Register :</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on "Register"</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> On this page, your username, your password and email or connections to social networks such as facebook twitter and google will be you requested.</li>
                      </ul>
                      <img src="/images/manual/im1.png" />
                      <p><strong>Note! :  </strong>Note that there is only one login and therefore only one password per account. To validate click on "Save".</p>
                      <h6 className="">2.2 SIGN IN</h6>
                      <p><strong>As a simple user you want to Log In:</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on "Login"</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> On this page, your username and your password or connections to social networks such as facebook twitter and google will be you requested.</li>
                      </ul>
                      <img src="/images/manual/im2.png" />
                  </div>


                  <div className="col-sm-12 content">
                      <h5 className="step">3. MENU UTILISATEUR</h5>
                      <p>Now that you are logged in, you enter the "Tontinards" web application. We will describe all the features of the application after others. As soon as you connect, On the right is a tab at name of your account, in this example <b>"Waffo"</b>: <b>"My Campaigns"</b>, <b>"Profile"</b>, <b>"Create Project"</b> and <b>"Logout"</b> that we will discuss later.
                      </p>
                      <img src="/images/manual/im3.png" />
                      <p>Clicking on it opens a dialog box with 4 possibilities:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "My Campaigns": </b> &nbsp;Vous permet de retrouver le statut de toutes vos campagnes en cours.</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Profile": </b> &nbsp;Allows you to change the "User" settings</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Create Project": </b> &nbsp;Allows you to create a project that will be valid and accepted by an administrator for it to be a campaign </li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Logout": </b> &nbsp;Allows you to disconnect</li>
                      </ul>
                      <h6 className="">3.1 CREATE PROJECT</h6>
                      <p><strong>As a simple user you want to Create Project:</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> By logging in you have to create your project. To do this, click on "Get Funded" on the landing page:</li>
                        <img src="/images/manual/im4.png" />
                      </ul>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Project creation form </li>
                      </ul>
                      <p>All information is not mandatory but more your project has enough information, the easier it will be for the administrator to better understand the project and validate it. Do not hesitate for example, to add a complete description. You must also choose (Project Name, Phone Number, Category project image, Project Document and Project Video) as a required field To continue, click on "save".</p>
                      <img src="/images/manual/im5.png" />
                      <p><strong>Note! </strong> on the "Funds Raise As" option if the user selected An individual the project image field is no longer available standard. You have just finalized the creation of your project. It will now appear on the web application among your submitted projects (campaigns pending).</p>
                      <h6 className="">3.2 MY CAMPAIGN</h6>
                      <p><strong>As a simple user you want to Manage My Campaigns :</strong></p>
                      <p> When you have created and managed your projects, they will appear as a list in the "Filter Options" tab as below By default, the projects that will are the "Pending" projects. You can access other projects through filters (Validated projects or Campaigns) as below we describe each state of project.</p>
                      <img src="/images/manual/im6.png" />
                      <h6 className="">3.2.1 Pending projects</h6>
                      <p>All the projects so the administrator has not valid are listed in this part and by default when we have just created a project it is positioned in "Pending" projects.</p>
                      <h6 className="">3.2.2 Validated projects</h6>
                      <p>All the projects so the administrator has validated are listed in this part and the administrator will be able to make reviews to improve the project so that it goes to the state of campaign</p>
                      <img src="/images/manual/im7.png" />
                      <h6 className="">3.2.3 Campaigns</h6>
                      <p>All the projects that the administrator has validated and starts a campaign are listed in this part and can be displayed with the admin reviews to make the campaign more credible.</p>
                      <img src="/images/manual/im8.png" />
                  </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export default AdminHelpPage;