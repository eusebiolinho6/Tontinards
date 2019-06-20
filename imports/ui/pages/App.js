import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="wrapper wrapper-content animated fadeInRight">
     <Redirect to='/funnels/all/all' />
        {/**<div className="row">
            <div className="col-lg-12">
                <div className="text-center m-t-lg">
                    <h1>
                        Welcome in INSPINIA ReactJS Seed Project
                    </h1>
                    <small>
                        It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects.
                    </small>
                    <br />
                    <small>
                        <Link to="/funnels/all/all">Check our Funnels here</Link>
                    </small>
                </div>
            </div>
    </div>*/}
    </div>
    )
  }
}

export default App;