import React, { Component, Fragment } from 'react';

// App component - represents the whole app
export default class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state={class0:'btn-primary'}
    }
    componentDidMount(){
       this.toggleClass();
    }

    toggleClass(e){
       if(e) e.preventDefault();
        const {toggleFree, isFree}=this.props;
        if(toggleFree){
        if(e) toggleFree(!isFree);
        //if it comes by didmount isfree is right else the value that we sent to grand-parents is !isfree
        const b = e ? !isFree:isFree;
          if (b){
           this.setState({class0: 'btn-default off'});
            } else {
                this.setState({class0: 'btn-primary'});
            }
        }
    }
    render() {
        const{class0}=this.state;
        return (
            <div onClick={(e)=>this.toggleClass(e)} className={"toggle btn "+class0} style={{width: '94px', height: '34px'}}>
            <input />
            <div className="toggle-group" >
            <label className = "btn btn-default active toggle-off">FREE</label>
            <label className="btn btn-primary toggle-on">ALL</label>
            <span className="toggle-handle btn btn-default"></span></div>
            </div>
    )
    }
}
