import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Input from './Input';
import validateInput from '../../api/funnels/validations/login.js';

// App component - represents the whole app
class LoginForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    identifier: '',
    password: '',
    errors: {},
    isLoading: false
    };
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

  handleSUbmit(e) {
     e.preventDefault();
     if(this.isValid()){
            console.log(this.state);
     }
      
  }
  render() {
      const { errors, identifier, password, isLoading } = this.state;
    return (
        <div className="wrapper wrapper-content animated fadeInRight">
             <div className="row">
            <div className="col-md-2" />
            <div className="ibox col-md-8 float-e-margins">
                <div className="ibox-title">
                    <h5>Sign in to see all your funnels
                    </h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-sm-6 b-r"><h3 className="m-t-none m-b">Sign in</h3>

                            <form onSubmit={(event) => this.handleSUbmit(event)} role="form">
                                <Input
                                    field="identifier"
                                    label="Username/Email"
                                    value={identifier}
                                    error={errors.identifier}
                                    onChange={(event)=> this.handleInputChange(event) }
                                    />
                                <Input
                                    field="password"
                                    label="Pasword"
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
                                <Link to="/funnels"><i className="fa fa-sign-in big-icon"></i></Link>
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