import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 
export default class AccountUIWrapper extends Component {
  componentDidMount() {
      console.log(Template);
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(<Blaze template="itemsList" />,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }
  render() {
    // Just render a placeholder container that will be filled in
    return <div style={{marginRight:'40px'}} ref="container" />
  }
}