import React, { Component, Fragment } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }
    render() {

        return (
            <div class="vertical-menu">
                <a href="#" class="active">Home</a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </div>
        );
    }
}

export default Menu;