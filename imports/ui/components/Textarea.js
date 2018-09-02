import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

// App component - represents the whole app
class TextArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { field, value, label, error, type, onChange, checkUserExists } = this.props;
        return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <textarea
            onChange={onChange}
            value={value}
            type={type}
            name={field}
            className="form-control"
        ></textarea>
        {error && <span style={{color: '#ed5565'}} className="error-block">{error}</span>}
    </div> 
        )
    }
}

export default TextArea;
