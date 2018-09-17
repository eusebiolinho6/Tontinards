import React, { Component, Fragment } from 'react';
import { Button} from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Upload from './Upload';
import validateInput from '../../api/funnels/validations/funnel';
import {toObjectId} from '../../utilities/'
import {Funnels, Images, Videos, Documents} from '../../api/collections/'
const collections = {
    documentFile: Documents,
    imageFile: Images,
    videoFile: Videos
}
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
    imageFile:'',
    documentFile:'',
    videoFile: ''
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
            imageFile:'',
            documentFile:'',
            videoFile:''
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
         industry 
        };
        
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
     const {errors}=this.state;
     this.setState({isLoading:true});
     this.saveFunnel((err, id)=>{
        if(err){
            
            this.setState({errors: {errors,...{global:err.reason}}, isLoading:false});
        } else {
        let uploads = [],
        cursor =1;
     if (this.state.imageFile) uploads.push('imageFile');
     if (this.state.videoFile) uploads.push('videoFile');
     if (this.state.documentFile) uploads.push('documentFile');  
     if (!uploads.length) return this.closeModal();
     for (let i = 0; i < uploads.length; i++) {
         const fieldName = uploads[i]; 
         let collection = collections[fieldName];
         if(!collection) return console.log('IMPOSSIBLE ERROR BUT WE NEED TO BE SURE');
         const file = this.state[fieldName]; 
            const upload = collection.insert({
            file: file,
            streams: 'dynamic',
            chunkSize: 'dynamic'
        }, false);
        upload.on('end', (err,fileObj)=> {
            if (err) {
                errors[fieldName]=err&&err.message;
                this.setState({errors});
            } else {
                const link= `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
                let a = fieldName.split('File');
                const field = a[0];
                Funnels.update(id, {$set: {[field]: link}});
            }
            if(!(cursor<uploads.length)){
                this.setState({isLoading:false});
                if (!errors) this.closeModal();
                return;
            } 
            cursor++;                 
        });
        upload.start();
     }  
        }
     })
  }
  render() {

      const {show, errors, title, price,industry,category, description, isLoading, id } = this.state;
      const {image,video, document, industries, categories} = this.props;
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
                    <Upload errors={errors} type="image" oldUrl={image} setFile={(name,file)=>this.setFile(name, file)} name="imageFile" label="Upload Funnel Image" />
                    <Upload errors={errors} type="document" oldUrl={document} setFile={(name, file)=>this.setFile(name, file)} name="documentFile" label = "Upload Funnel Document" />
                    <Upload errors={errors} type="video" oldUrl={video} setFile={(name, file)=>this.setFile(name, file)} name="videoFile" label = "Upload Funnel Video" />
                    </div>
                    {errors.global&& <span style={{color: '#ed5565', fontSize:'15px'}} className="error-block">{errors.global}</span>}
        </div>
    </ModalBody>
     
    <ModalFooter>
      <Button onClick={()=> this.closeModal()}>Close</Button>
      <Button type="submit" disabled={isLoading} bsStyle="primary">Save {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
    </ModalFooter>
    </form>
  </Modal>
    )
  }
}

export default FunnelModalForm;