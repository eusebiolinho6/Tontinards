import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from './Input';
import validateInput from '../../api/funnels/validations/login.js';
import {Meteor} from 'meteor/meteor'

// App component - represents the whole app
class LoginForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    email: '',
    password: '',
    errors: {},
    isLoading: false,
    redirect:false
    };
}
/**componentDidMount(){
    if(Meteor.loggingIn()){
        this.setState({redirect:true});
    }
}*/
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

  handleSUbmit(e) {
     e.preventDefault();
     const {email, password}=this.state;
     if(this.isValid()){
            Meteor.loginWithPassword(email, password, (err)=>{
                if(err){
                  this.setState({errors: {password: 'No user with this email & password'}});
                } else {
                 this.setState({redirect:true});
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
            <div className="col-md-2" />
            <div className="ibox col-md-8 float-e-margins">
                <div className="ibox-title">
                    <h5>Sign in to see all our funnels
                    </h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-sm-6 b-r"><h3 className="m-t-none m-b">Sign in</h3>

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
                                    <button className="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit"><strong>Log
                                        in</strong></button>
                                    <label> <input type="checkbox" /> Remember me </label>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6"><h4>Not a member?</h4>

                            <p>Buy one our product and signed up</p>

                            <p className="text-center">
                                <Link to="/authentication/signup"><i className="fa fa-sign-in big-icon"></i></Link>
                            </p>
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