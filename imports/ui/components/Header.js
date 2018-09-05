import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
// App component - represents the whole app
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row border-bottom">
            <nav className="navbar navbar-fixed-top" role="navigation" style={{marginBottom: 0, zIndex:'1045'}}>
                <div className="navbar-header">
                    {/*<span minimalize-sidebar></span>*/}
                    <Link to="/" style={{display: 'inline-block', marginLeft: '10px', marginTop: '14px'}}>
                        < img src = "https://foppro.com/modules/core/client/img/assets/online%20performance%20logo.png" height="40px"
                        className = "img-responsive"
                        alt = "logo homepage"
                        />
                    </Link>
                    {/**<span  style={{marginLeft: '10px'}} className="hidden-xs hidden-sm title-heading">
                        Page Title
    </span>*/}
                    {/* Old form search
                    <form role="search" className="navbar-form-custom" method="post" action="views/search_results.html">
                        <div className="form-group">
                            <input type="text" placeholder="Search" className="form-control" name="top-search" id="top-search">
                        </div>
                    </form>
                    */}
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <a href="/api/auth/signout" target="_self">
                        <i className="fa fa-sign-out"></i> Log out</a>
                    </li>  
                </ul>
            </nav>
        </div>
    )
  }
}

export default Header;