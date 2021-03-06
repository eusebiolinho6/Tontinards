import React, { Component, Fragment } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Input from '../../../globalComponents/Input';
import Upload from '../../../globalComponents/Upload';
import validateInput from '../../../../validations/foundRaiseAs';
import {toObjectId} from '../../../../utilities';
import {FoundRaiseAs} from '../../../../api/collections';

// App component - represents the whole app
class FoundRaiseAsModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: props.name,
        errors: {},
        isLoading: false,
        id: '',
        show:false,
    };
}
componentWillReceiveProps(nextProps){
      const {show, name, id } = nextProps;
      this.setState( {show, name, id });
}
    closeModal(){
        this.props.closeModal({show: false});
        this.setState({
    name: '',
    errors: {},
    isLoading: false,
    id: '',
    show:false,
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
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value
      });
  }
  handleSUbmit(e) {
     e.preventDefault();
     if(!this.isValid()){
       return ;
     }
     let data = {};
     const {name, id}=this.state;
     data.devName = name.toLowerCase().replace(/\s/g, '');
     data.name = name;
     if(id){
         data.updatedAt = new Date();
         FoundRaiseAs.update(id, {$set:data});
        } else {
        data.createdAt = new Date();
        data._id = toObjectId(null);
        FoundRaiseAs.insert(data);
     }
     this.closeModal();

  }
  render() {

      const {show, errors, name, isLoading, id } = this.state;
    return (            
<Modal bsSize="medium"
        aria-labelledby="contained-modal-projectName-sm" show={show} onHide={()=> this.closeModal()} backdrop={false} >
 <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
     {id ?'Edit FoundRaiseAs': ' Add FoundRaiseAs'}
    </ModalHeader>
    <ModalBody>
        <div className="col-md-12">
                <h2>FoundRaiseAs Info</h2>
                <Input
                    field="name"
                    label="Enter FoundRaiseAs name"
                    value={name}
                    error={errors.name}
                    onChange={(event)=> this.handleInputChange(event) }
                    />
        </div>
    </ModalBody>
     
    <ModalFooter>
      <Button onClick={()=> this.closeModal()}>Close</Button>
      <Button type="submit" bsStyle="primary">Save</Button>
    </ModalFooter>
    </form>
  </Modal>
    )
  }
}

export default FoundRaiseAsModalForm;