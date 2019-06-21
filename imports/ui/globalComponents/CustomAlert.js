import React, { Component, Fragment } from 'react';
import {Alert} from 'react-bootstrap';

// App component - represents the whole app
class CustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state={
            hide:false
        }
    }
    componentDidMount(){
        const {ttl, clearMessage}=this.props;
        const t= Number(ttl)*1000;
        setTimeout(() => {
            this.setState({hide:true});
            if(clearMessage) clearMessage();
        }, t);
    }

    render() {
        const {hide}=this.state;
        const {text,type}=this.props
        return (
            <div className="col-md-12" style={{position:'fixed', marginTop:'10px', right:'15px', top:'0px',zIndex:'50000'}} >
                {!hide&&<div className="col-md-3 col-sm-6 col-xs-12 pull-right">
                <Alert style={{textAlign:'center'}} bsStyle={type||'warning'}>
                <strong>{text}</strong>
                </Alert>
                </div>}
            </div>
        )
    }
}

export default CustomAlert;