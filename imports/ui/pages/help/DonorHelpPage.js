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
                  <h2 className="text-center title">Manuel pour le donateur</h2><hr/>
                  <div className="col-sm-12 content">
                      <p className=""><span>Objectif:</span> Ce document aidera un donateur à bien connaître toutes les étapes pour faire un don.</p>
                      <p className=""><span>Rôle du donateur:</span> son rôle est de choisir un projet, puis de cliquer sur le bouton "Faire un don" pour faire un don à la personne qui s'est abonnée au projet. C'est pour les aider dans la croissance de leur projet.</p>
                      <p className=""><strong>En tant que donateur, vous souhaitez faire un don:</strong></p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>ETAPE 1:</u> Début du financement </h5>
                      <img src="/images/manual/img1.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Cliquer sur “Start Funding”</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Lorsque vous cliquez sur le bouton «Démarrer le financement», tous les projets de Tontinards sont affichés.</li>
                      </ul>
                      <img src="/images/manual/img2.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>ETAPE 2:</u> Choisir la catégorie et le projet dont vous souhaitez faire un don</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Cliquer sur une des catégories des projets </li>
                      </ul>
                      <img src="/images/manual/img3.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Après avoir choisi la catégorie de projet choisissez le projet dont vous souhaitez faire un don</li>
                      </ul>
                      <img src="/images/manual/img4.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Cliquer sur “Details” button</li>
                      </ul>
                      <img src="/images/manual/img5.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Après avoir cliqué sur le bouton “Détail” vous pouvez voir les détails du projet dont vous souhaitez faire un don</li>
                      </ul>
                      <img src="/images/manual/img6.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>ETAPE 3:</u> Faire un don</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Cliquez sur le button donate</li>
                      </ul>
                      <img src="/images/manual/img7.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Après avoir cliqué sur le bouton “Donate” vous devez remplir le formulaire ensuite cliquer sur le bouton “submit”</li>
                      </ul>
                      <img src="/images/manual/img8.png" />
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step"><u>ETAPE 4:</u> Recevoir l’email</h5>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Après avoir submit vous devez recevoir ce genre d’email</li>
                      </ul>
                      <img src="/images/manual/img10.png" />
                      <img src="/images/manual/img9.png" />
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Après réception de message votre don sera validé uniquement après que nous aurons reçu votre argent physiquement.</li>
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