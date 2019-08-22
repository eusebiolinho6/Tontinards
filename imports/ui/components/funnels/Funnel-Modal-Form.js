// import React, { Component, Fragment } from 'react';

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';

// import { Link } from 'react-router-dom';

// import Input from '../../globalComponents/Input';
// import Select from '../../globalComponents/Select';
// import Summernote from '../../globalComponents/Summernote';
// import {toObjectId} from '../../../utilities/';
// import Textarea from '../../globalComponents/Textarea';
// import Upload from '../../globalComponents/Upload';
// import { Funnels, Images, Videos, Documents } from '../../../api/collections';
// import validateInput from '../../../validations/funnel';
// const collections = {
//     documentFile: Documents,
//     projectImage: Images,
//     teamImage: Images,
//     videoFile: Videos
// }
// // App component - represents the whole app
// class FunnelModalForm extends Component {
//     constructor(props) {
//         super(props); console.log(props)
//         this.state = {
//             projectName: props.projectName,
//             city: props.city,
//             userId: props.user,
//             onefoundRaiseAs: props.onefoundRaiseAs,
//             oneForWhoFoundsRaise: props.oneForWhoFoundsRaise,
//             objectifAmount: props.objectifAmount,
//             phoneNumber: props.phoneNumber,
//             description: props.description,
//             category: props.category,
//             errors: {},
//             isLoading: false,
//             id: '',
//             show: false,
//             projectImage: '',
//             teamName: props.teamName,
//             projectState: props.projectState,
//             currentAmount: props.currentAmount,
//             teamImage: '',
//             documentFile: '',
//             videoFile: '',
//             email: '',
//             feedback: props.feedback,
//             country: props.country,
//             phoneNumber : props.phoneNumber,
//         };
//     }

//     componentWillReceiveProps(nextProps) {
//         const { show, userId,city, projectName, teamName, projectState, currentAmount, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber, email,objectifAmount,feedback, category, description, id, country } = nextProps;
//         // const documentFile = nextProps.document;
//         this.setState({ show, userId,city, projectName, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email,feedback, objectifAmount, category, description, id, country });
        
    
//     }
//     closeModal() {
//         this.props.closeModal({ show: false });
//         this.setState({
//             projectName: '',
//             city: '',
//             projectState: '',
//             currentAmount: '',
//             onefoundRaiseAs: '',
//             oneForWhoFoundsRaise: '',
//             objectifAmount: '',
//             phoneNumber: '',
//             description: '',
//             category: '',
//             errors: {},
//             isLoading: false,
//             id: '',
//             projectImage: '',
//             teamName: '',
//             teamImage: '',
//             documentFile: '',
//             videoFile: '',
//             email: '',
//             country: '',
//             feedback: ''
//         });
//     }
//     isValid() {

//     const {
//         errors,
//         isValid
//     } = validateInput(this.state);

//     if (!isValid) {
//         console.log(errors);
//         this.setState({
//             errors
//         });
//     }

//         return isValid;
//     }

//     handleInputChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;
//         console.log(value);
//         console.log(name);
//         this.setState({
//             [name]: value
//         });
//     }

//     setFile(name, file) {
//         console.log(file);
//         console.log(name);
//         this.setState({
//             [name]: file
//         });
//     }
//     saveFunnel(cb) {
//         const {
//             projectName,
//             userId,
//             city,
//             projectState,
//             currentAmount,
//             teamName,
//             onefoundRaiseAs,
//             oneForWhoFoundsRaise,
//             objectifAmount,
//             phoneNumber,
//             description,
//             category,
//             country,
//             email,
//             id,
//             feedback
//         } = this.state;
//         let data = {
//             projectName,
//             userId,
//             city,
//             projectState,
//             currentAmount,
//             teamName,
//             onefoundRaiseAs,
//             oneForWhoFoundsRaise,
//             objectifAmount,
//             phoneNumber,
//             description,
//             category,
//             email,
//             country,
//             feedback
//         };

//         //if (data.userId && !data.userId._str) data.userId = toObjectId(data.userId);
//         if (data.category && !data.category._str) data.category = toObjectId(data.category);
//         if (data.onefoundRaiseAs && !data.onefoundRaiseAs._str) data.onefoundRaiseAs = toObjectId(data.onefoundRaiseAs);
//         if (data.oneForWhoFoundsRaise && !data.oneForWhoFoundsRaise._str) data.oneForWhoFoundsRaise = toObjectId(data.oneForWhoFoundsRaise);
//         if (id) {
//             data.updatedAt = new Date();
//             Funnels.update(id, { $set: data }, function (err, nbrow) {
//                 if (err) {
//                     return cb(err, null);
//                 } else {
//                     return cb(null, id)
//                 }
//             });
//         } else {
//             data.createdAt = new Date();
//             data._id = toObjectId(null);
//             Funnels.insert(data, function (err, id) {
//                 if (err) {
//                     return cb(err, null);
//                 } else {
//                     return cb(null, id);
//                 }
//             });
//         }
//     }

