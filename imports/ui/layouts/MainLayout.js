import React, { Component, Fragment } from 'react';

import Main from '../components/Main'

// App component - represents the whole app
class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Main />
    )
  }
}

export default MainLayout;