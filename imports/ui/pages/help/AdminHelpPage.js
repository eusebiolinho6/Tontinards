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
                  <h2 className="text-center title">User manual for Administrator</h2><hr/>
                  <div className="col-sm-12 content">
                    <h5 className="step text-center">GOAL</h5>
                    <p>This document is intended to help you use the product. It explains the why, the how and what happens if the task is not executed correctly</p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step">1. PRESENTATION</h5>
                      <h6 className="">1.1 Administrator role</h6>
                      <p>User concerned here is the administrator. Its role is, on the one hand, to select or reject the projects, and on the other hand, to format the selected projects in such a way that it respects the requirements of the projects that can be financed in order to finally make them visible to all, in order to they are funded</p>
                      <h6 className="">1.1 Administrator features</h6>
                      <p>Features that concerns the administrator are:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> <b>Validate project</b></li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> <b>Refused project</b></li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> <b>Start campaign</b></li>
                      </ul>

                      <h5 className="step">2. DESCRIPTIONS</h5>
                      <h6 className="">1.1 Log in</h6>
                      <p>As administrator you want to log in.</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Go to www.tontinards.biz:</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on "Login"</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> On this page, your username and your password or connections to social networks such as facebook twitter and google will be you requested</li>
                      </ul>
                      <img src="/images/manual/admin/im1.png" />
                      <p>Now that you are logged in as an administrator, we will describe all the features of the application one after the other.</p>
                      <h6 className="">1.2 Administrator Menu</h6>
                      <p>The "Admin" menu contains all the features that allow the administrator to configure the application, namely:</p>
                      <img src="/images/manual/admin/im2.png" />
                      <h6 className="">2.1.1 Categories</h6>
                      <p>The category menu allows the administrator to add new project categories. To do that:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Clicks on the category menu in admin.</li>
                      </ul>
                      <img src="/images/manual/admin/im3.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on new category button.</li>
                      </ul>
                      <img src="/images/manual/admin/im4.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Fill in the form then click on Save.</li>
                      </ul>
                      <img src="/images/manual/admin/im5.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> The new category is added to the list of projects below.</li>
                      </ul>
                      <img src="/images/manual/admin/im6.png" />
                      <h6 className="">2.2.2 Funds Raise As</h6>
                      <p>The Funds Raising As menu allows the administrator to add a new type of fundraiser (team individual). To do that:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Clicks on the Funds Raising As menu in admin.</li>
                      </ul>
                      <img src="/images/manual/admin/im7.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on new Funds Raising As button.</li>
                      </ul>
                      <img src="/images/manual/admin/im8.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Fill in the form then click on Save.</li>
                      </ul>
                      <img src="/images/manual/admin/im9.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> The new Fund Raising As is added to the list of projects below.</li>
                      </ul>
                      <img src="/images/manual/admin/im10.png" />
                      <h6 className="">2.2.3 Funds Raise For</h6>
                      <p>The Funds Raise For menu allows the administrator to add a new type of person for whom fundraising is done collecting funds. To do that:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Clicks on the Funds Raise For menu in admin.</li>
                      </ul>
                      <img src="/images/manual/admin/im11.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on new Funds Raise For button.</li>
                      </ul>
                      <img src="/images/manual/admin/im12.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Fill in the form then click on Save.</li>
                      </ul>
                      <img src="/images/manual/admin/im13.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> The new Funds Raise For is added to the list of projects below.</li>
                      </ul>
                      <img src="/images/manual/admin/im14.png" />
                      <h6 className="">2.2.4 Donation</h6>
                      <p>The Donation menu allows the administrator to confirm or reject a donation. To do that:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Clicks on the Donate menu in admin.</li>
                      </ul>
                      <img src="/images/manual/admin/im15.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on new Donation Type button.</li>
                      </ul>
                      <img src="/images/manual/admin/im16.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Choose a particular donation for which you have collected money and click on Validate to confirm that the donation is effective.</li>
                      </ul>
                      <img src="/images/manual/admin/im16-1.png" />
                      <img src="/images/manual/admin/im16-2.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Choose a donation for which you have not recovered money and click Delete to cancel the entry.</li>
                      </ul>
                      <img src="/images/manual/admin/im17.png" />

                      <h6 className="">2.3 Contextual Menu</h6>
                      <p>The Contextual Menu contains all the features related to the connected user, namely:</p>
                      <h6 className="">2.3.1 Dashboard</h6>
                      <p>Dashboard menu allows you to manage projects submitted by project promoters. To do that:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Hover over the user's name.</li>
                      </ul>
                      <img src="/images/manual/admin/im18.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Dashboard menu.</li>
                      </ul>
                      <img src="/images/manual/admin/im19.png" />
                      <p>Manage a project consists in carrying out several operations,  which consist in making evolve the project.</p>
                      <p>In the Dashboard page there is a menu whose buttons represent the steps by which a project passes. We have:</p>
                      <h6 className="">2.3.1.1 Pending Projects</h6>
                    <p>In Pending Projects menu, we find the list of submitted projects waiting to be processed.</p>
                    <p>On each project in this section, we can apply two types of processing, Namely:</p>
                    <h6 className="">2.3.1.1.1 Validate project</h6>
                    <p>Validate a project is to say that it is worthy of interest, therefore it is selected. To do this, proceed as follows:</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Validate project.</li>
                    </ul>
                    <img src="/images/manual/admin/im20.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Select a project.</li>
                    </ul>
                    <img src="/images/manual/admin/im21.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Detail.</li>
                    </ul>
                    <img src="/images/manual/admin/im22.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Validate</li>
                    </ul>
                    <img src="/images/manual/admin/im23.png" />
                    <h6 className="">2.3.1.1.2 Refuse project</h6>
                    <p>Refusing a project is to say that it is not worthy of interest, so it is rejected. For that, proceed as following:</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Validate project</li>
                    </ul>
                    <img src="/images/manual/admin/im24.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Select a project</li>
                    </ul>
                    <img src="/images/manual/admin/im25.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Detail</li>
                    </ul>
                    <img src="/images/manual/admin/im26.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Refuse</li>
                    </ul>
                    <img src="/images/manual/admin/im27.png" />

                    <h6 className="">2.3.1.2 Validated Projects</h6>
                    <p>In the Validated Projects menu, we find the list of previously validated projects that are pending processing.</p>
                    <p>On each project in this section, we can apply two types of processing, namely:</p>
                    <h6 className="">2.3.1.2.1 Edit projects</h6>
                    <p>Editing a project is perfecting it to meet the standards of a financeable project. For that, proceed as following:</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Validated Project.</li>
                    </ul>
                    <img src="/images/manual/admin/im28.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Select a project.</li>
                    </ul>
                    <img src="/images/manual/admin/im29.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Edit.</li>
                    </ul>
                    <img src="/images/manual/admin/im30.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Modify the necessary fields( Add project video ).</li>
                    </ul>
                    <img src="/images/manual/admin/im31.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Save</li>
                    </ul>
                    <img src="/images/manual/admin/im32.png" />
                    <h6 className="">2.3.1.2.2 Start Campaign</h6>
                    <p>Launch a campaign is to confirm that a project is ready to receive donations, ie it meets the standards of the platform in terms of financeable project.  For that, proceed as following:</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Validated Project</li>
                    </ul>
                    <img src="/images/manual/admin/im33.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Select a project</li>
                    </ul>
                    <img src="/images/manual/admin/im34.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Detail</li>
                    </ul>
                    <img src="/images/manual/admin/im35.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Start Campaign</li>
                    </ul>
                    <img src="/images/manual/admin/im36.png" />
                    <h6 className="">2.3.1.3 Campaign</h6>
                    <p>In the Campaign menu, we find the list of campaigns started (project in expectation of financing).<br/>To gain access, simply click on the Campaign menu button.</p>
                    <img src="/images/manual/admin/im37.png" />
                    <h6 className="">2.3.2 Profile</h6>
                    <p>Le menu Profile vous permet de mettre à jour vos information utilisateur au besoin (Nom, Email, UserName).</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Hover over the user's name</li>
                    </ul>
                    <img src="/images/manual/admin/im38.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on the Profile menu</li>
                    </ul>
                    <img src="/images/manual/admin/im39.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Fill in the necessary fields</li>
                    </ul>
                    <img src="/images/manual/admin/im40.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on Save</li>
                    </ul>
                    <img src="/images/manual/admin/im41.png" />


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