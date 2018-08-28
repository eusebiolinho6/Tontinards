import React, { Component, Fragment } from 'react';

import HeaderLayout from '../layouts/HeaderLayout'
import MainLayout from '../layouts/MainLayout'

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <HeaderLayout />
        <MainLayout />
      </Fragment>
    )
  }
}

export default App;