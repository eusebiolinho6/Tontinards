import React, { Component } from 'react';

export default class IcheckCheckbox extends Component{
    constructor(props){
        super(props);
    }
    onChange(e){
        this.props.setFilters(this.props.name, this.props.type);
    }
    render(){
        const {value}=this.props;
        return (
            < label className = "container-funnel-store" > {this.props.label}
            <input onChange={(event) =>this.onChange(event)} checked={value} type="checkbox"/>
                <span className="checkmark-funnel-store"></span>
            </label>
        )
    }
}