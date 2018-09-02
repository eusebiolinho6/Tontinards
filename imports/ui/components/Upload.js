import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link} from 'react-router-dom';

// Task component - represents a single todo item
export default class Upload extends Component {
      constructor(props) {
          super(props);
          
          this.state = {
              imageUrl: ''
          }
      }
    previewImage(event){
      this.setState({imageUrl: URL.createObjectURL(event.target.files[0])});
    }
    render() {
        const {imageUrl} = this.state;
        const {label} = this.props;
    return ( 
        <div className="col-md-6 subject-container">
        <button className="btn btn-sm btn-primary" onClick={()=>this.inputElement.click()}>{label} </button>
            <input style={{visibility:'hidden'}} onChange={(event) => this.previewImage(event)} ref={input => this.inputElement = input} type="file" />
            <div className="ibox">
                <div className="ibox-content product-box active">
                    <div className={!imageUrl?'product-imitation':''}>
                     {<img src={imageUrl} alt="[ Image ]" accept="image/png,image/jpeg" style={{width:'100%'}} />}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}