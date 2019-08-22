import React, { Component, Fragment } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import Input from '../../../globalComponents/Input';
import validateInput from '../../../../validations/categories';
import {toObjectId} from '../../../../utilities'
import {TypeOfDonations} from '../../../../api/collections'

// App component - represents the whole app
class ValidationModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.comment,
            errors: {},
            isLoading: false,
            id: '',
            show:false,
        };
    }
    componentWillReceiveProps(nextProps){
        const {show, id, comment } = nextProps;
        this.setState({ show, id, comment });
    }

    closeModal(){
        this.props.closeModal({show: false});
        this.setState({
            errors: {},
            isLoading: false,
            id: '',
            show:false,
            comment: ''
        });
    }

    isValid() {
        const {
            errors,
            isValid
        } = validateInput(this.state);

        if (!isValid) {
            this.setState({
                errors
            });
        }

        return isValid;
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({
            comment: value
        });
    }
  
    handleSUbmit(e) {
        e.preventDefault();
        // update comment and Validate donation
        Meteor.call('validateDonate', this.props.don, this.props.projectId, this.state.comment);
        this.props.displayNotification();
        this.closeModal();
    }

  render() {

    const {show, errors, isLoading, id, comment } = this.state;
    return (            
        <Modal bsSize="medium" aria-labelledby="contained-modal-projectName-sm" show={show} onHide={()=> this.closeModal()} backdrop={false} >
            <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
                <ModalHeader>
                {'Donnor Comment & Donation Validation'}
                </ModalHeader>
                <ModalBody>
                    <div className="col-md-12">
                        <h3>Edit Donor comment</h3>
                        <textarea defaultValue={comment} className="form-control" onChange={(event)=> this.handleInputChange(event)} placeholder="" rows="4">
                        </textarea>
                    </div>
                </ModalBody>
                
                <ModalFooter>
                <Button onClick={()=> this.closeModal()}>Close</Button>
                <Button type="submit" bsStyle="primary">Save and Validate</Button>
                </ModalFooter>
            </form>
        </Modal>
    )
  }
}

export default ValidationModalForm;