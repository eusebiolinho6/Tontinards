import React, { Component, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';

// App component - represents the whole app
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div>
                    <div className="col-md-4">
                        <div className="col-md-6">
                            <h5>Help and contact</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Company</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Offers</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4">
                        <Link to="/" style={{display: 'block', margin: '12px'}}>
                            < img src = "/images/tontinardsLogo.png" height="35px"
                            className = ".logo-element"
                            alt = "logo homepage"
                            />
                        </Link>
                    </div>    
                </div>
                <div className="footerHr">
                    <hr/>
                </div>
                <div>
                    <div className="col-md-4">
                        <div className="col-md-5">
                            <p>+237042312</p>
                            <p>meli@tontinards.com</p>
                        </div>
                        <div className="col-md-4">
                            <a>Our story</a><br/>
                            <a>Developers Api</a><br/>
                            <a>About</a><br/>
                            <a>Blog</a><br/>
                            <a>Terms and conditions</a>
                        </div>
                        <div className="col-md-3">
                            <a>Get started</a><br/>
                            <a>Login</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4">
                        <Link to="/" style={{display: 'block', margin: '12px'}}>
                            < img src = "/images/tontinardsLogo.png" height="35px"
                            className = ".logo-element"
                            alt = "logo homepage"
                            />
                        </Link>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Footer;