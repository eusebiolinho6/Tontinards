import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import validateInput from '../../../validations/login.js';
import {Meteor} from 'meteor/meteor';
import loginFr from '../../../../traduction/auth/login/fr.json'
import loginEn from '../../../../traduction/auth/login/en.json'

// App component - represents the whole app
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        errors: {},
        isLoading: false,
        redirect:false,
        };
}
    componentDidMount(){
        if(Meteor.loggingIn()){
            this.setState({redirect:true});
        }
    }
    isValid() {
        const {
            errors,
            isValid
        } = validateInput(this.state);

        if (!isValid) {
            this.setState({
                errors
            });
        }

        return isValid;
    }

  handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
      });
  }

  // set user role when user sign
  setUserRole = () => {
    Meteor.call('setUserRole', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            this.setState({redirect: true})
        }
     });
  }

  loginGoogle = () =>{
     
      Meteor.loginWithGoogle(
        {
            forceApprovalPrompt: true,
            requestPermissions: ['email'],
        }, 
        (error) =>{
            if (!error) {
                console.log(error); //If there is any error, will get error here
            }else{
                this.setUserRole();
                console.log(Meteor.user());// If there is successful login, you will get login details here
               
            }
        }
      );
  }

  loginFacebook = () =>{
     
    Meteor.loginWithFacebook(
      {
          forceApprovalPrompt: true,
          requestPermissions: ['public_profile', "email"],
      }, 
      (error) =>{
          if (error) {
              console.log(error); //If there is any error, will get error here
          }else{
              this.setUserRole();
              console.log(Meteor.user());// If there is successful login, you will get login details here
             
          }
      }
    );
}

  loginWIthTwitter = () => {
    Meteor.loginWithTwitter({
        requestPermissions: ['basic']
      }, (error) => {
        if (error) {
          console.log(error)
        } else {
            this.setUserRole();
            console.log(Meteor.user());
        }
      });
  }

  handleSUbmit(e) {
      const { lang } = localStorage.getItem('lang')
     e.preventDefault();
     const {email, password}=this.state;
     if(this.isValid()){
            Meteor.loginWithPassword(email, password, (err)=>{
                if(err){
                    lang == 'fr'? 
                     this.setState({errors: {password: 'Aucun utilisateur avec cet email et ce mot de passe'}})
                     :
                     this.setState({errors: {password: 'No user with this email & password'}});
                } else {
                    this.setState({redirect: true})
                }
            })
     }
   
  }

  render() {
      const { errors, email, password, isLoading, redirect } = this.state;
      console.log(loginEn.login2)
      console.log(loginFr.login2)
      let lg = loginFr;
      let lang = localStorage.getItem('lang')
      lang == 'fr'?
          lg = loginFr
          :
          lg = loginEn;

      if(redirect) return <Redirect to="/" />
    return (
        <div className="wrapper wrapper-content animated fadeInRight">
             <div className="row">
            <div className="ibox col-md-6 col-md-offset-3 float-e-margins">
                <div className="ibox-projectName">
                    <h5>{lg.login1}
                    </h5>
                </div>
                <div className="ibox-content">

                    <div className="row">
                   
                        <div className="col-sm-12"><h3 className="m-t-none m-b">{lg.login2}</h3>
                           
                            <form onSubmit={(event) => this.handleSUbmit(event)} role="form">
                                
                                <Input
                                    field="email"
                                    label="Email"
                                    value={email}
                                    error={errors.email}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                   
                                    <Input
                                        field="password"
                                        label={lg.password}
                                        type="password"
                                        value={password}
                                        error={errors.password}
                                        onChange={(event)=> this.handleInputChange(event)}
                                    />
                                
                                <div>
                                <div>
                                    <span>{lg.login3} <a href="/authentication/signup"> {lg.login4}</a></span>
                                </div><br/>
                                <button className="btn btn-md btn-primary pull-right m-t-n-xs" type="submit"><strong>{lg.login5}
                                    </strong></button>
                                <label> <input type="checkbox" /> {lg.login6} </label>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 mt-3 social-wrapper">
                            
                            {/* <button className="btn btn-md btn-danger mt-3" onClick={this.loginGoogle}><strong>{lg.login7}</strong></button> */}
                            {/* <button className="btn btn-md btn-primary mt-3" onClick={this.loginFacebook}><strong>{lg.login8}</strong></button> */}
                            <button className="btn btn-md btn-info mt-3" onClick={this.loginWIthTwitter}><strong>{lg.login9}</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>              
    )
  }
}

export default LoginForm;
