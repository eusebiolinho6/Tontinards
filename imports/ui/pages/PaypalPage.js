import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import {asyncMethodCall} from '../../utilities/'
import CustomAlert from '../GlobalComponents/CustomAlert';

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
    let token = "";
    if (location.search) {
      const tab = location.search.split('token=');
      if (tab.length == 2 && tab[0] == '?') token = tab[1];
    }
    if(!token || token =="0"){
      this.setState({message: "Payment fails, please check your balance and try again"});
      setTimeout(() => {
        this.setState({redirect: true});
      }, 5000);
    } else {
       this.subscribe(token);
    }
  }
  returnLink(){
   let link= sessionStorage.getItem("currentFunnelUrl") || "/funnels/all/all";
   sessionStorage.clear("currentFunnelUrl");
   return link;
  }
  subscribe(token){
    const {userId}=this.props;
    
    if(!token) return;
    this.setState({isLoading: true});
    asyncMethodCall('executeAgreement',{token,userId}).then((r)=>{
      this.setState({
        isLoading: false,
        redirect: true,
        type: 'success',
        message: 'Subscription succeeds, welcome again.',
        
      });
    }).catch((err)=>{
      console.error(err);
       this.setState({
         isLoading: false,
         message: 'Error happens during operation, please try again.'
       });
       setTimeout(() => {
        this.setState({redirect: true});
      }, 5000);
    })
  }

  render() {
    const {redirect, isLoading,message, type}=this.state;
    if(redirect) return <Redirect to={this.returnLink()} />
    return (
      <div>
         <div id="overlay-paypal">
        {isLoading&&<i className="fa fa-gear fa-spin"></i>}</div>
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