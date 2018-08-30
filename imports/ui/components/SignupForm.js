import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

// App component - represents the whole app
class AdminComponent extends Component {
  constructor(props) {
    super(props);
      this.state = {
    email: '',
    password: '',
     username: '',
    name: '',
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

  handleSUbmit(e){
      e.preventDefault();
      console.log(this.state);
  }

  render() {
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
                                <div className="form-group"><label>Username</label> <input type="text" name="username"
                                                                                    placeholder="Enter Username"
                                                                                    className="form-control" value={this.state.username} onChange={(event) => this.handleInputChange(event)}/></div>
                                <div className="form-group"><label>Name</label> <input type="text" name="name"
                                                                                    placeholder="Enter Name"
                                                                                    className="form-control" value={this.state.name} onChange={(event) => this.handleInputChange(event)}/></div>
                                <div className="form-group"><label>Email</label> <input type="email" name="email"
                                                                                    placeholder="Enter email"
                                                                                    className="form-control" value={this.state.email} onChange={(event) => this.handleInputChange(event)}/></div>
                                <div className="form-group"><label>Password</label> <input type="password" name="password"
                                                                                       placeholder="Enter Password"
                                                                                       className="form-control" value={this.state.password} onChange={(event) => this.handleInputChange(event)} /></div>
                                <div>
                                    <button className="btn btn-md btn-primary m-t-n-xs" type="submit"><strong>Save</strong></button>
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

export default AdminComponent;