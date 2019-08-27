
import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { checkRole } from '../../utilities/';
import HeaderFr from '../../../traduction/header/fr.json'
import HeaderEn from '../../../traduction/header/en.json'

const toogleMenu = <FontAwesomeIcon icon={faBars} />

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    }


    setLanguage=()=>{
        
        localStorage.getItem('lang') == 'fr'?
            localStorage.setItem('lang','en')
            :
            localStorage.setItem('lang','fr')
        window.location.reload();
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout();
        this.setState({ redirect: true });
    }

    classToggle() {
        const navs = document.querySelectorAll('.Navbar__Items')
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }

  render() {
    const {user}=this.props;
    let lg = HeaderFr;
    let lang = localStorage.getItem('lang')

    lang == 'fr'?
        lg = HeaderFr
        :
        lg = HeaderEn;

    return (
        <div className="container border-bottom">
            {this.state.redirect ? <Redirect to="/" />:null}
            <div className="row">
                <nav className="navbar navbar-fixed-top" role="navigation" style={{marginBottom: 0, zIndex:'1000'}}>
                    {/* <div className="container"> */}
                        <div className="navbar-header row col-md-2 col-xs-4 col-sm-3 ranyl">
                            {/*<span minimalize-sidebar></span>*/}
                            <Link to="/" style={{display: 'block', margin: '12px'}}>
                                <img src = "/images/tontinardsLogo.png" height="35px"
                                className = ".logo-element"
                                alt = "logo homepage"
                                />
                            </Link>
                        </div>
                        <div className="Navbar__Link Navbar__Link-toggle menuDiv" onClick={this.classToggle}>
                            <i >{toogleMenu}</i>
                        </div>
                        <div class="Navbar__Items col-md-10">
                            {user ?
                                <div className="col-md-7 col-sm-3 col-xs-12 adminBtn">
                                    <span>
                                        {user.profile.role == "admin" ?
                                            <div className="Navbar__Link dropdown">
                                                <div>
                                                    <a className="dropbtn" className="menuLink" href="#">{lg.admin} <i className="fa fa-angle-down"></i> </a>
                                                    <div className="dropdown-content">
                                                        <a id="dropbtn" href="/admin/categories">{lg.category}</a>
                                                        <a id="dropbtn" href="/admin/foundRaiseAs">{lg.foundraise}</a>
                                                        <a id="dropbtn" href="/admin/forWhoFoundsRaisePage">{lg.foundAs}</a>
                                                        <a id="dropbtn" href="/admin/funnels">{lg.project}</a>
                                                        <a id="dropbtn" href="/admin/donations">{lg.donation}</a>
                                                    </div>
                                                </div>
                                            </div> : 
                                            ""
                                        }
                                    </span>
                                </div>
                                :
                                null
                                // <div className="col-md-3 col-sm-3"></div>
                            }
                            
                            {/* <div className="col-md-5 col-sm-9 col-xs-12">
                                <ul className="nav navbar-top-links navbar-right logoutMenu">
                                    <li>
                                    <span>
                                    {
                                        user?
                                        <div class="dropdown">
                                            <p class="dropbtn">{user.profile.name}</p>
                                            <div class="dropdown-content">
                                                <a href="/projects/all">My Campaigns</a>
                                                <a href="/authentication/profile">Profile</a>
                                                <a onClick={(e)=>this.logout(e)} target="_blank"><i className="fa fa-sign-out"></i>Logout</a>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <Link to="/authentication/signin" className="btn signIn"> Login</Link>
                                            <Link to="/authentication/signup" className="btn signUp"> Register</Link>

                                        </div>
                                    }
                                    </span>
                                    </li>
                                </ul>
                            </div> */}
                                

                            <div className="col-md-10 col-sm-12 buttonsBiggerContainer">
                                <ul className="nav navbar-top-links navbar-right logoutMenu">
                                    {/* Vilidate Button for admin */}
                                    {/* End Vilidate Button for admin */}
                                    <li>
                                        {
                                            user ?
                                                <span>
                                                    {
                                                        user.profile.role == "admin" ?
                                                        <div>
                                                                <div className="dropdown">
                                                                    <p className="dropbtn">{user.profile.name}</p>
                                                                
                                                                    <div className="dropdown-content">
                                                                        <Link to={{pathname:'/admin/admindashboard'}} className="">{lg.dashboard} </Link>
                                                                        <a href="/authentication/profile">{lg.profile}</a>
                                                                        <a href="/admin/help">{lg.Help}</a>
                                                                        <a onClick={(e) => this.logout(e)} target="_blank"><i className="fa fa-sign-out"></i>{lg.logout}</a>
                                                                </div>
                                                            </div>
                                                            &nbsp; 
                                                            &nbsp;
                                                            {lang == 'fr'?
                                                                        <button className="btn selectLanguageHeader">
                                                                            <a className="selectLanguageHeader" onClick={this.setLanguage}> EN </a>
                                                                        </button>
                                                                        :
                                                                        <button className="btn selectLanguageHeader" >
                                                                            <a className="selectLanguageHeader" onClick={this.setLanguage}> FR </a>
                                                                        </button>
                                                                        
                                                            } 
                                                        </div>
                                                            
                                                        : 
                                                            <div>
                                                                

                                                            <div className="dropdown">
                                                                <p className="dropbtn">{user.profile.name}</p>
        
                                                                <div className="dropdown-content">
                                                                    <Link to={{pathname:'/user/campaigns'}} className="">{lg.campaign} </Link>
                                                                    <a href="/authentication/profile">{lg.profile}</a>
                                                                    <a href="/user/projects">{lg.createproject}</a>
                                                                    <a href="/user/help">{lg.Help}</a>
                                                                    <a onClick={(e) => this.logout(e)} target="_blank"><i className="fa fa-sign-out"></i>{lg.logout}</a>
                                                                </div>
                                                            </div>
                                                            &nbsp;
                                                            &nbsp;
                                                            {lang == 'fr'?
                                                                        <button className="btn selectLanguageHeader">
                                                                            <a className="selectLanguageHeader" onClick={this.setLanguage}> EN </a>
                                                                        </button>
                                                                        :
                                                                        <button className="btn selectLanguageHeader" >
                                                                            <a className="selectLanguageHeader" onClick={this.setLanguage}> FR </a>
                                                                        </button>
                                                                        
                                                            } 
                                                            </div>
                                                            
                                                    }
                                                </span>
                                            : 
                                            <div className="authBtns">
                                                <Link to="/authentication/signin" className="btn signIn"> {lg.login}</Link>
                                                <Link to="/authentication/signup" className="btn signUp"> {lg.register}</Link>
                                                <Link to="/donation/help" className="m-l-md helpLink">{lg.Help}</Link>
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                {lang == 'fr'?
                                                        <button className="btn selectLanguageHeader">
                                                            <a className="selectLanguageHeader" onClick={this.setLanguage}> EN </a>
                                                        </button>
                                                        :
                                                        <button className="btn selectLanguageHeader" >
                                                            <a className="selectLanguageHeader" onClick={this.setLanguage}> FR </a>
                                                        </button>
                                                                
                                                } 
                                            </div>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;