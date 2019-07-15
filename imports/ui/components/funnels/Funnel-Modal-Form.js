import React, { Component, Fragment } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import Textarea from '../../globalComponents/Textarea';
import Summernote from '../../globalComponents/Summernote'
import Select from '../../globalComponents/Select';
import Upload from '../../globalComponents/Upload';
import validateInput from '../../../validations/funnel';
import {toObjectId} from '../../../utilities/'
import {Funnels, Images, Videos, Documents} from '../../../api/collections'
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
    projectName: props.projectName,
    onefoundRaiseAs: props.onefoundRaiseAs,
    oneForWhoFoundsRaise : props.oneForWhoFoundsRaise,
    objectifAmount : props.objectifAmount,
    zipCode:props.zipCode,
    description: props.description,
    industry: props.industry,
    category: props.category,
    errors: {},
    isLoading: false,
    id: '',
    show:false,
    imageFile:'',
    documentFile:'',
    videoFile: '',
    location: ''
    };
}   

componentWillReceiveProps(nextProps){
      const {show, projectName, onefoundRaiseAs, oneForWhoFoundsRaise, zipCode, objectifAmount,industry, category, description, id, location} = nextProps;
      this.setState( {show, projectName, onefoundRaiseAs, oneForWhoFoundsRaise ,zipCode, objectifAmount,industry, category, description, id, location});
}
    closeModal(){
        this.props.closeModal({show: false});
        this.setState({
            projectName: '',
            onefoundRaiseAs: '',
            oneForWhoFoundsRaise:'',
            objectifAmount : '',
            zipCode: '',
            description: '',
            industry: '',
            category:'',
            errors: {},
            isLoading: false,
            id: '',
            imageFile:'',
            documentFile:'',
            videoFile:'',
            location: '',
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
      console.log(name);
      console.log(value);
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
         projectName,
         onefoundRaiseAs,
         oneForWhoFoundsRaise,
         objectifAmount,
         zipCode ,
         description ,
         industry,
         category,
         location,
          id
     } = this.state;
     let data = {
         projectName,
         onefoundRaiseAs,
         oneForWhoFoundsRaise,
         objectifAmount,
         zipCode,
         description,
         category,
         industry,
         location,
        };
        
        //if (data.industry &&!data.industry._str) data.industry = toObjectId(data.industry);
        if (data.category&&!data.category._str)  data.category = toObjectId(data.category);
        if (data.onefoundRaiseAs&&!data.onefoundRaiseAs._str) data.onefoundRaiseAs = toObjectId(data.onefoundRaiseAs);
        if (data.oneForWhoFoundsRaise&&!data.oneForWhoFoundsRaise._str) data.oneForWhoFoundsRaise = toObjectId(data.oneForWhoFoundsRaise);
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
            const a ={global:err.error};
            this.setState({errors: {...errors,...a}, isLoading:false});
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
                if (!Object.keys(errors).length) this.closeModal();
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

      const {show, errors, projectName, onefoundRaiseAs, oneForWhoFoundsRaise, zipCode, objectifAmount, industry,category, description, isLoading, id, location } = this.state;
      const {image,video, document, industries, categories, foundRaiseAs , forWhoFoundsRaise} = this.props;
      const locations = ["Portugal", "Cameroun"];
      console.log(location);
    return (            
        <Modal bsSize="large"
        aria-labelledby="contained-modal-projectName-sm" show={show} backdrop={false} >
 <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
    <h3 className="text-center" > {id ?'Edit Funnel': ' Add Funnel'}</h3>
    </ModalHeader>
    <ModalBody>
        <h2>Funnel Informations</h2>
                <Input
                    field="projectName"
                    label="Project Name"
                    value={projectName}
                    error={errors.projectName}
                    onChange={(event)=> this.handleInputChange(event)}
                    />
                <Input
                    field="zipCode"
                    label="Zip Code"
                    type="number"
                    value={zipCode}
                    error={errors.zipCode}
                    onChange={(event)=> this.handleInputChange(event)}
                    />
                <Input
                    field="objectifAmount"
                    label="Objectif Amount"
                    type="number"
                    value={objectifAmount}
                    error={errors.objectifAmount}
                    onChange={(event)=> this.handleInputChange(event)}
                />
                <Select
                    field="location"
                    label="Location"
                    value={location}
                    options={locations}
                    error={errors.location}
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
                <Select
                    field="onefoundRaiseAs"
                    label="Found Raise As"
                    value={onefoundRaiseAs}
                    options={foundRaiseAs}
                    error={errors.onefoundRaiseAs}
                    onChange={(event)=> this.handleInputChange(event)}
                />
                <Select
                    field="oneForWhoFoundsRaise"
                    label="For Who Founds Raise"
                    value={oneForWhoFoundsRaise}
                    options={forWhoFoundsRaise}
                    error={errors.oneForWhoFoundsRaise}
                    onChange={(event)=> this.handleInputChange(event)}
                />
                <Summernote
                    field="description"
                    label="Enter the description"
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
    </ModalBody>
     
    <ModalFooter>
      <Button disabled={isLoading} onClick={()=> this.closeModal()}>Close {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
      <Button type="submit" disabled={isLoading} bsStyle="primary">Save {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
    </ModalFooter>
    </form>
  </Modal>
    )
  }
}

export default FunnelModalForm;