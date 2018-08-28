import React, { Component } from 'react';

import Header from '../components/Header'

// App component - represents the whole app
class HeaderLayout extends Component {
  constructor(props) {
    super(props);
  }

  render () {
      return (
        <Header />
      )
  }
}

export default HeaderLayout