//     /* async loadCountry() {
//         const countries = await axios.get('https://restcountries.eu/rest/v2/all')
//             .then(function (response) {
//                 // handle success
//                 return response;
//                 console.log(this.state.category);
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//             .finally(function () {
//                 // always executed
//             });
//         this.setState({ countries: countries.data });
//     } */
//     handleSUbmit(e) { console.log(this.state);
//         e.preventDefault();
//         if (!this.isValid()) {
//             return;
//         }
//         const { errors } = this.state;
//         this.setState({ isLoading: true });
//         console.log(this.state.projectImage != "")
//         console.log(this.state.documentFile != "")
//         console.log(this.state.projectImage)
//         this.saveFunnel((err, id) => {
//             console.log(this.state.projectImage)
//             if (err) {   console.log("ERRRRRRRRRRORRRRRR")
//             const a = { global: err.error };
//             this.setState({ errors: { ...errors, ...a }, isLoading: false });
//         } else {  console.log("NOT ERRR");  
//                 console.log(this.state.projectImage)
//                 let uploads = [],
//                     cursor = 1;
//                 if (5 != 8) uploads.push('projectImage');
//                 if (5 != 8) uploads.push('documentFile');
//                 // if (this.state.projectImage != "") uploads.push('projectImage');
//                 if (this.state.teamImage != "") uploads.push('teamImage');
//                 if (this.state.videoFile != "") uploads.push('videoFile');
//                 // if (this.state.documentFile != "") uploads.push('documentFile');
//                 console.log(uploads);
//                 if (!uploads.length) return this.closeModal();
//                 console.log(this.state.projectImage);
//                 for (let i = 0; i < uploads.length; i++) {
//                     console.log(this.state.projectImage);
//                     const fieldName = uploads[i];
//                     let collection = collections[fieldName];
//                     if (!collection) return console.log('IMPOSSIBLE ERROR BUT WE NEED TO BE SURE');
//                     console.log(this.state.projectImage);
//                     const file = this.state[fieldName];
//                     const upload = collection.insert({
//                         file: file,
//                         streams: 'dynamic',
//                         chunkSize: 'dynamic'
//                     }, false);
//                     upload.on('end', (err, fileObj) => {
//                         if (err) {
//                             errors[fieldName] = err && err.message;
//                             this.setState({ errors });
//                         } else {
//                             const link = `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
//                             let a = fieldName.split('File');
//                             const field = a[0]; 
//                             Funnels.update(id, { $set: { [field]: link } });
//                         }
//                         if (!(cursor < uploads.length)) { 
//                             this.setState({ isLoading: false });
//                             if (!Object.keys(errors).length) this.closeModal();
//                             return;
//                         }
//                         cursor++;
//                     });
//                     upload.start();
//                 }
//             }
//         })
//         this.closeModal();
//     }
//     render() {

//         const { show, errors, projectName, city,userId, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email, objectifAmount, category, description, isLoading, id, country, feedback } = this.state;
//         const { projectImage, teamImage, video, document, categories, foundRaiseAs, forWhoFoundsRaise, countries, user  } = this.props;

//         console.log(foundRaiseAs);
//         return (
//             <Modal bsSize="large"
//                 aria-labelledby="contained-modal-projectName-sm" show={show} backdrop={false} >
//                 <form role="form" onSubmit={(event) => this.handleSUbmit(event)}>
//                     <ModalHeader>
//                         <h3 className="text-center" > {id ? 'Edit Project' : ' Add Project'}</h3>
//                     </ModalHeader>
//                     <ModalBody>
//                         <h2>Project Informations</h2>
//                         <Input
//                             field="projectName"
//                             label="Project Name"
//                             type="text"
//                             value={projectName}
//                             error={errors.projectName}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />
//                         <Input
//                             field="phoneNumber"
//                             label="Phone Number"
//                             type="number"
//                             value={phoneNumber}
//                             error={errors.phoneNumber}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />

//                         <Input
//                             field="email"
//                             label="Email"
//                             type="email"
//                             value={email}
//                             error={errors.email}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />

//                         <Input
//                             field="objectifAmount"
//                             label="Objective Amount"
//                             type="number"
//                             value={objectifAmount}
//                             error={errors.objectifAmount}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />

