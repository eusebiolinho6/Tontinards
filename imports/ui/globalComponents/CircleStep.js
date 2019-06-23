import React, { Component, Fragment } from 'react';
import NavLink from 'react-router-dom'


// App component - represents the whole app
class CircleStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {step } = this.props;
        return (
    <div className="step-container">
    <ul className="horizontal-step-list">
      <li>
        <button type="button" className={"btn btn-circle btn-primary"}>
           1
        </button>
      </li>
      {step==0 ? <li>
        <button type="button" className={"btn btn-circle pull-right  btn-default"}>
           2
        </button>
      </li>:<li>
        <button type="button" className={"btn btn-circle pull-right  btn-primary"}>
           2
        </button>
      </li>}
    </ul>
  </div>
           
        )
    }
}

export default CircleStep;
