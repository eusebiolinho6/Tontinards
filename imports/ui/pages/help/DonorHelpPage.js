import React, { Component, Fragment } from 'react';
import HeaderLayout from '../../globalComponents/layouts/HeaderLayout';

class HelpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <HeaderLayout />
        <section className="user-manual">
          <div className="container">
            <div className="row m-t-5">
              <div className="col">
                  <h2 className="text-center title">Usual manual for donor User</h2>
                  <div className="col-sm-12">
                      <p className=""><span>Goal:</span> This document will help a donor to know well all step to make a donation.</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default HelpPage;