//                         <label>Country</label>
//                         <select name="country" onChange={(event) => this.handleInputChange(event)}>
//                             <option> {id ? country : 'Select Country'}</option>
//                             {countries.map((item) =>(<option key={item.name} value={item.name}>{item.name}</option>))}
//                         </select>
//                         <Input
//                             field="city"
//                             label="City"
//                             value={city}
//                             error={errors.city}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />
//                         <Select
//                             field="category"
//                             label="Category"
//                             value={category}
//                             options={categories}
//                             error={errors.category}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />
//                         <Select
//                             field="onefoundRaiseAs"
//                             label="Funds Raise As"
//                             value={onefoundRaiseAs}
//                             options={foundRaiseAs}
//                             error={errors.onefoundRaiseAs}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />
//                         <Select
//                             field="oneForWhoFoundsRaise"
//                             label="Funds Raise For"
//                             value={oneForWhoFoundsRaise}
//                             options={forWhoFoundsRaise}
//                             error={errors.oneForWhoFoundsRaise}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />
//                         <Summernote
//                             field="description"
//                             label="Enter the description"
//                             value={description}
//                             error={errors.description}
//                             onChange={(event) => this.handleInputChange(event)}
//                         />
//                         {
//                             this.props.isReview ? 
//                             <Summernote
//                                 field="feedback"
//                                 label="Enter the review"
//                                 value={feedback}
//                                 error={errors.feedback}
//                                 onChange={(event) => this.handleInputChange(event)} />: null
//                         }
                        
//                         {/* hide team Informations when user selects personnal funds reason  */}
//                         {onefoundRaiseAs == "foundRaiseAs[0]._id" ?                        
//                             <div>
//                                 <h2>Team Informations</h2>
//                                 <Input
//                                     field="teamName"
//                                     label="Team Name"
//                                     value={teamName}
//                                     error={errors.teamName}
//                                     onChange={(event) => this.handleInputChange(event)}
//                                     size={250}
//                                 />
//                                 <div className="row">
//                                     <Upload errors={errors} type="image" oldUrl={teamImage} setFile={(name, file) => this.setFile(name, file)} name="teamImage" label="Upload Team Image" />
//                                 </div>
//                             </div>
//                         :   
//                             null
//                         }
//                         <h2>Uploads</h2>
//                         <br />
//                         <div className="row">
//                             <Upload errors={errors} type="image" oldUrl={projectImage} setFile={(name, file) => this.setFile(name, file)} name="projectImage" label="Upload Project Image" />
//                             <Upload errors={errors} type="document" oldUrl={document} setFile={(name, file) => this.setFile(name, file)} name="documentFile" label="Upload Project Document" />
//                             <Upload errors={errors} type="video" oldUrl={video} setFile={(name, file) => this.setFile(name, file)} name="videoFile" label="Upload Project Video" />
//                         </div>
//                         {errors.global && <span style={{ color: '#ed5565', fontSize: '15px' }} className="error-block">{errors.global}</span>}
//                     </ModalBody>

//                     <ModalFooter>
//                         <Button disabled={isLoading} onClick={() => this.closeModal()}>Close {isLoading && <i className="fa fa-spin fa-spinner"></i>}</Button>
//                         <Button type="submit" disabled={isLoading} bsStyle="primary">Save {isLoading && <i className="fa fa-spin fa-spinner"></i>}</Button>
//                     </ModalFooter>
//                 </form>
//             </Modal>
//         )
//     }
// }

// export default FunnelModalForm;


// import React, { Component, Fragment } from 'react';
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import Input from '../../globalComponents/Input';
// import Textarea from '../../globalComponents/Textarea';
// import Summernote from '../../globalComponents/Summernote'
// import Select from '../../globalComponents/Select';
// import Upload from '../../globalComponents/Upload';
// import validateInput from '../../../validations/funnel';
// import {toObjectId} from '../../../utilities/'
// import {Funnels, Images, Videos, Documents} from '../../../api/collections'
// const collections = {
//     documentFile: Documents,
//     projectImage: Images,
//     videoFile: Videos
// }
// // App component - represents the whole app
// class FunnelModalForm extends Component {
//   constructor(props) { 
//       super(props);
//       console.log(props);
//     this.state = {
//         projectName: props.projectName,
//         city: props.city,
//         userId: props.user,
//         onefoundRaiseAs: props.onefoundRaiseAs,
//         oneForWhoFoundsRaise: props.oneForWhoFoundsRaise,
//         objectifAmount: props.objectifAmount,
//         phoneNumber: props.phoneNumber,
//         description: props.description,
//         category: props.category,
//         errors: {},
//         isLoading: false,
//         id: '',
//         show: false,
//         projectImage: '',
//         teamName: props.teamName,
//         projectState: props.projectState,
//         currentAmount: props.currentAmount,
//         teamImage: '',
//         documentFile: '',
//         videoFile: '',
//         email: '',
//         feedback: props.feedback,
//         country: props.country,
//         phoneNumber : props.phoneNumber,
//     };
// }   

