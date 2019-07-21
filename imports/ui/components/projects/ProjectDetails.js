import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import Input from '../../globalComponents/Input';
import {Meteor} from 'meteor/meteor'
import TextArea from '../../globalComponents/Textarea';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// App component - represents the whole app
class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: true
        }
    }

    componentDidUpdate(prevProps) {
        
    }

    toggleContent = () => {
        this.setState({story: !this.state.story})
    }

    render() {
        return (
            <div className="container" id="projectdetails">
                <div className="row">
                    <div className="col-sm-12 col-md-8 left">
                        <div className="infos">
                            {/* For Team */}
                            {/* <AwesomeSlider>
                                <div data-src="/images/img2.png" />
                                <div data-src="/images/img5.PNG" />
                            </AwesomeSlider> */}
                            {/* For Team */}
                            <img src="/images/img5.PNG" />
                            <div className="otherinfos">
                                <h2>Project title here</h2>
                                <h4>Project Category</h4>
                                <hr/>
                                <div className="founds">
                                    <h4>Found Raise As</h4>
                                    <h4>For Who Founds Raise</h4>
                                </div>
                                <hr/>
                                <div className="shareButtons">
                                    <div className="socialBtn">
                                        <button className="fb btn">Share on Facebook</button>
                                        <button className="tw btn">Share on Twitter</button>
                                    </div>
                                    <p>Be the first person to share</p>
                                </div>
                                <hr/>
                            </div>

                            <div className="moreinfos">
                                <div className="headers">
                                    <h3 
                                        onClick={this.toggleContent}
                                        className={this.state.story ? "story btn1 active-content": "story btn1"}>Story</h3>
                                    <h3 
                                        onClick={this.toggleContent}
                                        className={!this.state.story ? "statement btn1 active-content": "statement btn1"}>Reviews</h3>
                                </div>
                                <div className="content">
                                    {
                                        this.state.story ?
                                        <div className="text">
                                            <p>Rien n'est previsible dans cettte vie quand vous croyez etre les  maitres du monde il faut que certains certaines choses nous arrrive pour comprendre que d'une minuiite a l'autre on peut s'eteindre a jamais .mon histoiire rien a dire juste un malaise frequent que l'hopital a conclut que le rein est abimer donc il faut enlever</p>
                                        </div>:
                                        <div className="reviews">
                                            <p>Rien n'est previsible dans cettte vie quand vous croyez etre les maitres du monde il faut que certains certaines choses nous arrrive pour comprendre...</p>
                                            <p>Rien n'est previsible dans cettte vie quand vous croyez etre les maitres du monde il faut que certains certaines choses nous arrrive pour comprendre...</p>
                                            <p>Rien n'est previsible dans cettte vie quand vous croyez etre les maitres du monde il faut que certains certaines choses nous arrrive pour comprendre...</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="form-group">
                                    <textarea placeholder="Enter your message" className="form-control" id="textmessage" rows="3"></textarea>
                                </div>
                                <button className="btn send-btn">Send</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 right">
                        <div className="infos">
                            <div className="otherinfos">
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <div>
                                        <h3><strong>Objectives: </strong> 1 000 000 FCFA</h3>
                                        <h4><strong>Current Amount: </strong> 100 000 FCFA</h4>
                                        <p>Campagne crée depuis 10 jours</p>
                                    </div>
                                    <div className="progress">
                                        <CircularProgressbar
                                            value={10}
                                            text={`10%`}
                                            strokeWidth = {15}
                                            styles={buildStyles({
                                                rotation: 0,
                                                strokeLinecap: 'butt',
                                                textSize: '20px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `#18a689`,
                                                textColor: '#333',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="socialBtn">
                                    <button className="st btn btn-lg">Je soutiens</button>
                                    <button className="fb btn">Partager sur Facebook</button>
                                </div>
                            </div>
                        </div>
                        <div className="video">
                            <video width="100%" height="100%" poster="/images/img2.png" controls>
                                <source src="movie.mp4" type="video/mp4"></source>
                                <source src="movie.ogg" type="video/ogg"></source>
                            </video>
                        </div>
                        <div className="date">
                            <p>Date de création : 15 juillet 2019</p>
                        </div>
                        <div className="profile">
                            <img src="/images/user.png" />
                            <div className="profile-infos">
                                <div>
                                    <p>Owner Name</p>
                                    <p>Country</p>
                                </div>
                                <div>
                                    <p>Phone Number</p>
                                    <p>Zip Code</p>
                                </div>
                            </div>
                        </div>
                        <div className="dons">
                            <div className="alldons">
                                <h4>Donations</h4>
                            </div>
                            <h5>Aucun don pour l'instant. Participez au lancement de cette campagne et <a href="">devenez le premier donateur.</a></h5>
                        </div>
                        <div className="messages">
                            <div className="allmessages">
                                <h4>Inbox Messages</h4>
                                <span>5</span>
                            </div>
                            <div className="messages-items">
                                <div className="messages-item">
                                    <h6>Messages 1</h6>
                                </div>
                                <div className="messages-item">
                                    <h6>Messages 2</h6>
                                </div>
                                <div className="messages-item">
                                    <h6>Messages 3</h6>
                                </div>
                                <div className="messages-item">
                                    <h6>Messages 4</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetails;