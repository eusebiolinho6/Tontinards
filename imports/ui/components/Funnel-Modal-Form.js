import React, { Component, Fragment } from 'react';
import { Button} from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Upload from './Upload';
import validateInput from '../../api/funnels/validations/funnel';
import {Funnels, Images, toObjectId} from '../../api/funnels/methods'

// App component - represents the whole app
class FunnelModalForm extends Component {
  constructor(props) {
    super(props);
this.state = {
    title: props.title,
    price:props.price,
     description: props.description,
    industry: props.industry,
    category: props.category,
    errors: {},
    isLoading: false,
    id: '',
    show:false,
    descriptionImage:'',
    funnelImage:''
    };
}
componentWillReceiveProps(nextProps){
      const {show, title, price,industry, category, description, isLoading, id } = nextProps;
      this.setState( {show, title, price,industry, category, description, isLoading, id });
}
    closeModal(){
        this.props.closeModal({show: false});
        this.setState({
            title: '',
            price: '',
            description: '',
            industry: '',
            category:'',
            errors: {},
            isLoading: false,
            id: '',
            descriptionImage:'',
            funnelImage:''
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

    setFile(name,file) {
        this.setState({
            [name]: file
        });
    }
saveFunnel(cb){
        const {
         title,
         price ,
         description ,
         industry,
         category,
          id
     } = this.state;
     let data = {
         title,
         price,
         description,
         category,
         industry     };
        
        if (data.industry &&!data.industry._str) data.industry = toObjectId(data.industry);
        if (data.category&&!data.category._str) data.category = toObjectId(data.category);
        if(id){
            data.updatedAt = new Date();  
          Funnels.update(id, {$set: data}, function(err, nbrow){
              if(err){
                return cb(err, null);
              } else {
                return cb(null, id)
              }
          });
        } else {
            data.createdAt = new Date();
            data._id = toObjectId(null);
             Funnels.insert(data, function (err, id) {
             if (err) {
                 return cb(err, null);
             } else {
                 return cb(null, id)
             }
             });
        }
}
  handleSUbmit(e) {
     e.preventDefault();
     if(!this.isValid()){
       return ;
     }
     this.saveFunnel((err, id)=>{
        if(err){
            console.log(err);
        } else {
        let uploads = [],
        cursor =1;
     if (this.state.descriptionImage) uploads.push('descriptionImage');
     if (this.state.funnelImage) uploads.push('funnelImage');  
     if (!uploads.length) return this.closeModal();
     for (let i = 0; i < uploads.length; i++) {
         const fieldName = uploads[i]; 
         const file = this.state[fieldName]; 
            const upload = Images.insert({
            file: file,
            streams: 'dynamic',
            chunkSize: 'dynamic'
        }, false);
        upload.on('end', (err,fileObj)=> {
            if (err) {
                console.log('Error during upload: ' + error);
            } else {
                const link= `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
                const field = fieldName+'Url';
                Funnels.update(id, {$set: {[field]: link}});
                console.log('File "' + fileObj.name + '" successfully uploaded');
                if (cursor < uploads.length){
                    cursor++;
                } else {
                    this.closeModal();
                } 
            }
        });
        upload.start();
     }  
        }
     })
  }
  render() {

      const {show, errors, title, price,industry,category, description, isLoading, id } = this.state;
      const {descriptionImageUrl, funnelImageUrl, industries, categories} = this.props;
    return (            
<Modal isOpen={show} className="modal-lg">
 <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
     {id ?'Edit Funnel': ' Add Funnel'}
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
                    type="number"
                    value={price}
                    error={errors.price}
                    onChange={(event)=> this.handleInputChange(event)}
                    />

                    <Select
                    field="industry"
                    label="Industry"
                    value={industry}
                    options={industries}
                    error={errors.industry}
                    onChange={(event)=> this.handleInputChange(event)}
                    />

                    <Select
                    field="category"
                    label="Category"
                    value={category}
                    options={categories}
                    error={errors.category}
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
                    <div className="row">
                    <Upload oldImage={descriptionImageUrl} setFile={(name,file)=>this.setFile(name, file)} name="descriptionImage" label="Upload Description Image" />
                    < Upload oldImage={funnelImageUrl} setFile={(name, file)=>this.setFile(name, file)} name="funnelImage" label = "Upload Funnel Image" />
                    </div>
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