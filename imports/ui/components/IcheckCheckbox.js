import React, { Component } from 'react';
import {Checkbox} from 'react-bootstrap';

export default class IcheckCheckbox extends Component{
    constructor(props){
        super(props);
    }
    onClick(e){
        e.preventDefault();
        const {id,type, devName}=this.props;
        this.props.setFilters(id, type,devName);
    }
    render(){
        const {value}=this.props;
        return (
            <a href="" onClick={(event)=>this.onClick(event)} ><input type="checkbox" onChange={(event) =>{} } checked={value} /><span style={{marginLeft:'5px'}}>{this.props.label}</span></a>
        )
    }
}