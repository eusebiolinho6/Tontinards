import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';;
import LandingPage from './home/LandingPage';
import FunnelList from '../pages/funnels/FunnelList';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    //  <div className="wrapper wrapper-content animated fadeInRight">
     <div className="wrapper wrapper-content">
      <Redirect to='/project/all' />
      {/* <LandingPage /> */}
      {/* <h1>HOOOOOOOOOOOOHEEEEEEEEEEEEEE</h1> */}
    </div>
    )
  }
}

export default App;