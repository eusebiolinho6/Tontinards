import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link} from 'react-router-dom';

// Task component - represents a single todo item
export default class Upload extends Component {
      constructor(props) {
          super(props);
          
          this.state = {
              url: ''
          }
      }

    preview(event){
      this.setState({url: URL.createObjectURL(event.target.files[0])});
      this.props.setFile(this.props.name, event.target.files[0]);
    }
    render() {
        const {url} = this.state;
        const {label, oldUrl, type, errors,name} = this.props;
        const error = errors&&errors[name];
        let accept = type == "image" ? "image/png,image/jpeg,image/jpg" : (type == "document" ? ".docx, .pptx, .pdf" : "video/*");

    return ( 
        <div className="col-md-6 subject-container">
        <button type="button" className="btn btn-primary" onClick={()=>this.inputElement.click()}>{label} </button>
            <input style={{visibility:'hidden'}} accept={accept} onChange={(event) => this.preview(event)} ref={input => this.inputElement = input} type="file" />
            <div className="ibox">
                <div className="ibox-content product-box active">
                    <div className={!url&&!oldUrl?'product-imitation':''}>
                    {!(url||oldUrl)? '[FILE]':'' }
                     {(url||oldUrl)&&type=="image"?<img src={url||oldUrl} accept={accept} style={{width:'100%'}} />:''}
                    
                    {(url||oldUrl)&&type=="document"?<iframe src={url||oldUrl||''} projectName="Funnel PDF" align="top" width="100%" frameBorder="0" target="Message"><p>Your browser doesn't support Iframe. Here is
        a <a href={url||oldUrl} >link to the document</a> instead.</p> </iframe>:''}

                    {(url||oldUrl)&&type=="video"?<video src={url||oldUrl||''}  width="100%" controls><p>Your browser doesn't support HTML5 video. Here is
        a <a href={url||oldUrl}>link to the video</a> instead.</p> </video>:''}
                    </div>
                </div>
            </div>
            {error&& <span style={{color: '#ed5565'}} className="error-block">{error}</span>}
        </div>
        );
    }
}