//     componentWillReceiveProps(nextProps) {
//         const { show, userId,city, projectName, teamName, projectState, currentAmount, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber, email,objectifAmount,feedback, category, description, id, country } = nextProps;
//         this.setState({ show, userId,city, projectName, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email,feedback, objectifAmount, category, description, id, country });
        
    
//     }
//     closeModal() {
//         this.props.closeModal({ show: false });
//         this.setState({
//             projectName: '',
//             city: '',
//             projectState: '',
//             currentAmount: '',
//             onefoundRaiseAs: '',
//             oneForWhoFoundsRaise: '',
//             objectifAmount: '',
//             phoneNumber: '',
//             description: '',
//             category: '',
//             errors: {},
//             isLoading: false,
//             id: '',
//             projectImage: '',
//             teamName: '',
//             teamImage: '',
//             documentFile: '',
//             videoFile: '',
//             email: '',
//             country: '',
//             feedback: ''
//         });
//     }
//     isValid() { 
//         console.log(this.props.isEditing);
//         // let finalObject = {...this.state, ...this.props};
//         // console.log(finalObject);
//         // finalObject.documentFile = this.props.document;
//         // console.log(finalObject);
//         const {
//             errors,
//             isValid
//         } = validateInput(this.state);
        
//         if (!isValid) {
//             console.log(errors);
//             this.setState({
//                 errors
//             });
//         }

//         return isValid;
//     }

//   handleInputChange(e) {
//       const name = e.target.name;
//       const value = e.target.value;
//       console.log(name);
//       console.log(value);
//       this.setState({
//           [name]: value
//       });
//   }

//     setFile(name,file) {
//         this.setState({
//             [name]: file
//         });
//         console.log(this.state);
//     }
//     saveFunnel(cb){
//         const {
//             projectName,
//             userId,
//             city,
//             projectState,
//             currentAmount,
//             teamName,
//             onefoundRaiseAs,
//             oneForWhoFoundsRaise,
//             objectifAmount,
//             phoneNumber,
//             description,
//             category,
//             country,
//             email,
//             id,
//             feedback
//         } = this.state;
//         let data = {
//             projectName,
//             userId,
//             city,
//             projectState,
//             currentAmount,
//             teamName,
//             onefoundRaiseAs,
//             oneForWhoFoundsRaise,
//             objectifAmount,
//             phoneNumber,
//             description,
//             category,
//             email,
//             country,
//             feedback
//         };
        
//         // if (data.industry &&!data.industry._str) data.industry = toObjectId(data.industry);
//         if (data.category&&!data.category._str)  data.category = toObjectId(data.category);
//         if (data.onefoundRaiseAs&&!data.onefoundRaiseAs._str) data.onefoundRaiseAs = toObjectId(data.onefoundRaiseAs);
//         if (data.oneForWhoFoundsRaise&&!data.oneForWhoFoundsRaise._str) data.oneForWhoFoundsRaise = toObjectId(data.oneForWhoFoundsRaise);
//         if(id){
//             data.updatedAt = new Date();  
//           Funnels.update(id, {$set: data}, function(err, nbrow){
//               if(err){
//                 return cb(err, null);
//               } else {
//                 return cb(null, id)
//               }
//           });
//         } else {
//             data.createdAt = new Date();
//             data._id = toObjectId(null);
//              Funnels.insert(data, function (err, id) {
//              if (err) {
//                  return cb(err, null);
//              } else {
//                  return cb(null, id)
//              }
//              });
//         }
// }
//   handleSUbmit(e) { console.log("ENTERED SUBMIT")
//     console.log(this.props);
//     this.setState({
//         projectImage: this.props.projectImage
//     })
//     console.log(this.state);
//     e.preventDefault();
//     // if(!this.props.isEditing){
//         if(!this.isValid()){ console.log("IS NOT VALID")
//             return ;
//         }
//     // }
//     const {errors}=this.state;
//     this.setState({isLoading:true});
//     console.log(this.state.projectImage != "")
//     console.log(this.state.documentFile != "")
//     console.log(this.state.projectImage)
    
//      this.saveFunnel((err, id)=>{
//         if(err){
//             const a ={global:err.error};
//             this.setState({errors: {...errors,...a}, isLoading:false});
//         } else {
//         let uploads = [],
//         cursor =1;
//      if (this.state.projectImage) uploads.push('projectImage');
//      if (this.state.videoFile) uploads.push('videoFile');
//      if (this.state.documentFile) uploads.push('documentFile');  
//      if (!uploads.length) return this.closeModal();
//      console.log(uploads);
//      for (let i = 0; i < uploads.length; i++) {
//          const fieldName = uploads[i]; 
//          let collection = collections[fieldName];
//          if(!collection) return console.log('IMPOSSIBLE ERROR BUT WE NEED TO BE SURE');
//          const file = this.state[fieldName]; 
//             const upload = collection.insert({
//             file: file,
//             streams: 'dynamic',
//             chunkSize: 'dynamic'
//         }, false);
//         upload.on('end', (err,fileObj)=> {
//             if (err) {
//                 errors[fieldName]=err&&err.message;
//                 this.setState({errors});
//             } else {
//                 const link= `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
//                 let a = fieldName.split('File');
//                 const field = a[0];
//                 Funnels.update(id, {$set: {[field]: link}});
//             }
//             if(!(cursor<uploads.length)){
//                 this.setState({isLoading:false});
//                 if (!Object.keys(errors).length) this.closeModal();
//                 return;
//             } 
//             cursor++;                 
//         });
//         upload.start();
//      }  
//         }
//      })
//   }

//   updateState = () => {
//       console.log(this.props);
//       this.setState({
//           projectImage: this.props.projectImage
//       })
//   }

//   componentDidMount(){
//     this.updateState();
//   }

//   render() {

//     //   const {show, errors, title,projectName, onefoundRaiseAs, oneForWhoFoundsRaise, price, objectifAmount, industry,category, description, isLoading, id } = this.state;
//       const { show, errors, projectName, city,userId, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email, objectifAmount, category, description, isLoading, id, country, feedback } = this.state;

//       const { projectImage, teamImage, video, document, categories, foundRaiseAs, forWhoFoundsRaise, countries, user  } = this.props;
      

//       console.log(this.props);
//       console.log(projectImage);
//       console.log(this.state);
//     return (            
//         <Modal bsSize="large"
//         aria-labelledby="contained-modal-title-sm" show={show} backdrop={false} >
//  <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
//     <ModalHeader>
//     <h3 className="text-center" > {id ?'Edit Funnel': ' Add Funnel'}</h3>
//     </ModalHeader>
//     <ModalBody>
//         <h2>Project Informations</h2>
//             <Input
//                 field="projectName"
//                 label="Project Name"
//                 type="text"
//                 value={projectName}
//                 error={errors.projectName}
//                 onChange={(event) => this.handleInputChange(event)}
//             />
//             <Input
//                 field="phoneNumber"
//                 label="Phone Number"
//                 type="number"
//                 value={phoneNumber}
//                 error={errors.phoneNumber}
//                 onChange={(event) => this.handleInputChange(event)}
//             />

//             <Input
//                 field="email"
//                 label="Email"
//                 type="email"
//                 value={email}
//                 error={errors.email}
//                 onChange={(event) => this.handleInputChange(event)}
//             />

//             <Input
//                 field="objectifAmount"
//                 label="Objective Amount"
//                 type="number"
//                 value={objectifAmount}
//                 error={errors.objectifAmount}
//                 onChange={(event) => this.handleInputChange(event)}
//             />

//             <label>Country</label>
//             <select name="country" onChange={(event) => this.handleInputChange(event)}>
//                 <option> {id ? country : 'Select Country'}</option>
//                 {countries.map((item) =>(<option key={item.name} value={item.name}>{item.name}</option>))}
//             </select>
//             <Input
//                 field="city"
//                 label="City"
//                 value={city}
//                 error={errors.city}
//                 onChange={(event) => this.handleInputChange(event)}
//             />
//             <Select
//                 field="category"
//                 label="Category"
//                 value={category}
//                 options={categories}
//                 error={errors.category}
//                 onChange={(event) => this.handleInputChange(event)}
//             />
//             <Select
//                 field="onefoundRaiseAs"
//                 label="Funds Raise As"
//                 value={onefoundRaiseAs}
//                 options={foundRaiseAs}
//                 error={errors.onefoundRaiseAs}
//                 onChange={(event) => this.handleInputChange(event)}
//             />
//             <Select
//                 field="oneForWhoFoundsRaise"
//                 label="Funds Raise For"
//                 value={oneForWhoFoundsRaise}
//                 options={forWhoFoundsRaise}
//                 error={errors.oneForWhoFoundsRaise}
//                 onChange={(event) => this.handleInputChange(event)}
//             />
//             <Summernote
//             field="description"
//             label="Enter the description"
//             value={description}
//             error={errors.description}
//             onChange={(event)=> this.handleInputChange(event)}
//             />
//             <h2>Uploads</h2>
//             <br />
//             <div className="row">
//                 <Upload errors={errors} type="image" oldUrl={projectImage} setFile={(name,file)=>this.setFile(name, file)} name="projectImage" label="Upload Funnel Image" />
//                 <Upload errors={errors} type="document" oldUrl={document} setFile={(name, file)=>this.setFile(name, file)} name="documentFile" label = "Upload Funnel Document" />
//                 <Upload errors={errors} type="video" oldUrl={video} setFile={(name, file)=>this.setFile(name, file)} name="videoFile" label = "Upload Funnel Video" />
//             </div>
//             {errors.global&& <span style={{color: '#ed5565', fontSize:'15px'}} className="error-block">{errors.global}</span>}
//     </ModalBody>
     
