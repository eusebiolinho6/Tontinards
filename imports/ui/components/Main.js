import React, { Component, Fragment } from 'react';
import FilterFunnelMenu from './funnels/FilterFunnelMenu'
import FunnelList from './funnels/FunnelList'
import Location from '../globalComponents/Location';

// App component - represents the whole app
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        if (this.state.isLoading && Array.isArray(this.props.funnels) && this.props.funnels.length) {
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 500);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isLoading && Array.isArray(nextProps.funnels) && nextProps.funnels.length) {
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 500);
        }
    }

    render() {
        const { params, funnels, search, categories, userId, industries } = this.props;
        const { isLoading } = this.state;
        return (
            <div className="wrapper wrapper-content">
                <div className="projectContainer">
                    <hr/>
                    <h1>Some Projects</h1>
                    <br/>
                    <br/>

                </div>
                <div className="row">
                    {/* <div className="col-lg-3">
                        <FilterFunnelMenu {...this.props} search={search} funnels={funnels} params={params} industries={industries} categories={categories} />
                    </div> */}
                    <div className="col-lg-12 animated fadeInRight">
                        {isLoading ?
                            <div style={{ minHeight: '200px' }} > <div className="overlay-funnels" ><i className="fa fa-gear fa-spin"></i></div></div>
                            :
                            <div className="row">
                                <FunnelList funnels={this.props.funnels} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;