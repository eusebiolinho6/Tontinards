import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Input from '../../globalComponents/Input';
import Textarea from '../../globalComponents/Textarea';
import Summernote from '../../globalComponents/Summernote'
import Select from '../../globalComponents/Select';
import Upload from '../../globalComponents/Upload';
import validateInput from '../../../validations/funnel';
import { toObjectId } from '../../../utilities/'
import { Funnels, Images, Videos, Documents } from '../../../api/collections'

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
        this.state = {
            projectName: props.projectName,
            userId: props.user,
            onefoundRaiseAs: props.onefoundRaiseAs,
            oneForWhoFoundsRaise: props.oneForWhoFoundsRaise,
            objectifAmount: props.objectifAmount,
            phoneNumber: props.phoneNumber,
            description: props.description,
            category: props.category,
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
            country: props.country
        };
    }

    componentWillReceiveProps(nextProps) {
        const { show, projectName, teamName, projectState, currentAmount, onefoundRaiseAs, oneForWhoFoundsRaise, zipCode, objectifAmount, email, category, description, id, country, feedback } = nextProps;
        this.setState({ show, projectName, projectState, currentAmount,  teamName, onefoundRaiseAs, oneForWhoFoundsRaise, zipCode, objectifAmount, email, category, description, id, country, feedback });
        /*  this.loadCountry(); */
    }
    closeModal() {
        this.props.closeModal({ show: false });
        this.setState({
            projectName: '',
            userId: '',
            projectState: '',
            currentAmount: '',
            onefoundRaiseAs: '',
            oneForWhoFoundsRaise: '',
            objectifAmount: '',
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
            feedback: ''
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

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        console.log(name);
        this.setState({
            [name]: value
        });
    }

    setFile(name, file) {
        this.setState({
            [name]: file
        });
    }
    saveFunnel(cb) {
        const {
            projectName,
            userId,
            projectState,
            currentAmount,
            teamName,
            onefoundRaiseAs,
            oneForWhoFoundsRaise,
            objectifAmount,
            phoneNumber,
            description,
            category,
            country,
            email,
            id,
            feedback
        } = this.state;
        let data = {
            projectName,
            userId,
            projectState,
            currentAmount,
            teamName,
            onefoundRaiseAs,
            oneForWhoFoundsRaise,
            objectifAmount,
            phoneNumber,
            description,
            category,
            email,
            country,
            feedback
        };

        if (data.userId && !data.userId._str) data.userId = toObjectId(data.userId);
        if (data.category && !data.category._str) data.category = toObjectId(data.category);
        if (data.onefoundRaiseAs && !data.onefoundRaiseAs._str) data.onefoundRaiseAs = toObjectId(data.onefoundRaiseAs);
        if (data.oneForWhoFoundsRaise && !data.oneForWhoFoundsRaise._str) data.oneForWhoFoundsRaise = toObjectId(data.oneForWhoFoundsRaise);
        if (id) {
            data.updatedAt = new Date();
            Funnels.update(id, { $set: data }, function (err, nbrow) {
                if (err) {
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

    /* async loadCountry() {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                // handle success
                return response;
                console.log(this.state.category);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        this.setState({ countries: countries.data });
    } */
    handleSUbmit(e) {
        e.preventDefault();
        if (!this.isValid()) {
            return;
        }
        const { errors } = this.state;
        this.setState({ isLoading: true });
        this.saveFunnel((err, id) => {
            if (err) {
                const a = { global: err.error };
                this.setState({ errors: { ...errors, ...a }, isLoading: false });
            } else {
                let uploads = [],
                    cursor = 1;
                if (this.state.projectImage) uploads.push('projectImage');
                if (this.state.teamImage) uploads.push('teamImage');
                if (this.state.videoFile) uploads.push('videoFile');
                if (this.state.documentFile) uploads.push('documentFile');
                if (!uploads.length) return this.closeModal();
                for (let i = 0; i < uploads.length; i++) {
                    const fieldName = uploads[i];
                    let collection = collections[fieldName];
                    if (!collection) return console.log('IMPOSSIBLE ERROR BUT WE NEED TO BE SURE');
                    const file = this.state[fieldName];
                    const upload = collection.insert({
                        file: file,
                        streams: 'dynamic',
                        chunkSize: 'dynamic'
                    }, false);
                    upload.on('end', (err, fileObj) => {
                        if (err) {
                            errors[fieldName] = err && err.message;
                            this.setState({ errors });
                        } else {
                            const link = `${Meteor.absoluteUrl() + fileObj._downloadRoute}/${fileObj._collectionName}/${fileObj._id}/original/${fileObj._id}.${fileObj.extension}`;
                            let a = fieldName.split('File');
                            const field = a[0];
                            Funnels.update(id, { $set: { [field]: link } });
                        }
                        if (!(cursor < uploads.length)) {
                            this.setState({ isLoading: false });
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

        const { show, errors, projectName, projectState, currentAmount, teamName, onefoundRaiseAs, oneForWhoFoundsRaise, zipCode, objectifAmount, category, description, email, isLoading, id, country } = this.state;
        const { projectImage, teamImage, video, document, categories, foundRaiseAs, forWhoFoundsRaise, countries } = this.props;
        return (
            <Modal bsSize="large"
                aria-labelledby="contained-modal-projectName-sm" show={show} backdrop={false} >
                <form role="form" onSubmit={(event) => this.handleSUbmit(event)}>
                    <ModalHeader>
                        <h3 className="text-center" > {id ? 'Edit Funnel' : ' Add Funnel'}</h3>
                    </ModalHeader>
                    <ModalBody>
                        <h2>Project Informations</h2>
                        <Input
                            field="projectName"
                            label="Project Name"
                            type="text"
                            value={projectName}
                            error={errors.projectName}
                            onChange={(event) => this.handleInputChange(event)}
                        />
                        <Input
                            field="phoneNumber"
                            label="Phone Number"
                            type="number"
                            value={phoneNumber}
                            error={errors.phoneNumber}
                            onChange={(event) => this.handleInputChange(event)}
                        />

                        <Input
                            field="email"
                            label="Email"
                            type="email"
                            value={email}
                            error={errors.email}
                            onChange={(event) => this.handleInputChange(event)}
                        />

                        <Input
                            field="objectifAmount"
                            label="Objectif Amount"
                            type="number"
                            value={objectifAmount}
                            error={errors.objectifAmount}
                            onChange={(event) => this.handleInputChange(event)}
                        />

                        <label>Country</label>
                        <select name="country" onChange={(event) => this.handleInputChange(event)}>
                            <option>Select one value</option>
                            {console.log(countries)}
                            {/* {countries.map((item) =>(<option key={item.name} value={item.name}>{item.name}</option>))} */}
                        </select>
                        <Select
                            field="category"
                            label="Category"
                            value={category}
                            options={categories}
                            error={errors.category}
                            onChange={(event) => this.handleInputChange(event)}
                        />
                        <Select
                            field="onefoundRaiseAs"
                            label="Found Raise As"
                            value={onefoundRaiseAs}
                            options={foundRaiseAs}
                            error={errors.onefoundRaiseAs}
                            onChange={(event) => this.handleInputChange(event)}
                        />
                        <Select
                            field="oneForWhoFoundsRaise"
                            label="For Who Founds Raise"
                            value={oneForWhoFoundsRaise}
                            options={forWhoFoundsRaise}
                            error={errors.oneForWhoFoundsRaise}
                            onChange={(event) => this.handleInputChange(event)}
                        />
                        <Summernote
                            field="description"
                            label="Enter the description"
                            value={description}
                            error={errors.description}
                            onChange={(event) => this.handleInputChange(event)}
                        />
                        <h2>Team Informations</h2>
                        <Input
                            field="teamName"
                            label="Team Name"
                            value={teamName}
                            error={errors.teamName}
                            onChange={(event) => this.handleInputChange(event)}
                            size={250}
                        />
                        <div className="row">
                            <Upload errors={errors} type="image" oldUrl={teamImage} setFile={(name, file) => this.setFile(name, file)} name="teamImage" label="Upload Team Image" />
                        </div>
                        <h2>Uploads</h2>
                        <br />
                        <div className="row">
                            <Upload errors={errors} type="image" oldUrl={projectImage} setFile={(name, file) => this.setFile(name, file)} name="projectImage" label="Upload Project Image" />
                            <Upload errors={errors} type="document" oldUrl={document} setFile={(name, file) => this.setFile(name, file)} name="documentFile" label="Upload Funnel Document" />
                            <Upload errors={errors} type="video" oldUrl={video} setFile={(name, file) => this.setFile(name, file)} name="videoFile" label="Upload Funnel Video" />
                        </div>
                        {errors.global && <span style={{ color: '#ed5565', fontSize: '15px' }} className="error-block">{errors.global}</span>}
                    </ModalBody>

                    <ModalFooter>
                        <Button disabled={isLoading} onClick={() => this.closeModal()}>Close {isLoading && <i className="fa fa-spin fa-spinner"></i>}</Button>
                        <Button type="submit" disabled={isLoading} bsStyle="primary">Save {isLoading && <i className="fa fa-spin fa-spinner"></i>}</Button>
                    </ModalFooter>
                </form>
            </Modal>
        )
    }
}

export default FunnelModalForm;