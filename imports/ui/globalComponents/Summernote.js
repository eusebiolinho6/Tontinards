import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

// App component - represents the whole app
class Summernote extends Component {
    constructor(props) {
        super(props);
    }
componentDidMount(){
    $(this.summernote).summernote();
    $(this.summernote).summernote('code', this.props.value); 

    $(this.summernote).on('summernote.change', (e)=>{
        let value = $(this.summernote).summernote('isEmpty')? '' : $(this.summernote).summernote('code');
        var e = {
            preventDefault:function(){},
            target:{name:this.props.field, value: value}};
           this.props.onChange(e);
    })
    
}
componentWillUnmount(){
   $(this.summernote).summernote('destroy');
}
    render() {
        const {field, label, error, onChange, checkUserExists } = this.props;
        return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label} <label id="redstar">*</label></label>
            <div ref={elem => this.summernote = elem} ></div>
        {error && <span style={{color: '#ed5565'}} className="error-block">{error}</span>}
    </div> 
        )
    }
}

export default Summernote;
