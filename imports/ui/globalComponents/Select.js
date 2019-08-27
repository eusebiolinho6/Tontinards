import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import adminfunnelModalFormFr from '../../../traduction/adminfunnelModalForm/fr.json';
import adminfunnelModalFormEn from '../../../traduction/adminfunnelModalForm/en.json';



// App component - represents the whole app
class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lg = adminfunnelModalFormFr;
        let lang = localStorage.getItem('lang');
          lang == 'fr'?
             lg = adminfunnelModalFormFr
           :  
             lg = adminfunnelModalFormEn;

        const { field, options, value, label, error, type, onChange, checkUserExists } = this.props;
        return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label} <label id="redstar">*</label></label>
            <select
            style={{height:'unset'}}
            value={value}
            onChange={onChange}
            type={type}
            name={field}
            className="form-control"
        >
        <option value=''>{lg.Selectonevalue}</option>
        {options.map((option, index) =>(<option key={option._id._str} value={option._id._str}>{option.name}</option>))}
 </select>
        {error && <span style={{color: '#ed5565'}} className="error-block">{error}</span>}
    </div> 
        )
    }
}

export default Select;
