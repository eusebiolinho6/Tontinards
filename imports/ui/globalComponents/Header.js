
import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { checkRole } from '../../utilities/';

const toogleMenu = <FontAwesomeIcon icon={faBars} />

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
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
                                                    <a className="dropbtn" className="menuLink" href="#">Admin <i className="fa fa-angle-down"></i> </a>
                                                    <div className="dropdown-content">
                                                        <a id="dropbtn" href="/admin/categories">Categories</a>
                                                        <a id="dropbtn" href="/admin/foundRaiseAs">Funds Raise As</a>
                                                        <a id="dropbtn" href="/admin/forWhoFoundsRaisePage">Funds Raise For</a>
                                                        <a id="dropbtn" href="/admin/funnels">Projects</a>
                                                        <a id="dropbtn" href="/admin/donations">Donations</a>
                                                    </div>
                                                </div>
                                            </div> : 
                                            ""
                                        }
                                    </span>
                                </div>
                                :
                                <div className="col-md-7 col-sm-3"></div>
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
                                

                            <ul className="nav navbar-top-links navbar-right logoutMenu">
                                {/* Vilidate Button for admin */}
                                {/* End Vilidate Button for admin */}
                                <li>
                                    {
                                        user ?
                                            <span>
                                                {
                                                    user.profile.role == "admin" ?
                                                        <div className="dropdown">
                                                            <p className="dropbtn">{user.profile.name}</p>

                                                            <div className="dropdown-content">
                                                                <Link to={{pathname:'/admin/admindashboard'}} className="">Dashboard </Link>
                                                                <a href="/authentication/profile">Profile</a>
                                                                <a href="/admin/help">Help</a>
                                                                <a onClick={(e) => this.logout(e)} target="_blank"><i className="fa fa-sign-out"></i>Logout</a>
                                                            </div>
                                                        </div>
                                                    : 
                                                        <div className="dropdown">
                                                            <p className="dropbtn">{user.profile.name}</p>

                                                            <div className="dropdown-content">
                                                                <Link to={{pathname:'/user/campaigns'}} className="">My Campaigns </Link>
                                                                <a href="/authentication/profile">Profile</a>
                                                                <a href="/user/projects">Create Project</a>
                                                                <a href="/user/help">Help</a>
                                                                <a onClick={(e) => this.logout(e)} target="_blank"><i className="fa fa-sign-out"></i>Logout</a>
                                                            </div>
                                                        </div>
                                                }
                                            </span>
                                        : 
                                        <div>
                                            <Link to="/authentication/signin" className="btn signIn"> Login</Link>
                                            <Link to="/authentication/signup" className="btn signUp"> Register</Link>
                                            <Link to="/donation/help" className="m-l-md">Help</Link>
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;