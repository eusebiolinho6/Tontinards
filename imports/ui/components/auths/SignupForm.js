import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import validateInput from '../../../validations/signup';
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import {toObjectId} from '../../../utilities'
// App component - represents the whole app
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        username: '',
        confirmPassword: '',
        name: '',
        errors: {},
        redirect:false
    }
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

  signupWithGoogle(){

    Meteor.loginWithGoogle(
        {
            forceApprovalPrompt: true,
            requestPermissions: ['profile','email'],
        }, 
        (error) =>{
            if (error) {
                console.log(error); //If there is any error, will get error here
            }else{
                this.setState({redirect: true})
                console.log(Meteor.user());// If there is successful login, you will get login details here
               
            }
        }
      );
  } 

  signupFacebook = () =>{
     
    Meteor.loginWithFacebook(
      {
          forceApprovalPrompt: true,
          requestPermissions: ['user_friends', 'public_profile', "email"],
      }, 
      (error) =>{
          if (error) {
              console.log(error); //If there is any error, will get error here
          }else{
              this.setState({redirect: true})
              console.log(Meteor.user());// If there is successful login, you will get login details here
             
          }
      }
    );
}

  signupWIthTwitter = () => {
    Meteor.loginWithTwitter({
        requestPermissions: ['basic']
      }, (error) => {
        if (error) {
          console.log(error)
        } else {
            this.setState({redirect:true});
        }
      });
  }

  handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
      });
  }

  loginWIthTwitter = () => {
    Meteor.loginWithTwitter({
        requestPermissions: ['basic']
      }, (error) => {
        if (error) {
          console.log(error)
        } else {
            this.setState({redirect:true});
        }
      });
  }

  handleSUbmit(e){
      e.preventDefault();
      const {email, password,username,name} = this.state;
      if(this.isValid()){
          Accounts.createUser(Object.assign({_id:toObjectId(null) },{profile:{name:name, role: "user"}},{email,password,username}), (err)=>{
              if(err){ 
                console.log(err)
                this.setState({
                   errors: {reason: err.error}
                });
              }else {
                  Meteor.loginWithPassword(email,password,(err)=>{
                      if(err){
                      console.log(err);
                      } else {
                    this.setState({
                        redirect: true
                    });
                      }
                  })
              }
          })
      }
      
  }

  render() {
      const {name,username,email,password,confirmPassword,errors, redirect}=this.state;
      if(redirect) return <Redirect to="/funnels/all/all" />
    return (
    <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
            <div className="col-md-3 col-sm-1"></div>   
            <div className="ibox col-md-6 col-sm-10 col-md-offset-3 col-sm-offset-1 float-e-margins">
                <div className="ibox-projectName">
                    <h5>Sign up 
                    </h5>
                </div>
                
                <div className="ibox-content">
                  
                    <div className="row">
                            <form onSubmit={(event) => this.handleSUbmit(event)} className="col-md-12" role="form">
                            <Input
                                    field="name"
                                    label="Name"
                                    value={name}
                                    error={errors.name}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                <Input
                                    field="email"
                                    label="Email"
                                    value={email}
                                    error={errors.email}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                    <Input
                                    field="username"
                                    label="Username"
                                    value={username}
                                    error={errors.username}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                    <Input
                                    field="password"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    error={errors.password}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                    <Input
                                    field="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    value={confirmPassword}
                                    error={errors.confirmPassword}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                    
                                <div>
                                    <button className="btn btn-md btn-primary m-t-n-xs" type="submit"><strong>Save</strong></button>
                                    {errors.error && <span style={{color: '#ed5565'}} className="error-block">{errors.error}</span>}
                                </div>
                            </form>
                               {/*  <div className="col-sm-12 mt-3">
                                    <button onClick={this.loginWIthTwitter} className="btn btn-md btn-primary mt-3" type="submit"><strong>Signup with Twitter</strong></button>
                                </div> */}
                            <div className="col-sm-12 mt-12">
                                <button className="btn btn-md btn-danger mt-3" onClick={this.signupWithGoogle} ><strong>Signup with Google</strong></button><br/>
                                <button className="btn btn-md btn-default mt-3" onClick={this.signupFacebook} ><strong>Signup with Facebook</strong></button><br/>
                                <button className="btn btn-md btn-info mt-3" onClick={this.signupWIthTwitter} ><strong>Signup with Twitter</strong></button><br/>
                            </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>              
    )
  }
}

export default SignupForm;