//     <ModalFooter>
//       <Button disabled={isLoading} onClick={()=> this.closeModal()}>Close {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
//       <Button type="submit" disabled={isLoading} bsStyle="primary">Save {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
//     </ModalFooter>
//     </form>
//   </Modal>
//     )
//   }
// }

// export default FunnelModalForm;


import React, { Component, Fragment } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Input from '../../globalComponents/Input';
import Textarea from '../../globalComponents/Textarea';
import Summernote from '../../globalComponents/Summernote'
import Select from '../../globalComponents/Select';
import Upload from '../../globalComponents/Upload';
import validateInput from '../../../validations/funnel';
import adminfunnelModalFormFr from '../../../../traduction/adminfunnelModalForm/fr.json';
import adminfunnelModalFormEn from '../../../../traduction/adminfunnelModalForm/en.json';
import {toObjectId} from '../../../utilities/'
import {Funnels, Images, Videos, Documents, FoundRaiseAs} from '../../../api/collections'
const collections = {
    documentFile: Documents,
    projectImage: Images,
    teamImage: Images,
    videoFile: Videos
}
// App component - represents the whole app
class FunnelModalForm extends Component {
  constructor(props) { 
        super(props);
        console.log(props);
        this.state = {
            projectName: props.projectName,
            city: props.city,
            userId: props.user,
            onefoundRaiseAs: props.onefoundRaiseAs,
            oneForWhoFoundsRaise: props.oneForWhoFoundsRaise,
            objectifAmount: props.objectifAmount,
            phoneNumber: props.phoneNumber,
            description: props.description,
            category: props.category,
            typeOfDonation: props.typeOfDonation,
            errors: {},
            isLoading: false,
            id: '',
            show: false,
            projectImage: '',
            teamName: props.teamName,
            projectState: props.projectState,
            currentAmount: props.currentAmount,
            teamImage: '',
            documentFile: '',
            videoFile: '',
            email: '',
            feedback: props.feedback,
            country: props.country,
            phoneNumber : props.phoneNumber,
            categoryType: props.categoryType,
            fundsRaiseAsPossibilities: []
        };
}   

    componentWillReceiveProps(nextProps) {
        const { show, userId,city, projectName, teamName, projectState, currentAmount, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber, email,objectifAmount,feedback, category, description, id, country, typeOfDonation, categoryType } = nextProps;
        this.setState({ show, userId,city, projectName, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email,feedback, objectifAmount, category, description, id, country, typeOfDonation, categoryType });
    }
    
    closeModal() {
        this.props.closeModal({ show: false });
        this.setState({
            projectName: '',
            city: '',
            projectState: '',
            currentAmount: '',
            onefoundRaiseAs: '',
            oneForWhoFoundsRaise: '',
            objectifAmount: '',
            typeOfDonation: [],
            phoneNumber: '',
            description: '',
            category: '',
            errors: {},
            isLoading: false,
            id: '',
            projectImage: '',
            teamName: '',
            teamImage: '',
            documentFile: '',
            videoFile: '',
            email: '',
            country: '',
            feedback: '',
            categoryType: ''
        });
    }
    isValid() {
        const {
            errors,
            isValid
        } = validateInput(this.state);

        if (!isValid) {
            console.log(errors);
            this.setState({
                errors
            });
        }

        return isValid;
    }

  handleInputChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      console.log(name);
      console.log(value);
      if(e.target.type === 'checkbox') {
            if(e.target.checked) {
                value = this.state.typeOfDonation ? [...this.state.typeOfDonation,value] : [value];
            } else {
                value = this.state.typeOfDonation.filter(type => type != value);
            }
            this.setState({
                [name]: value
            });
            return 1;
      }
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
            userId,
            city,
            projectState,
            currentAmount,
            teamName,
            onefoundRaiseAs,
            oneForWhoFoundsRaise,
            typeOfDonation,
            objectifAmount,
            phoneNumber,
            description,
            category,
            country,
            email,
            id,
            feedback,
            categoryType
        } = this.state;
        let data = {
            projectName,
            userId,
            city,
            projectState,
            currentAmount,
            teamName,
            onefoundRaiseAs,
            oneForWhoFoundsRaise,
            typeOfDonation,
            objectifAmount,
            phoneNumber,
            description,
            category,
            email,
            country,
            feedback,
            categoryType
        };
        
        // if (data.industry &&!data.industry._str) data.industry = toObjectId(data.industry);
        if (data.category&&!data.category._str)  data.category = toObjectId(data.category);
        if (data.onefoundRaiseAs&&!data.onefoundRaiseAs._str) data.onefoundRaiseAs = toObjectId(data.onefoundRaiseAs);
        if (data.oneForWhoFoundsRaise&&!data.oneForWhoFoundsRaise._str) data.oneForWhoFoundsRaise = toObjectId(data.oneForWhoFoundsRaise);
        if(data.categoryType == "Non profit") data.typeOfDonation = [this.props.typeOfDonations[0].name];
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
  handleSUbmit(e) { console.log("ENTERED SUBMIT")
    e.preventDefault();
    if(!this.props.isEditing){
        if(!this.isValid()){ console.log("IS NOT VALID")
            return ;
        }
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
     if (this.state.projectImage) uploads.push('projectImage');
     if (this.state.teamImage) uploads.push('teamImage');
     if (this.state.videoFile) uploads.push('videoFile');
     if (this.state.documentFile) uploads.push('documentFile');  
     if (!uploads.length) return this.closeModal();
     console.log(uploads);
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

  /**
   * When the component is loaded, We receive foundsRaiseAs from props and add them to 
   * the fundsRaiseAsPossibilities state
   * 
   * @author: Junior
   */
    componentDidUpdate=(prevProps)=>{
        if(this.props.foundRaiseAs !== prevProps.foundRaiseAs) {
            this.setState({
                fundsRaiseAsPossibilities: this.props.foundRaiseAs
            });
        }
    }

    // changeState = () => {
    //     if(this.state.categoryType !== "Non profit"){
    //         this.setState({
    //             typeOfDonation: this.props.typeOfDonations[0]
    //         })
    //     }
    //     console.log(this.state.typeOfDonation);
    // }

  render() {

    let lg = adminfunnelModalFormFr;
    let lang = localStorage.getItem('lang');
       lang == 'fr'?
            lg = adminfunnelModalFormFr
        :
            lg = adminfunnelModalFormEn;

    //   const {show, errors, title,projectName, onefoundRaiseAs, oneForWhoFoundsRaise, price, objectifAmount, industry,category, description, isLoading, id } = this.state;
      const { typeOfDonation, show, errors, projectName, city,userId, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email, objectifAmount, category, description, isLoading, id, country, feedback, fundsRaiseAsPossibilities, categoryType } = this.state;

      const { typeOfDonations, projectImage, teamImage, video, document, categories, foundRaiseAs, forWhoFoundsRaise, countries, user  } = this.props;
      console.log(foundRaiseAs);
      console.log(typeOfDonations);
      console.log(typeOfDonation);

      const categoryTypes = ["Profit", "Non profit"]


      
    return (            
        <Modal bsSize="large"
        aria-labelledby="contained-modal-title-sm" show={show} backdrop={false} >
 <form role="form" onSubmit={(event) =>this.handleSUbmit(event)}>
    <ModalHeader>
    <h3 className="text-center" > {
        lang == 'fr'?
            id ?'Edit Project': ' Ajouter Projet'
        :
            id ?'Edit Project': ' Add Project'
        }
        </h3>
    </ModalHeader>
    <ModalBody>
        <h2>{lg.ProjectInformations}</h2>
            <Input
                field="projectName"
                label={lg.ProjectName}
                type="text"
                value={projectName}
                error={errors.projectName}
                onChange={(event) => this.handleInputChange(event)}
            />
            <Input
                field="phoneNumber"
                label={lg.PhoneNumber}
                type="number"
                value={phoneNumber}
                error={errors.phoneNumber}
                onChange={(event) => this.handleInputChange(event)}
            />

            <Input
                field="email"
                label={lg.Email}
                type="email"
                value={email}
                error={errors.email}
                onChange={(event) => this.handleInputChange(event)}
            />

            <Input
                field="objectifAmount"
                label={lg.ObjectiveAmount}
                type="number"
                value={objectifAmount}
                error={errors.objectifAmount}
                onChange={(event) => this.handleInputChange(event)}
            />
            <div>
                <label>{lg.Country}</label> 
                <br/>
                <select name="country" className="countrySelect" onChange={(event) => this.handleInputChange(event)}>
                    <option> {
                        lang == 'fr'?
                            id ? country : 'Selectionner Pays'
                        :
                            id ? country : 'Select Country' 
                        }
                        </option>
                    {countries.map((item) =>(<option key={item.name} value={item.name}>{item.name}</option>))}
                </select>
            </div>
            <Input
                field="city"
                label={lg.City}
                value={city}
                error={errors.city}
                onChange={(event) => this.handleInputChange(event)}
            />
            <div>
                <label>{lg.TypeofCategory}</label> 
                <br/>
                <select name="categoryType" className="countrySelect" onChange={(event) => this.handleInputChange(event)}>
                    <option> {
                        lang == 'fr'?
                            id ? categoryType : 'Selectionner le type de categorie'
                        :
                            id ? categoryType : 'Select Category Type'
                        }
                    </option>
                    {categoryTypes.map((item, index) =>(<option key={index} value={item}>{item}</option>))}
                </select>
            </div>
            <Select
                field="category"
                label={lg.Category}
                value={category}
                options={categories}
                error={errors.category}
                onChange={(event) => this.handleInputChange(event)}
            />
            <Select
                field="onefoundRaiseAs"
                label={lg.FundsRaiseAs}
                value={onefoundRaiseAs}
                options={foundRaiseAs}
                error={errors.onefoundRaiseAs}
                onChange={(event) => this.handleInputChange(event)}
            />
            <Select
                field="oneForWhoFoundsRaise"
                label={lg.FundsRaiseFor}
                value={oneForWhoFoundsRaise}
                options={forWhoFoundsRaise}
                error={errors.oneForWhoFoundsRaise}
                onChange={(event) => this.handleInputChange(event)}
            />
            {categoryType == categoryTypes[0] ?
                <div>
                    <p><strong>{}</strong></p>
                    <div className="donationTypeWrapper">
                        {typeOfDonations.map(type => (
                            <div className="wrapper">
                                <input type="checkbox" name="typeOfDonation" checked={typeOfDonation ? typeOfDonation.includes(type.name): false} id={type.name} value={type.name} onChange={(event) => this.handleInputChange(event)} />
                                <label for={type.name}>{type.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            :
                // typeOfDonations[0] ?
                //     <div className="donationTypeWrapper">
                //         <input type="checkbox" name="typeOfDonation" checked={true} value={typeOfDonations[0].name} onChange={(event) => this.handleInputChange(event)} />
                //         <label for={typeOfDonations[0].name}>{typeOfDonations[0].name}</label>
                //     </div>
                // :
                    null
                // this.changeState()
                
            }
            <Summernote
                field="description"
                label={lg.Enterthedescription}
                value={description}
                error={errors.description}
                onChange={(event)=> this.handleInputChange(event)}
            />
            {
                this.props.isReview ? 
                    <Summernote
                        field="feedback"
                        label={lg.Enterthereview}
                        value={feedback}
                        error={errors.feedback}
                        onChange={(event) => this.handleInputChange(event)}
                    />
                :
                     null
            }

            {/* hide team Informations when user selects personnal funds reason 
               and show when he chooses Team   */}
            {/** foundRaiseAs[0] ==> individual, foundRaiseAs[1] ==> team*/}
            {fundsRaiseAsPossibilities[1] ?
                onefoundRaiseAs == fundsRaiseAsPossibilities[0]._id._str ?                        
                    <div>
                        <h2>{lg.TeamInformations}</h2>
                        <Input
                            field="teamName"
                            label={lg.TeamName}
                            value={teamName}
                            error={errors.teamName}
                            onChange={(event) => this.handleInputChange(event)}
                            size={250}
                        />
                        <div className="row">
                            <Upload errors={errors} type="image" oldUrl={teamImage} setFile={(name, file) => this.setFile(name, file)} name="teamImage" label={lg.UploadTeamImage} />
                        </div>
                    </div>
                :   
                    null
            :   
                null
            }
            <h2>{lg.Uploads}</h2>
            <br />
            <div className="row">
                <Upload errors={errors} type="image" oldUrl={projectImage} setFile={(name,file)=>this.setFile(name, file)} name="projectImage" label={lg.UploadProjectImage} />
                <Upload errors={errors} type="document" oldUrl={document} setFile={(name, file)=>this.setFile(name, file)} name="documentFile" label = {lg.UploadProjectDocument} />
                <Upload errors={errors} type="video" oldUrl={video} setFile={(name, file)=>this.setFile(name, file)} name="videoFile" label = {lg.UploadProjectVideo} />
            </div>
            {errors.global&& <span style={{color: '#ed5565', fontSize:'15px'}} className="error-block">{errors.global}</span>}
    </ModalBody>
     
    <ModalFooter>
      <Button disabled={isLoading} onClick={()=> this.closeModal()}>{lg.Close} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
      <Button type="submit" disabled={isLoading} bsStyle="primary">{lg.Save} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
    </ModalFooter>
    </form>
  </Modal>
    )
  }
}

export default FunnelModalForm;