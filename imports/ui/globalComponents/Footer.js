import React, { Component, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import FooterFr from '../../../traduction/footer/fr.json';
import FooterEn from '../../../traduction/footer/en.json';

// style={{backgroundColor: "#005dac"}}
const fbIcon = <FontAwesomeIcon icon={faFacebook}  color="#ffffff" size="2x" />
const instagIcon = <FontAwesomeIcon icon={faTwitter}  color="#ffffff" size="2x" />
const twitterIcon = <FontAwesomeIcon icon={faInstagram} color="#ffffff" size="2x" />

// App component - represents the whole app
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    setLanguage=()=>{
        
        localStorage.getItem('lang') == 'fr'?
            localStorage.setItem('lang','en')
            :
            localStorage.setItem('lang','fr')
        window.location.reload();
    }

    render() {
        let lg = FooterFr;
        let lang = localStorage.getItem('lang')
        
        lang == 'fr'?
            lg = FooterFr
            :
            lg = FooterEn;
        return (
            <div>
                <div className="footer">
                    
                    <div className="col-md-4 col-sm-6 titles">
                        {/* <span className="rightBordered"> English </span>  
                        <span className="rightBordered"> French </span> 
                        <span className="p-w-xs"> Drapeau </span> 
                        <br/> 
                        <br/> 
                        <div className="copyrightDiv">
                            <span>2019 All right reserved</span> 
                            <span><a href="#">privacy policy</a></span> 

                        </div> */}
                    </div>
                    
                    <div className="col-md-4 col-sm-3 footerLogoContainer">
                        <Link to="/" style={{display: 'block', margin: '12px'}}>
                            < img src = "/images/whiteLogo.png" height="35px"
                            className = ".logo-element"
                            alt = "logo homepage"
                            />
                        </Link>
                    </div>    
                    
                    {/* <div className="col-md-4 col-sm-6 footerInfos">
                        <div> */}
                            {/* <a>+237671042312</a><br/> */}
                     {/*    <a>meli@tontinards.com</a>
                         </div>
                        <br/>
                        <div className="socials">
                            <a href="#"><span>{fbIcon}</span></a>
                            <a href="#"><span>{instagIcon}</span></a>
                            <a href="#"><span>{twitterIcon}</span></a>
                        </div>    
                    </div> */}
                    
                        <div className="col-md-3 col-xm-6 socials">
                                <label >{lg.Languages} </label>
                                <br/>
                                {console.log(lang)}
                                    {lang == 'fr'?
                                    <select className="selectLanguage" onChange={this.setLanguage}>
                                        <option selected value="fr" >{lg.Français}</option>
                                        <option  value="en" >{lg.Anglais}</option>
                                    </select>
                                    :
                                    <select className="selectLanguage" onChange={this.setLanguage}>
                                        <option  value="fr" >{lg.Français}</option>
                                        <option selected value="en" >Anglais</option>
                                    </select>
                                    }
                                
                                
                         </div>
                </div>
            </div>
        )
    }
}

export default Footer;