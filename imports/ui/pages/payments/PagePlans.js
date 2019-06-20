import React, { Component, Fragment } from 'react';
import PlansLayout from '../../layouts/payments/PlansLayout';
import HeaderLayout from '../../layouts/HeaderLayout';
// App component - represents the whole app
class PagePlans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Fragment>
        <HeaderLayout />
        <PlansLayout />
        </Fragment>
    )
  }
}

export default PagePlans;