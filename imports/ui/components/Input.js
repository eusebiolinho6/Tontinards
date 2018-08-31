import React, { Component, Fragment } from 'react';

// App component - represents the whole app
class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { field, value, label, error, type, onChange, checkUserExists } = this.props;
        return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <input
            onChange={onChange}
            value={value}
            type={type}
            name={field}
            className="form-control"
        />
        {error && <span className="help-block">{error}</span>}
    </div> 
        )
    }
}

export default Input;
