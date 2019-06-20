import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect, Link} from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import {asyncMethodCall} from '../../../utilities'
import CustomAlert from '../../components/CustomAlert';

// App component - represents the whole app
export default class NotFoundPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
<img src='https://solutiondots.com/wp-content/uploads/2015/06/defaultTemplate.png' style={{width: 500, display: 'block', margin: 'auto', marginTop:'25px' }} />
<center><Link to="/">Return to Home Page</Link></center>
</div>
    )
  }
}
