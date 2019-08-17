import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';
import Footer from '../../globalComponents/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


class HelpPage extends Component {
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
                  <h2 className="text-center title">User manual for donor</h2><hr/>
                  <div className="col-sm-12 content">
                      <p className=""><span>Goal:</span> This document will help a donor to know well all step to make a donation.</p>
                      <p className=""><span>Donor role:</span> his role is to choose a project and then click on the donation button to make a donation to the person who subscribed to the project. This is to help them for the growth of their project.</p>
                      <p className=""><strong>As a donor you want to make a donation:</strong></p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>STEP 1:</u> Start Funding </h5>
                      <img src="/images/manual/img1.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on a “Start Funding” button</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> When you click on “Start Funding” button all the projects of Tontinards are displayed</li>
                      </ul>
                      <img src="/images/manual/img2.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>STEP 2:</u> Choose category and project you want to donate</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on one of project’s category </li>
                      </ul>
                      <img src="/images/manual/img3.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> After choosing project’s category choose project you want to donate</li>
                      </ul>
                      <img src="/images/manual/img4.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on “Details” button</li>
                      </ul>
                      <img src="/images/manual/img5.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> After clicking on Details button you can see the detail of the project that you want to donate</li>
                      </ul>
                      <img src="/images/manual/img6.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>STEP 3:</u> Make a donation</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Click on “Donate” button</li>
                      </ul>
                      <img src="/images/manual/img7.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> After cliking on “Donate” button you should fill this form and click on “submit”</li>
                      </ul>
                      <img src="/images/manual/img8.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>STEP 4:</u> Receive Email</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> After submit you should receive this kind of email</li>
                      </ul>
                      <img src="/images/manual/img10.png" />
                      <img src="/images/manual/img9.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> After this reception of message, your donation will validate only after that we’ll get your money physically.</li>
                      </ul>
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

export default HelpPage;