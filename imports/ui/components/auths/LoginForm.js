import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import validateInput from '../../../validations/login.js';
import {Meteor} from 'meteor/meteor';

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
            requestPermissions: ['profile','email'],
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

  loginFacebook = () =>{
     
    Meteor.loginWithFacebook(
      {
          forceApprovalPrompt: true,
          requestPermissions: ['user_friends', 'public_profile', "email"],
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
     e.preventDefault();
     const {email, password}=this.state;
     if(this.isValid()){
            Meteor.loginWithPassword(email, password, (err)=>{
                if(err){
                  this.setState({errors: {password: 'No user with this email & password'}});
                } else {
                    this.setState({redirect: true})
                }
            })
     }
   
  }

  render() {
      const { errors, email, password, isLoading, redirect } = this.state;
      if(redirect) return <Redirect to="/funnels/all/all" />
    return (
        <div className="wrapper wrapper-content animated fadeInRight">
             <div className="row">
            <div className="ibox col-md-6 col-md-offset-3 float-e-margins">
                <div className="ibox-projectName">
                    <h5>Log In to Tontinards
                    </h5>
                </div>
                <div className="ibox-content">

                    <div className="row">
                   
                        <div className="col-sm-12"><h3 className="m-t-none m-b">Log in</h3>
                           
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
                                    label="Pasword"
                                    type="password"
                                    value={password}
                                    error={errors.password}
                                    onChange={(event)=> this.handleInputChange(event)}
                                    />
                                <div>
                                <div>
                                    <span>Don't have an account? Register <a href="/authentication/signup"> here.</a></span>
                                </div><br/>
                                <button className="btn btn-md btn-primary pull-right m-t-n-xs" type="submit"><strong>Log
                                    in</strong></button>
                                <label> <input type="checkbox" /> Remember me </label>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 mt-3 social-wrapper">
                            {/* <button onClick={this.loginWIthTwitter} className="btn btn-md btn-primary mt-3" type="submit"><strong>Login with Twitter</strong></button> */}
                            <button className="btn btn-md btn-danger mt-3" onClick={this.loginGoogle}><strong>Login with Google</strong></button>
                            <button className="btn btn-md btn-primary mt-3" onClick={this.loginFacebook}><strong>Login with Facebook</strong></button>
                            <button className="btn btn-md btn-info mt-3" onClick={this.loginWIthTwitter}><strong>Login with Twitter</strong></button>
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
