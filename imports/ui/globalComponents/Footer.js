import React, { Component, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const fbIcon = <FontAwesomeIcon icon={faFacebook} color="#0076B6" size="2x" />
const instagIcon = <FontAwesomeIcon icon={faTwitter} color="#0076B6" size="2x" />
const twitterIcon = <FontAwesomeIcon icon={faInstagram} color="#0076B6" size="2x" />

// App component - represents the whole app
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="footer">
                    <div>
                        <div className="col-md-5 col-sm-6 titles">
                            <div className="col-md-5 col-sm-5">
                                <h5>Help and contact</h5>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h5>Company</h5>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <h5>Offers</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-3">
                            
                        </div>
                        <div className="col-md-3 col-sm-3 footerLogoContainer">
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
                        <div className="col-md-5 col-sm-6 footerInfos">
                            <div className="col-md-5 col-sm-5">
                                <a>+237671042312</a><br/>
                                <a>meli@tontinards.com</a>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a>Our story</a><br/>
                                <a>Developers Api</a><br/>
                                <a>About</a><br/>
                                <a>Blog</a><br/>
                                <a>Terms and conditions</a>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <a>Get started</a><br/>
                                <a>Login</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-2">
                            
                        </div>
                        <div className="col-md-3 col-sm-4 socials">
                            <a href="#"><span>{fbIcon}</span></a>
                            <a href="#"><span>{instagIcon}</span></a>
                            <a href="#"><span>{twitterIcon}</span></a>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;