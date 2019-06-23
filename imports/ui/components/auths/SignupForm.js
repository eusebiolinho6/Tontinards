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

  handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
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
            <div className="col-md-3 col-sm-1" />
            <div className="ibox col-md-6 col-sm-10 float-e-margins">
                <div className="ibox-title">
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
                    </div>
                </div>
            </div>
        </div> 
        </div>              
    )
  }
}

export default SignupForm;