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
            stepOne: true,
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
            projectImage: props.projectImage,
            teamName: props.teamName,
            projectState: "PENDIND",
            currentAmount: 0,
            teamImage: '',
            documentFile: '',
            videoFile: '',
            email: '',
            feedback: props.feedback,
            country: props.country,
            phoneNumber : props.phoneNumber,
            fundsRaiseAsPossibilities: [],
            user: null,
            categoryType: props.categoryType,
            story: props.story,
            motivation: props.motivation,
            aboutyourcompany: props.aboutyourcompany,
            problem: props.problem,
            target: props.target,
            currentStep: props.currentStep,
            havePaidClient: props.havePaidClient,
            haveProspect: props.haveProspect,
            imagePreview: '',
            documentPreview: '',
            videoPreview: '',
            imageTeamPreview: ''
        };
}   

    componentWillReceiveProps(nextProps) {
        const { user, show, userId,city, projectName, teamName, projectState, currentAmount, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber, email,objectifAmount,feedback, category, description, id, country, typeOfDonation,categoryType, 
            story, motivation, aboutyourcompany, problem, target, currentStep, havePaidClient, haveProspect } = nextProps;
        this.setState({ user, show, userId,city, projectName, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email,feedback, objectifAmount, category, description, id, country, typeOfDonation,categoryType,
            story, motivation, aboutyourcompany, problem, target, currentStep, havePaidClient, haveProspect });
    }
    
    closeModal() {
        this.props.closeModal({ show: false });
        this.setState({
            stepOne: true,
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
            categoryType: '',
            story: '',
            motivation: '',
            aboutyourcompany: '',
            problem: '',
            target: '',
            currentStep: '',
            havePaidClient: '',
            haveProspect: '',
            imagePreview: '',
            documentPreview: '',
            videoPreview: '',
            imageTeamPreview: ''
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

    setFile(name,file, previewFile) {
        let name2 = "";
        if(name == "projectImage") {
            name2 = "imagePreview";
        } else if (name == "documentFile") {
            name2 = "documentPreview";
        } else if (name == "videoFile") {
            name2 = "videoPreview";
        } else if (name == "teamImage") {
            name2 = "imageTeamPreview";
        }
        this.setState({
            [name]: file,
            [name2]: previewFile
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
            categoryType,
            story,
            motivation,
            aboutyourcompany,
            problem,
            target,
            currentStep,
            havePaidClient,
            haveProspect
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
            categoryType,
            story,
            motivation,
            aboutyourcompany,
            problem,
            target,
            currentStep,
            havePaidClient,
            haveProspect
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
    handleSUbmit(e) { 
        console.log("ENTERED SUBMIT")
        e.preventDefault();
        if(!this.props.isEditing){
            if(!this.isValid()){
                console.log("IS NOT VALID")
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

    goToNextStepTwo = (e) => {
        e.preventDefault();
        if(!this.props.isEditing){
            if(!this.isValid()){
                 console.log("IS NOT VALID")
                return ;
            } else {
                this.setState({ stepOne: false, errors: {} })
            }
        } else {
            this.setState({ stepOne: false, show: true })
        }
    }
    
    backToFirst = (e) => {
        e.preventDefault();
        this.setState({ stepOne: true })
    }

  render() {

    let lg = adminfunnelModalFormFr;
    let lang = localStorage.getItem('lang');
    lang == 'fr'?
            lg = adminfunnelModalFormFr : lg = adminfunnelModalFormEn;
    const { user,categoryType, typeOfDonation, show, errors, projectName, city,userId, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, phoneNumber,email, objectifAmount, category, description, isLoading, id, country, feedback, fundsRaiseAsPossibilities, 
        story, motivation, aboutyourcompany,problem, target,currentStep, havePaidClient, haveProspect } = this.state;
    let { typeOfDonations, projectImage, teamImage, video, document, categories, foundRaiseAs, forWhoFoundsRaise, countries  } = this.props;
    const categoryTypes = ["Profit", "Non profit"]

    console.log(this.state)

    const stepOneForm = (
        <div className="">
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
            <input type="hidden" name="currentAmount" value={currentAmount} onChange={(event) => this.handleInputChange(event)} />
            <input type="hidden" name="projectState" value={projectState} onChange={(event) => this.handleInputChange(event)} />

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
                <label>{lg.Country} <label id="redstar">*</label></label> 
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
                <label>{lg.TypeofCategory} <label id="redstar">*</label></label> 
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
                    <p><strong>{lg.TypeOfDonation} <label id="redstar">*</label></strong></p>
                    <div className="donationTypeWrapper">
                        {typeOfDonations.map((type, id) => (
                            <div key={id} className="wrapper">
                                <input required type="checkbox" name="typeOfDonation" checked={typeOfDonation ? typeOfDonation.includes(type.name): false} id={type.name} value={type.name} onChange={(event) => this.handleInputChange(event)} />
                                <label for={type.name}>{type.name}</label>
                            </div>
                        ))}
                    </div>
              
               </div>
               :
               null
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
                        <h2>{lg.TeamInformations} <label id="redstar">*</label></h2>
                        <Input
                            field="teamName"
                            label={lg.TeamName}
                            value={teamName}
                            error={errors.teamName}
                            onChange={(event) => this.handleInputChange(event)}
                            size={250}
                        />
                        <div className="row">
                            <Upload errors={errors} type="image" oldUrl={this.props.isEditing ? teamImage : this.state.imageTeamPreview} setFile={(name, file, previewFile) => this.setFile(name, file, previewFile)} name="teamImage" label={lg.UploadTeamImage} />
                        </div>
                    </div>
                :   
                    null
            :   
                null
            }
            <h2>{lg.Uploads} <label id="redstar">*</label></h2>
            <br />
            <div className="row">
            <Upload errors={errors} type="image" oldUrl={this.props.isEditing ? projectImage : this.state.imagePreview} setFile={(name,file, previewFile)=>this.setFile(name, file, previewFile)} name="projectImage" label={lg.UploadProjectImage} />
            <Upload errors={errors} type="document" oldUrl={this.props.isEditing ? document :this.state.documentPreview} setFile={(name, file, previewFile)=>this.setFile(name, file, previewFile)} name="documentFile" label = {lg.UploadProjectDocument} />
            {
                user ? 
                    user.profile.role == "admin" ?
                        <Upload errors={errors} type="video" oldUrl={this.props.isEditing ? video :this.state.videoPreview} setFile={(name, file, previewFile)=>this.setFile(name, file, previewFile)} name="videoFile" label = {lg.UploadProjectVideo} />
                    : null : null
            }
            </div>
            {errors.global&& <span style={{color: '#ed5565', fontSize:'15px'}} className="error-block">{errors.global}</span>}
        </div>
    );
    
    const stepTwoForm = (
        <div className="row p-sm">
            <div className="form-group">
                <label for="exampleInputEmail">Parlez-nous brièvement de vous ? <label id="redstar">*</label></label>
                <textarea required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="story" value={story} className="form-control" rows="2"></textarea>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Qu'est-ce qui vous a motivé à démarrer une entreprise ? <label id="redstar">*</label></label>
                <textarea required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="motivation" value={motivation} className="form-control" rows="2"></textarea>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Parlez-nous de votre entreprise <label id="redstar">*</label></label>
                <textarea required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="aboutyourcompany" value={aboutyourcompany} className="form-control" rows="2"></textarea>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Quels problèmes votre entreprise tente-t-elle de résoudre ? <label id="redstar">*</label></label>
                <textarea required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="problem" value={problem} className="form-control" rows="2"></textarea>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Quel est votre public cible ? <label id="redstar">*</label></label>
                <input required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="target" value={target} className="form-control" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">A quelle étape de votre lancement êtes-vous ? <label id="redstar">*</label></label>
                <input required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="currentStep" value={currentStep} className="form-control" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Avez-vous des clients qui paient ? <label id="redstar">*</label></label>
                <input required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="havePaidClient" value={havePaidClient} className="form-control" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Avez-vous des prospects ? <label id="redstar">*</label></label>
                <input required placeholder="" onChange={(event) => this.handleInputChange(event)}
                name="haveProspect" value={haveProspect} className="form-control" />
            </div>
        </div>
    );
      
    return (            
        <Modal bsSize="large" aria-labelledby="contained-modal-title-sm" show={show} backdrop={false} >
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
                    {this.state.stepOne ? stepOneForm : stepTwoForm}
                </ModalBody>
                <ModalFooter>
                <Button disabled={isLoading} onClick={()=> this.closeModal()}>{lg.Close} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
                {
                    this.state.stepOne ?
                        <Button onClick={(e) => this.goToNextStepTwo(e)}  bsStyle="primary">{"Next"} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>:
                        <Fragment>
                            <Button disabled={isLoading} onClick={(e)=> this.backToFirst(e)}>{"Previous"}</Button>
                            <Button type="submit" disabled={isLoading} bsStyle="primary">{lg.Save} {isLoading&&<i className="fa fa-spin fa-spinner"></i>}</Button>
                        </Fragment>
                }
                </ModalFooter>
            </form>
        </Modal>
    )
  }
}

export default FunnelModalForm;