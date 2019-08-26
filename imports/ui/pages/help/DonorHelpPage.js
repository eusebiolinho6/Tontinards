import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';
import Footer from '../../globalComponents/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import donorHelpFr from '../../../../traduction/help/donorHelp/fr.json'
import donorHelpEn from '../../../../traduction/help/donorHelp/en.json'


class HelpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let lg = donorHelpFr;
    let lang = localStorage.getItem('lang');
       lang == 'fr'?
            lg = donorHelpFr
        :
            lg = donorHelpEn;
    return (
      <Fragment>
        <HeaderLayout />
        <section className="user-manual">
          <div className="container">
            <div className="row m-t-5 full-content">
              <div className="col">
                  <h2 className="text-center title">{lg.title}</h2><hr/>
                  <div className="col-sm-12 content">
                      <p className=""><span>{lg.goal}</span> {lg.thisDoc}</p>
                      <p className=""><span>{lg.donorRole}</span> {lg.hisRole}</p>
                      <p className=""><strong>{lg.asDonor}</strong></p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>{lg.step1}</u> {lg.startFunding} </h5>
                      <img src="/images/manual/img1.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickFdBtn}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.whenyou}</li>
                      </ul>
                      <img src="/images/manual/img2.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>{lg.step2}</u> {lg.chooseCategory}</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickoneProject}</li>
                      </ul>
                      <img src="/images/manual/img3.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.afterChoose}</li>
                      </ul>
                      <img src="/images/manual/img4.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickDetail}</li>
                      </ul>
                      <img src="/images/manual/img5.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.afterDetail}</li>
                      </ul>
                      <img src="/images/manual/img6.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>{lg.step3}</u> {lg.makeDonation}</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickDonate}</li>
                      </ul>
                      <img src="/images/manual/img7.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.afterDonate}</li>
                      </ul>
                      <img src="/images/manual/img8.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>{lg.step4}</u> {lg.receiveEmail}</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.afterSubmit}</li>
                      </ul>
                      <img src="/images/manual/img10.png" />
                      <img src="/images/manual/img9.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.afterReception}</li>
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