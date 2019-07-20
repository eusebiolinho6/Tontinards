import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import Upload from '../../globalComponents/Upload';
import validateInput from '../../../validations/categories';
import {toObjectId} from '../../../utilities'
import TextArea from '../../globalComponents/Textarea';
import { Funnels }  from '../../../api/collections'

// App component - represents the whole app
class MessageForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    message: '',
    errors: {},
    isLoading: false,
    id: '',
    show:false,
    };
}

saveComment=()=>{
    const {message}=this.state;
    let data = {message};
    data._id = toObjectId(null);
    console.log(Funnels);
    Funnels.insert({ 
        message: data.message
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.saveComment();
}



handleChange = (e) => {
    this.setState({
        value: e
    });
}

render() {
    const {funnels} = this.props;

    return (
        <div className="input__container">
            <form className="input__form" onSubmit={this.handleSubmit}>
               <TextArea  label='leave comment here...'  onChange={(e) => this.setState({message: e.target.value})} ></TextArea>
               <button  type="submit" className="btn btn-sm btn-primary pull-right">Submit</button>
            </form>
        </div>
    );
}


}

export default withTracker(props=>{
    Meteor.subscribe('funnels');
  
    return {
        funnels: Funnels.find({}).fetch(),
      }
  })(MessageForm)