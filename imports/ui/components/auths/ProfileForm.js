import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import validateInput from '../../../validations/signup';
import {Meteor} from 'meteor/meteor'

// App component - represents the whole app
class ProfileForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
        email: '',
        username: '',
        name: '',
        password: 'a',
        confirmPassword: "a",
        errors: {},
        redirect:false,
        duplicatedData: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.updateFields()
    }
  }

    componentDidMount(){
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
      const {email,username,name} = this.state;
      if(this.isValid()){
         // Update and redirect
         Meteor.call('updateProfile', name, email, username, (err, res) => {
            if (err) {
                // Username or email already exist
                this.setState({duplicatedData: true})
            } else {
                this.setState({ redirect: true, duplicatedData: false })
            }
         });
      }
      
  }

  // This update Dom Fields with the current user dataq
  updateFields = () => {
    this.setState({
        email: this.props.user.emails ? this.props.user.emails[0].address : '',
        username: this.props.user.username ? this.props.user.username : '',
        name: this.props.user.profile ? this.props.user.profile.name : '',
    })
  }


  render() {
      const { name, username, email, errors, redirect } = this.state;
      if(redirect) return <Redirect to="/funnels/all/all" />
    return (
    <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
            <div className="col-md-3 col-sm-1"></div>   
            <div className="ibox col-md-6 col-sm-10 col-md-offset-3 col-sm-offset-1 float-e-margins">
                <div className="ibox-title">
                    <h5>Update your informations</h5>
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
                                {
                                    this.state.duplicatedData ?
                                    <div className="alert alert-danger" role="alert">
                                        Email or Username already exist.
                                    </div>: null
                                }
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

export default ProfileForm;