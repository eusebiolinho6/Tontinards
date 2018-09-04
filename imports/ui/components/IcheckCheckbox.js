import React, { Component } from 'react';

export default class IcheckCheckbox extends Component{
    constructor(props){
        super(props);
    
    }
    onChange(e){
        this.props.setFilters(this.props.name, this.props.type);
    }
    render(){
        return (
            < label className = "container-funnel-store" > {this.props.label}
        <input onChange={(event) =>this.onChange(event)} type="checkbox"/>
                <span className="checkmark-funnel-store"></span>
            </label>
        )
    }
}