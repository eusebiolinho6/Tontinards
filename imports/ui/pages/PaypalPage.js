import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import {asyncMethodCall} from '../../utilities/'
import CustomAlert from '../components/CustomAlert';
import { Session } from 'meteor/session';

// App component - represents the whole app
class PaypalPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading:false,
      redirect:false,
      type: 'danger',
      message:''
    }
  }
  componentDidMount(){
    this.subscribe();
  }
  returnLink(){
   return Session.get("previousUrl") || "/funnels/all/all";
  }
  subscribe(){
    let token = "";
    const {userId}=this.props;
    if (location.search) {
      const tab = location.search.split('token=');
      if (tab.length == 2 && tab[0] == '?') token = tab[1];
    }
    if(!token) return;
    this.setState({isLoading: true});
    asyncMethodCall('subscribeToFunnel',{token,userId}).then((r)=>{
      this.setState({
        isLoading: false,
        redirect: true,
        type: 'success',
        message: 'Subscription succeeds, welcome again.',
        
      });
    }).catch((er)=>{
       this.setState({
         isLoading: false,
         type: 'danger', 
         message: er.error
       });
    })
  }

  render() {
    const {redirect, isLoading,message, type}=this.state;
    if(redirect) return <Redirect to={this.returnLink()} />
    return (
      <div>
         <div id="overlay-paypal">
        {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</div>
        {message&&<CustomAlert text={message} type={type} ttl={5} />}
      </div>
    )
  }
}

export default withTracker((props) => {
  return {
    userId: Meteor.userId()
  }
})(PaypalPage)