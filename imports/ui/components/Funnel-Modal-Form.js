import React, { Component, Fragment } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Input from './Input';
import validateInput from '../../api/funnels/validations/funnel';

// App component - represents the whole app
class FunnelModalForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    identifier: '',
    password: '',
    errors: {},
    isLoading: false,
    show:false
    };
}
    toggleShow(){
        const {show} = this.state;
        this.setState({show: true});
        
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
     if(this.isValid()){
            console.log(this.state);
     }
      
  }
  render() {
      const { errors, identifier, password, isLoading } = this.state;
    return (
        <div>
             <div className="col-sm-3">
                    <button type="button" className="btn btn-sm btn-primary" onClick={()=> this.toggleShow() } > New Funnel</button>
            </div>
<Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <div className="col-md-12">
            <form role="form">
                <Input
                    field="identifier"
                    label="Username/Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={(event)=> this.handleInputChange(event) }
                    />
                <Input
                    field="password"
                    label="Pasword"
                    value={password}
                    error={errors.password}
                    onChange={(event)=> this.handleInputChange(event)}
                    />
            </form>
        </div>
    </Modal.Body>
    
    <Modal.Footer>
      <Button>Close</Button>
      <Button bsStyle="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
        </div>
    )
  }
}

export default FunnelModalForm;