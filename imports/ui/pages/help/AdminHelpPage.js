import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';
import Footer from '../../globalComponents/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import adminHelpFr from '../../../../traduction/help/adminHelp/fr.json'
import adminHelpEn from '../../../../traduction/help/adminHelp/en.json'


class AdminHelpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let lg = adminHelpFr;
    let lang = localStorage.getItem('lang');
       lang == 'fr'?
            lg = adminHelpFr
        :
            lg = adminHelpEn;

    return (
      <Fragment>
        <HeaderLayout />
        <section className="user-manual">
          <div className="container">
            <div className="row m-t-5 full-content">
              <div className="col">
                  <h2 className="text-center title">{lg.title}</h2><hr/>
                  <div className="col-sm-12 content">
                    <h5 className="step text-center">{lg.goal}</h5>
                    <p>{lg.thisDoc}</p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step">{lg.presentation}</h5>
                      <h6 className="">{lg.adminRole}</h6>
                      <p>{lg.userConcern}</p>
                      <h6 className="">{lg.adminFeature}</h6>
                      <p>{lg.featuresthat} </p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> <b>{lg.validateProject}</b></li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> <b>{lg.refuseProject}</b></li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> <b>{lg.startCampaign}</b></li>
                      </ul>

                      <h5 className="step">{lg.description}</h5>
                      <h6 className="">{lg.login}</h6>
                      <p>{lg.asAdmin}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.goto}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickLogin}</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.onThisPage} </li>
                      </ul>
                      <img src="/images/manual/admin/im1.png" />
                      <p>{lg.nowThat}</p>
                      <h6 className="">{lg.adminMenu}</h6>
                      <p>{lg.theAdminMenu}</p>
                      <img src="/images/manual/admin/im2.png" />
                      <h6 className="">{lg.category}</h6>
                      <p>{lg.theCategory}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clicksOnTheCategory}</li>
                      </ul>
                      <img src="/images/manual/admin/im3.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnNew} </li>
                      </ul>
                      <img src="/images/manual/admin/im4.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.fillInTheForm} </li>
                      </ul>
                      <img src="/images/manual/admin/im5.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.theNewCategory}</li>
                      </ul>
                      <img src="/images/manual/admin/im6.png" />
                      <h6 className="">{lg.fundRaiseAs}</h6>
                      <p>{lg.theFundRaiseAs}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnFundRaiseAs}</li>
                      </ul>
                      <img src="/images/manual/admin/im7.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnNewFundRaiseAs}</li>
                      </ul>
                      <img src="/images/manual/admin/im8.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.saveFundRaiseAs}</li>
                      </ul>
                      <img src="/images/manual/admin/im9.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.newFundRaiseAs}</li>
                      </ul>
                      <img src="/images/manual/admin/im10.png" />
                      <h6 className="">{lg.fundRaiseFor}</h6>
                      <p>{lg.theFundRaiseFor}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnFundRaiseFor} </li>
                      </ul>
                      <img src="/images/manual/admin/im11.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnNewFundRaiseFor} </li>
                      </ul>
                      <img src="/images/manual/admin/im12.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.saveFundRaiseFor} </li>
                      </ul>
                      <img src="/images/manual/admin/im13.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.newFundRaiseFor} </li>
                      </ul>
                      <img src="/images/manual/admin/im14.png" />
                      <h6 className="">{lg.donation}</h6>
                      <p>{lg.theDonation}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnDonation} </li>
                      </ul>
                      <img src="/images/manual/admin/im15.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnNewDonationType} </li>
                      </ul>
                      <img src="/images/manual/admin/im16.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.chooseDonation} </li>
                      </ul>
                      <img src="/images/manual/admin/im16-1.png" />
                      <img src="/images/manual/admin/im16-2.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.chooseDonationFor} </li>
                      </ul>
                      <img src="/images/manual/admin/im17.png" />

                      <h6 className="">{lg.contextual}</h6>
                      <p>{lg.theContextual}</p>
                      <h6 className="">{lg.dashboard}</h6>
                      <p>{lg.dashboardMenu}</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.hover}</li>
                      </ul>
                      <img src="/images/manual/admin/im18.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnDashboardMenu}</li>
                      </ul>
                      <img src="/images/manual/admin/im19.png" />
                      <p>{lg.manageProject}</p>
                      <p>{lg.inTheDashboard}</p>
                      <h6 className="">{lg.pendingProject}</h6>
                    <p>{lg.pendingMenu}</p>
                    <p>{lg.onEachProject}</p>
                    <h6 className="">{lg.validateProjects}</h6>
                    <p>{lg.validateAproject}</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnValidate}</li>
                    </ul>
                    <img src="/images/manual/admin/im20.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.selectProject} </li>
                    </ul>
                    <img src="/images/manual/admin/im21.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnDetail} </li>
                    </ul>
                    <img src="/images/manual/admin/im22.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnValidates} </li>
                    </ul>
                    <img src="/images/manual/admin/im23.png" />
                    <h6 className="">{lg.refuseProjects}</h6>
                    <p>{lg.Refusing}</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnValidate}</li>
                    </ul>
                    <img src="/images/manual/admin/im24.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.selectProject}</li>
                    </ul>
                    <img src="/images/manual/admin/im25.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} />{lg.clickOnDetail}</li>
                    </ul>
                    <img src="/images/manual/admin/im26.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnRefuse}</li>
                    </ul>
                    <img src="/images/manual/admin/im27.png" />

                    <h6 className="">{lg.ValidateProjects}</h6>
                    <p>{lg.inThevalidate}</p>
                    <p>{lg.onEachProject}</p>
                    <h6 className="">{lg.editProject}</h6>
                    <p>{lg.editing}</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnvalidate}</li>
                    </ul>
                    <img src="/images/manual/admin/im28.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.selectProject}</li>
                    </ul>
                    <img src="/images/manual/admin/im29.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickEdit}</li>
                    </ul>
                    <img src="/images/manual/admin/im30.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.manage}</li>
                    </ul>
                    <img src="/images/manual/admin/im31.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickSave}</li>
                    </ul>
                    <img src="/images/manual/admin/im32.png" />
                    <h6 className="">{lg.startCampaigns}</h6>
                    <p>{lg.launchCampaign}</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnvalidate}</li>
                    </ul>
                    <img src="/images/manual/admin/im33.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.selectProject}</li>
                    </ul>
                    <img src="/images/manual/admin/im34.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickOnDetail}</li>
                    </ul>
                    <img src="/images/manual/admin/im35.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickStartCampaign}</li>
                    </ul>
                    <img src="/images/manual/admin/im36.png" />
                    <h6 className="">{lg.campaigns}</h6>
                    <p>{lg.inTheCampaignMenu}<br/>{lg.toGain}</p>
                    <img src="/images/manual/admin/im37.png" />
                    <h6 className="">{lg.profile}</h6>
                    <p>{lg.profilMenu}</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.hover}</li>
                    </ul>
                    <img src="/images/manual/admin/im38.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickProfileMenu}</li>
                    </ul>
                    <img src="/images/manual/admin/im39.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.fillIn}</li>
                    </ul>
                    <img src="/images/manual/admin/im40.png" />
                    <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> {lg.clickSave}</li>
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