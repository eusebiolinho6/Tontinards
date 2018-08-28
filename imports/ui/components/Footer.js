import React, { Component, Fragment } from 'react';

// App component - represents the whole app
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="float-right">
                    10GB of <strong>250GB</strong> Free.
                </div>
                <div>
                    <strong>Copyright</strong> Example Company © 2014-2018
                </div>
            </div>
        )
    }
}

export default Footer;