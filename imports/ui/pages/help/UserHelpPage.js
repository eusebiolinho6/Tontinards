import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';
import Footer from '../../globalComponents/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


class UserHelpPage extends Component {
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
                  <h2 className="text-center title">Manuel d’utilisation</h2><hr/>
                  <div className="col-sm-12 content">
                    <h5 className="step text-center">Présentation du système</h5>
                    <p>Tontinards est une plate-forme Web, qui met en relation des personnes ayant des projets professionnels ou personnels et des personnes ayant des capacités de financement. L'application enregistre les données de projet soumises par les demandeurs de financement dans la base de données.</p>
                  </div>
                  <div className="col-sm-12 content">
                      <h5 className="step">2. DESCRIPTION DE CHAQUE CAS D'UTILISATION POUR UN UTILISATEUR SIMPLE</h5>
                      <h6 className="">2.1 S’INSCRIRE</h6>
                      <p><strong>En tant qu'utilisateur simple, vous souhaitez vous inscrire:</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Cliquez sur "S'inscrire"</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Sur cette page, entrez votre nom d'utilisateur, votre mot de passe et votre adresse e-mail ou des connexions à des réseaux sociaux tels que Facebook, Twitter et Google, selon vos besoins.</li>
                      </ul>
                      <img src="/images/manual/im1.png" />
                      <p><strong>Remarque! : </strong>Notez qu'il n'y a qu'un seul identifiant et donc qu'un seul mot de passe par compte. Pour valider, cliquez sur "Enregistrer".</p>
                      <h6 className="">2.1 SE CONNECTER</h6>
                      <p><strong>En tant qu'utilisateur simple, vous souhaitez vous connectez:</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Cliquez sur "Login"</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Sur cette page, votre nom d'utilisateur et votre mot de passe ou vos connexions à des réseaux sociaux tels que Facebook, Twitter et Google vous seront demandés.</li>
                      </ul>
                      <img src="/images/manual/im2.png" />
                  </div>


                  <div className="col-sm-12 content">
                      <h5 className="step">3. MENU UTILISATEUR</h5>
                      <p>Maintenant que vous êtes connecté, vous entrez dans l'application Web "Tontinards". Nous allons décrire toutes les fonctionnalités de l'application après les autres. Dès que vous vous connectez, à droite, un onglet à
                        nom de votre compte, dans cet exemple <b>"Waffo"</b>: <b>"Mes campagnes"</b>, <b>"Profil"</b>, <b>"Créer un projet"</b> et <b>"Déconnexion"</b> nous détaillerons chaque fonctionnalité a la suite:
                      </p>
                      <img src="/images/manual/im3.png" />
                      <p>En cliquant dessus, vous ouvrez une boîte de dialogue avec 4 possibilités:</p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Mes campagnes": </b> &nbsp;Vous permet de retrouver le statut de toutes vos campagnes en cours.</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Profil": </b> &nbsp;Permet de modifier les paramètres "Utilisateur"</li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Créer un projet": </b> &nbsp;Vous permet de créer un projet qui sera validé et accepté par un administrateur pour qu'il passe a l’état d'une campagne. </li>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /><b> "Déconnexion": </b> &nbsp;Vous permet de vous déconnecter </li>
                      </ul>
                      <h6 className="">3.1 CREER UN PROJET</h6>
                      <p><strong>En tant qu'utilisateur simple, vous souhaitez créer un projet:</strong></p>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> En vous connectant, vous devez créer votre projet. Pour ce faire, cliquez sur "Faire un Don" sur la page de destination:</li>
                        <img src="/images/manual/im4.png" />
                      </ul>
                      <ul>
                        <li><FontAwesomeIcon icon={faChevronRight} size={"1x"} /> Formulaire de création de projet: </li>
                      </ul>
                      <p>Toutes les informations ne sont pas obligatoires mais plus votre projet contient suffisamment d'informations, plus il sera facile pour l'administrateur de le comprendre et de le valider. N'hésite pas par exemple, pour ajouter une description complète. Vous devez également choisir (Nom du projet, Numéro de téléphone, Image du projet de catégorie, Document du projet et Vidéo du projet) comme champ obligatoire. Pour continuer, cliquez sur "enregistrer".</p>
                      <img src="/images/manual/im5.png" />
                      <p><strong>Remarque!</strong> sur l'option "Funds Raise As" si l'utilisateur a sélectionné Un individu, le champ d'image du projet n'est plus disponible. Vous venez de finaliser la création de votre projet, Il apparaîtra maintenant sur l'application Web parmi les projets que vous avez soumis (projet en attente).</p>
                      <h6 className="">3.2 MES CAMPAGNES</h6>
                      <p><strong>En tant qu'utilisateur simple, vous souhaitez gérer vos campagnes:</strong></p>
                      <p>Lorsque vous avez créé et géré vos projets, ceux-ci apparaissent sous forme de liste dans l'onglet "Options de filtrage" comme indiqué ci-dessous.</p>
                      <p>Par défaut, les projets qui seront les projets "en attente". Vous pouvez accéder à d'autres projets via des filtres (projets validés ou campagnes), comme décrit ci-dessous, nous décrivons chaque état du projet.</p>
                      <img src="/images/manual/im6.png" />
                      <h6 className="">3.2.1 Projets en attente</h6>
                      <p>Tous les projets que l'administrateur n'a pas valides sont répertoriés dans cette partie et par défaut, lorsque nous venons de créer un projet, celui-ci est positionné dans les projets "en attente".</p>
                      <h6 className="">3.2.2 Projets validés</h6>
                      <p>Tous les projets que l'administrateur a validés sont répertoriés dans cette partie et l'administrateur pourra effectuer des révisions pour améliorer le projet afin qu'il passe à l'état de la campagne.</p>
                      <img src="/images/manual/im7.png" />
                      <h6 className="">3.2.3 Campagnes</h6>
                      <p>Tous les projets validé par l'administrateur  et commence une campagne sont répertoriés dans cette partie et peuvent être affichés avec les commentaires de l'administrateur pour rendre la campagne plus crédible.</p>
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