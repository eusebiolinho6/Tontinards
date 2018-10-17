import React, { Component, Fragment } from 'react';
import FilterFunnelMenu from './FilterFunnelMenu'
import FunnelList from './FunnelList'
import Location from './Location'

// App component - represents the whole app
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true
        }
    }

    componentDidMount(){
        console.log('mount');
        if (this.state.isLoading && this.props.funnels && Array.isArray(this.props.funnels)) {
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 500);
        } 
    }

    componentDidUpdate(prevProps) {
        if (this.state.isLoading && prevProps.funnels && Array.isArray(prevProps.funnels)) {
                this.setState({
                    isLoading: false
                });
        }
    }

    render() {
        const{params, funnels, search, categories,userId, industries}=this.props;
        const {isLoading}= this.state;
        return (
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterFunnelMenu {...this.props} search={search} funnels={funnels} params={params} industries={industries} categories={categories} />
                        </div>
                        <div className="col-lg-9 animated fadeInRight">
                           {isLoading?<div style={{minHeight:'200px'}} > <div className="overlay-funnels" ><i className="fa fa-gear fa-spin"></i></div></div>:<div className="row">
                                <FunnelList funnels={this.props.funnels} />
                            </div>}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Main;