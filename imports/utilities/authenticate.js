import React, { Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Meteor} from 'meteor/meteor'
import { checkRole } from './index';

export default function(ComposedComponent){
    class Authenticate extends Component{
        constructor(props){
            super(props);
            this.state = {
                redirect: false
            }
        }
        /**componentDidMount(){
            if (checkRole(['admin'], Meteor.userId()) ) this.setState({redirect: true});
        }

        componentDidUpdate(){
            if (checkRole(['admin'], Meteor.userId()) ) this.setState({redirect: true});
        }*/

        render(){
            const {redirect} = this.state;
            return(
                <ComposedComponent {...this.props} />
        )
        }
    }
    return Authenticate;
}