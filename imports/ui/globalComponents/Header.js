    
import React, { Component, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom'
import {Meteor} from 'meteor/meteor'
import { checkRole } from '../../utilities/';
// App component - represents the whole app
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={redirect:false};
    }
    
    logout(e){
        e.preventDefault();
        Meteor.logout();
        this.setState({redirect: true});
    }

    classToggle() {
        const navs = document.querySelectorAll('.Navbar__Items')
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }

  render() {
    const {redirect, hasAccount}=this.state;
    if (redirect) return <Redirect to = "/" />
    const {user}=this.props;
    // console.log(user);
    return (
        <div className="container border-bottom">
            <div className="row">
                <nav className="navbar navbar-fixed-top" role="navigation" style={{marginBottom: 0, zIndex:'1000'}}>
                    {/* <div className="container"> */}
                        <div className="navbar-header row col-md-2 col-xs-4 col-sm-3 ranyl">
                            {/*<span minimalize-sidebar></span>*/}
                            <Link to="/" style={{display: 'block', margin: '12px'}}>
                                < img src = "/images/tontinardsLogo.png" height="35px"
                                className = ".logo-element"
                                alt = "logo homepage"
                                />
                            </Link>
                        </div>
                        <div className="Navbar__Link Navbar__Link-toggle" onClick={this.classToggle}>
                            <i >M</i>
                        </div>
                        <div class="Navbar__Items col-md-10">
                            <div className="col-md-10 col-sm-7 col-xs-7">
                                {user ?
                                    <span>
                                        {user.profile.role == "admin" ?
                                            <div className="Navbar__Link dropdown">
                                                <div>
                                                    <a className="dropbtn" className="menuLink" href="#">Admin <i className="fa fa-angle-down"></i> </a>
                                                    <div className="dropdown-content">
                                                    <a id="dropbtn" href="/admin/categories">Categories</a>
                                                    <a id="dropbtn" href="/admin/foundRaiseAs">Found Raise As</a>
                                                    <a id="dropbtn" href="/admin/forWhoFoundsRaisePage">For Who Founds Raise</a>
                                                    <a id="dropbtn" href="/admin/funnels">Projects</a>
                                                </div>
                                                </div>
                                            </div> : 
                                            ""
                                        }
                                    </span>
                                    :
                                    ""
                                }
                            </div>
                            
                            <div className="col-md-2 col-sm-5 col-xs-5">
                                <ul className="nav navbar-top-links navbar-right logoutMenu">
                                    <li>
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
                                            :<Link to="/authentication/signin"><i className="fa fa-sign-in"></i> Log In</Link>
                                    }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    {/* </div> */}
                </nav>
            </div>
        </div>
    )
  }
}

export default Header;