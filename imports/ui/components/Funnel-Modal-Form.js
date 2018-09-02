import React, { Component, Fragment } from 'react';
import { Button} from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Upload from './Upload';
import validateInput from '../../api/funnels/validations/funnel';
import {Funnels} from '../../api/funnels/methods'

// App component - represents the whole app
class FunnelModalForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    title: props.title,
    price:props.price,
     description: props.description,
    industry: props.industry,
    errors: {},
    isLoading: false,
    id: '',
    show:false
    };
}
componentWillReceiveProps(nextProps){
      const {show, title, price,industry, description, isLoading, id } = nextProps;
      this.setState( {show, title, price,industry, description, isLoading, id });
}
    closeModal(){
        this.props.closeModal({show: false});
        this.setState({
            title: '',
            price: '',
            description: '',
            industry: '',
            errors: {},
            isLoading: false,
            id: ''
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
    const {
         title,
         price ,
         description ,
         industry,
          id
     } = this.state;
        if(id){
           Funnels.update(id, Object.assign({}, {
               title,
               price,
               description,
               industry
           }, {
               updatedAt: new Date()
           }))
        } else {
             Funnels.insert(Object.assign({}, {
            title,
            price ,
            description ,
            industry
        } , {createdAt: new Date()}))
    }
        this.closeModal();
  }
  render() {

      const {show, errors, title, price,industry, description, isLoading } = this.state;
      const options = [{label: 'E-commerce', value: 'e-commerce'}, {label: 'B2B', value: 'b2b'}];
    return (            
<Modal isOpen={show} className="modal-lg">
 <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
     Add Funnel
    </ModalHeader>
    <ModalBody>
        <div className="col-md-12">
                <h2>Funnel Info</h2>
                <Input
                    field="title"
                    label="Title"
                    value={title}
                    error={errors.title}
                    onChange={(event)=> this.handleInputChange(event) }
                    />
                <Input
                    field="price"
                    label="Price"
                    value={price}
                    error={errors.price}
                    onChange={(event)=> this.handleInputChange(event)}
                    />

                    <Select
                    field="industry"
                    label="Industry"
                    value={industry}
                    options={options}
                    error={errors.industry}
                    onChange={(event)=> this.handleInputChange(event)}
                    />
                     
                    <Textarea
                    field="description"
                    label="Description"
                    value={description}
                    error={errors.description}
                    onChange={(event)=> this.handleInputChange(event)}
                    />
                    <h2>Uploads</h2>
                    <br />
                    <Upload />
                    <Upload />
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

export default FunnelModalForm;