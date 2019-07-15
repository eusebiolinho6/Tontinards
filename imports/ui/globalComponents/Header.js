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
    console.log(user);
    return (
        <div className="row border-bottom">
            <nav className="navbar navbar-fixed-top" role="navigation" style={{marginBottom: 0, zIndex:'1000'}}>
                <div className="navbar-header ranyl">
                    {/*<span minimalize-sidebar></span>*/}
                    <Link to="/" style={{display: 'block', margin: '12px'}}>
                        < img src = "/images/logo.png" height="35px"
                        className = ".logo-element"
                        alt = "logo homepage"
                        />
                    </Link>
                    {/**<span  style={{marginLeft: '10px'}} className="hidden-xs hidden-sm projectName-heading">
                        Page projectName
                    </span>*/}
                    {/* Old form search
                    <form role="search" className="navbar-form-custom" method="post" action="views/search_results.html">
                        <div className="form-group">
                            <input type="text" placeholder="Search" className="form-control" name="top-search" id="top-search">
                        </div>
                    </form>
                    */}
                </div>
                {user ?
                   <span>
                        {user.profile.role == "admin" ?
                            <div className="Navbar__Link dropdown">
                                <div>
                                    <a className="dropbtn" className="menuLink" href="#">Admin <i className="fa fa-angle-down"></i> </a>
                                    <div className="dropdown-content">
                                    <a id="dropbtn" href="/admin/categories">Categories</a>
                                    <a id="dropbtn" href="/admin/industries">Industries</a>
                                    <a id="dropbtn" href="/admin/funnels">Funnels</a>
                                </div>
                                </div>
                            </div> : 
                            ""
                        }
                    </span>
                    :
                    ""
                }

                <ul className="nav navbar-top-links navbar-right logoutMenu">
                    <li>
                       {user? <a onClick={(e)=>this.logout(e)} target="_blank"><i className="fa fa-sign-out"></i>
                       {user.profile.name} </a>:<Link to="/authentication/signin">
                       <i className="fa fa-sign-in"></i> Log In</Link>}
                    </li>
                </ul>
            </nav>
            
        </div>
    )
  }
}

export default Header;