import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

// App component - represents the whole app
class LoginForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  }
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
      console.log(this.state);
  }
  render() {
    return (
        <div onSubmit={(event) =>this.handleSUbmit(event)} className="wrapper wrapper-content animated fadeInRight">
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

                            <form role="form">
                                <div className="form-group"><label>Email</label> <input type="email"
                                                                                    placeholder="Enter email"
                                                                                    className="form-control" name="email" onChange={(event) => this.handleInputChange(event)} /></div>
                                <div className="form-group"><label>Password</label> <input type="password"
                                                                                       placeholder="Password"
                                                                                       className="form-control" name="password" onChange={(event) => this.handleInputChange(event)} /></div>
                                <div>
                                    <button className="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit"><strong>Log
                                        in</strong></button>
                                    <label> <input type="checkbox" /> Remember me </label>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6"><h4>Not a member?</h4>

                            <p>You can create an account:</p>

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