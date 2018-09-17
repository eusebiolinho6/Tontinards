import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from './Input';
import {asyncMethodCall} from '../../utilities/'
import ValidateLogin from '../../api/funnels/validations/login';
import ValidateSignup from '../../api/funnels/validations/signup';
import {Meteor} from 'meteor/meteor'
import { Button, Alert} from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Accounts } from 'meteor/accounts-base';

// App component - represents the whole app
class ModalSubscription extends Component {
  constructor(props) {
    super(props);
this.state = {
    email: '',
    password: '',
    name:'',
    username:'',
    confirmPassword: '',
    errors: {},
    isLoading: false,
    redirect:false,
    isLogin:true
    };
}
/**componentDidMount(){
    if(Meteor.loggingIn()){
        this.setState({redirect:true});
    }
}*/
initSubscription() {
    const {
        userId
    } = this.props;
    let {isLoading}=this.state;
    if(!isLoading){
        isLoading=true;
        this.setState({isLoading});
    }
    asyncMethodCall('initsubscription', {
        userId:userId
    }).then((result) =>{
        let links = result && result.links || [];
        if (links) {
            links.forEach(function (link) {
                if (link.rel === "approval_url") window.location = link.href;
            });
        }
    }).catch((er)=> {
        this.setState({
            errors: {reason: er.reason}
        });
    });
}
toggleView(e){
    e.preventDefault();
    const isLogin = !this.state.isLogin,
    errors={};
    this.setState({isLogin, errors});
}
    isValid() {
        let validate = this.state.isLogin?ValidateLogin:ValidateSignup;
        const {
            errors,
            isValid
        } = validate(this.state);

        if (!isValid) {
            this.setState({
                errors
            });
        }
        return isValid;
    }

    closeModal() {
        this.props.closeModal({
            show: false
        });
        this.setState({
            email:'',
            password: '',
            errors: {},
            username: '',
            name: '',
            confirmPassword:''
        });
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
    const {email, password,username,name, isLogin, errors} = this.state;
    const {userId}=this.props;
    return this.initSubscription();
     if(this.isValid()){
         this.setState({isLoading: true});
         if(isLogin){
            Meteor.loginWithPassword(email, password, (err)=>{
                if(err){
                  this.setState({errors: {password: 'No user with this email & password'}});
                } else {
                    this.initSubscription();
                }
            })
         } else {
            Accounts.createUser({profile:{name:name, role:"FREE"}, email,password,username}, (err)=>{
              if(err){
               this.setState({
                   errors: {reason: err.reason}
               });
              }else {
                  this.initSubscription();
              }
          })
         }
     }
  }
  render() {
      const { errors, email, password, isLoading, redirect, isLogin, name,username,confirmPassword } = this.state;
      const {show, userId} =this.props;
return (
<Modal isOpen={show} className="modal-md">
 <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
     {userId?'Purchase':(isLogin?'Login and Purchase':'Sign Up and Purchase')}
    </ModalHeader>
    <ModalBody>
      {userId?<Alert style={{textAlign:'center'}} bsStyle='warning'>
                Purchase to <strong>FOPSwipe</strong> and get access to <strong>all</strong> funnels : Images, Docs and Videos and more.
                </Alert>:
    (isLogin?<div className="col-md-12">
        <h2>Login Informations</h2>
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
                <span>Don't Yet have an account ? <a href="#" onClick={(e)=>this.toggleView(e)}>Sign Up</a></span>
        </div>:<div className="col-md-12">
        <h2>Sign Up Informations</h2>
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
            {errors.reason && <span style={{color: '#ed5565'}} className="error-block">{errors.reason}</span>}
          <span>Already member ? <a href="#" onClick={(e)=>this.toggleView(e)}>Sign In</a></span>
                  
        </div>)} 
       
        
        </ModalBody>
        
        <ModalFooter>
        <Button onClick={()=> this.closeModal()}>Close</Button>
        <Button type="submit" disabled={isLoading} bsStyle="primary">{userId? 'Purchase to FOPSwipe':(isLogin?'Login and Purchase':'Sign Up and Purchase')} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
        </ModalFooter>
        </form>
  </Modal>              
    )
  }
}

export default ModalSubscription;