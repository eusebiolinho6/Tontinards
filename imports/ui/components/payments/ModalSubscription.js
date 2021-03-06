import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import {asyncMethodCall, checkRole} from '../../../utilities/'
import ValidateLogin from '../../../validations/login';
import ValidateSignup from '../../../validations/signup';
import {Meteor} from 'meteor/meteor'
import {Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import { Accounts } from 'meteor/accounts-base';
import CircleStep from '../../globalComponents/CircleStep';

// App component - represents the whole app
class ModalSubscription extends Component {
  constructor(props) {
    super(props);
this.state = {
    email: '',
    password: '',
    name:'',
    confirmPassword: '',
    errors: {},
    isLoading: false,
    redirect:false,
    isLogin:true,
    step: 0,
    class0: 'btn-primary',
    class1: 'btn-default',
    isNew:false
    };
}

initiateAgreement(arg) { console.log("initiateAgreement CALLED")
    const userId = Meteor.userId();
    let {isLoading}=this.state;
    if(!isLoading){ console.log("IS LOADING")
        isLoading=true;
        this.setState({isLoading});
    }
    asyncMethodCall('initiateAgreement', {
        userId:userId
    }).then((result) =>{ console.log(result)
        sessionStorage.setItem('currentFunnelUrl', location.pathname);
        let links = result && result.links || [];
        if (links) {
            links.forEach((link)=> {
                if (link.rel === "approval_url"){
                    if(arg){
                        this.setState({step:1});
                        return setTimeout(() => {
                            if(this.state.email){
                              window.location = link.href;
                            }
                        }, 5000);
                    } else {
                        window.location = link.href;
                    }
                } 
            });
        }
    }).catch((err)=> {
        this.setState({
            errors: {error: err.message||err.reason}, isLoading:false
        });
    });
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
    toggleView(e,nc){
         e.preventDefault();
        const isLogin = !this.state.isLogin,
        errors={};
        const c=(nc+1)%2,
        current = 'class'+nc,
        other = 'class'+c;
        this.setState({isLogin:isLogin, errors:errors, [current]:'btn-primary', [other]:'btn-default'});

    }
    closeModal() {
        this.props.closeModal();
        this.setState({
            email:'',
            password: '',
            errors: {},
            name: '',
            confirmPassword:'',
            isLogin: true,
            step: 0,
            class0: 'btn-primary',
            class1: 'btn-default',
            isNew:false
        });
    }


  handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
      });
  }

  handleSUbmit(e) { console.log("HANDLE SUBMIT")
     e.preventDefault();
    const {email, password,name, isLogin} = this.state;
    let {errors}=this.state;
    let userId=Meteor.userId(); console.log(userId)
    if(userId) return this.initiateAgreement();
    if(this.isValid()){ console.log(1)
         this.setState({isLoading: true});
         if(isLogin){console.log(11)
            Meteor.loginWithPassword(email, password, (err)=>{
                if(err){ console.log("meteor err")
                  errors.password ='No user with this email & password';
                  this.setState({errors:errors, isLoading:false});
                } else { console.log(111)
                    userId=Meteor.userId();
                      const isAuthorized = checkRole(['admin', 'paid'], userId);
                      console.log(isAuthorized);
                      if (isAuthorized) { console.log("is authorized")
                          if (this.props.downloadFile){ console.log("download File")
                            setTimeout(() => {
                                this.props.downloadFile();
                            }, 500);
                          }
                          return this.closeModal();    
                      } else { console.log("is not authorized")
                          this.setState({isNew:true});
                       return this.initiateAgreement('new');
                      }
                }
            })
         } else {console.log(12)
            Accounts.createUser({profile:{name:name, role:"FREE"}, email,password}, (err)=>{
              if(err){
               this.setState({
                    errors: {error: err.message||err.reason}, isLoading:false
                });
              }else {
                    this.setState({isNew:true});
                    this.initiateAgreement('new');
              }
          })
         }
     }
  }
  render() {
      const { errors, email, isNew, password, isLoading, redirect, isLogin, name,confirmPassword, step, class0, class1 } = this.state;
      const {show, userId} =this.props;
return (
<Modal bsSize="md"
        aria-labelledby="contained-modal-projectName-sm" show={show} onHide={()=> this.closeModal()} backdrop={false} >
 <form role="form" className="modal-subscription" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
     {userId&&!isNew?'Purchase to FOPSwipe':<CircleStep step={step} />}
    </ModalHeader>
    <ModalBody>
      {userId?<div><Alert style={{textAlign:'center'}} bsStyle='warning'>
                Purchase to <strong>FOPSwipe</strong> and get access to <strong>all</strong> funnels : Images, Docs and Videos and more.
                </Alert>
                {step?<p>You will be redirect to paypal in 5 seconds... <br />Close the modal if you don't want to purchase</p>:''}
                </div> :
                <div>
                    <div className="btn-group col-md-12">
                    <div style={{width:'250px', display:'block', margin:'auto'}} >
                    <button style={{width:'125px'}} onClick={(e)=>this.toggleView(e, 0)} type="button" className={"btn btn-md "+class0}>Log In</button>
                    <button style={{width:'125px'}} onClick={(e)=>this.toggleView(e, 1)} type="button" className={"btn btn-md "+class1}>Register</button>
                    </div>
                    </div>
                    {isLogin?<div className="col-md-12">
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
                <span>Don't Yet have an account ? <a href="#" onClick={(e)=>this.toggleView(e, 1)}>Sign Up</a></span>
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
          <span>Already member ? <a href="#" onClick={(e)=>this.toggleView(e, 0)}>Sign In</a></span>
          <br />
          {errors.error && <span style={{color: '#ed5565'}} className="error-block">{errors.error}</span>}
        </div>}
                </div>
                }  
        </ModalBody> 
        <ModalFooter>
        {step?<Button onClick={()=> this.closeModal()}>Close</Button>:''}
        {!step?<Button disabled={isLoading} onClick={()=> this.closeModal()}>Close {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>:''}
        {!step?<Button type="submit" disabled={isLoading} bsStyle="primary">{userId? 'Purchase to FOPSwipe':(isLogin?'Login and Purchase':'Sign Up and Purchase')} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>:''}
        </ModalFooter>
        </form>
  </Modal>              
    )
  }
}

export default ModalSubscription;