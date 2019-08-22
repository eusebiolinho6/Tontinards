import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';
import Footer from '../../globalComponents/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import usualManualForUserFr from '../../../../traduction/help/usualManualForUser/fr.json';
import usualManualForUserEn from '../../../../traduction/help/usualManualForUser/en.json';



class UserHelpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let lg = usualManualForUserFr;
    let lang = localStorage.getItem('lang')
     
          lang == 'fr'?
              lg = usualManualForUserFr
              :
              lg = usualManualForUserEn;
    return (
      <Fragment>
        <HeaderLayout />
        <section className="user-manual">
          <div className="container">
            <div className="row m-t-5 full-content">
              <div className="col">
                  <h2 className="text-center title">{lg.ManualforSimpleUser}</h2><hr/>
                  <div className="col-sm-12 content">
                    <h5 className="step text-center">{lg.SystemOverview}</h5>
                    <p>{lg.TontinardOverview}</p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step">{lg.TontinardDescription}</h5>
                      <h6 className="">{lg.signUp}</h6>
                      <p><strong>{lg.userScenario}</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.ClickOnRegister}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.afterClickOnRegister}</li>
                      </ul>
                      <img src="/images/manual/im1.png" />
                      <p><strong>{lg.Note}</strong>{lg.noteContent}</p>
                      <h6 className="">{lg.signIn}</h6>
                      <p><strong>{lg.userScenarioSignIn}</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnLogin}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.afterClickingOnLogin} </li>
                      </ul>
                      <img src="/images/manual/im2.png" />
                  </div>


                  <div className="col-sm-12 content">
                      <h5 className="step">{lg.menuUtilisateur}</h5>
                      <p>{lg.describeFuturesOfTontinard}<b>{lg.Waffo}</b>: <b>{lg.MyCampaigns}</b>, <b>{lg.Profile}</b>, <b>{lg.CreateProject}</b> {lg.and} <b>{lg.Logout}</b> {lg.thatwewilldiscusslater}
                      </p>
                      <img src="/images/manual/im3.png" />
                      <p>{lg.clickingOnIt}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b>{lg.MyCampaigns}: </b> &nbsp;{lg.myCampaignContent}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> {lg.Profile}:</b> &nbsp;{lg.profileContain}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> {lg.CreateProject}: </b> &nbsp;{lg.createProjectContain} </li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> {lg.Logout}: </b> &nbsp;{lg.logoutContain}</li>
                      </ul>
                      <h6 className="">{lg.createProjectUseCase}</h6>
                      <p><strong>{lg.userSCenarioCreateProjet}</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnGetFund}</li>
                        <img src="/images/manual/im4.png" />
                      </ul>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.Projectcreationform} </li>
                      </ul>
                      <p>{lg.Allinformation}</p>
                      <img src="/images/manual/im5.png" />
                      <p><strong>{lg.Note} </strong>{lg.ontheFundsRaiseAsoption} </p>
                      <h6 className="">{lg.myCampaignUseCase}</h6>
                      <p><strong>{lg.Asasimpleuser}</strong></p>
                      <p> {lg.Whenyouhavecreated}</p>
                      <img src="/images/manual/im6.png" />
                      <h6 className="">{lg.pendinProjet}</h6>
                      <p>{lg.Alltheprojects}</p>
                      <h6 className="">{lg.validatedProject}</h6>
                      <p>{lg.Alltheprojectssotheadministrator}</p>
                      <img src="/images/manual/im7.png" />
                      <h6 className="">{lg.campaignUseCase}</h6>
                      <p>{lg.AlltheprojectsthattheadminHasValidated}</p>
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

export default UserHelpPage;