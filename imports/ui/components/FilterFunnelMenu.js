import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import IcheckCheckbox from './IcheckCheckbox'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {Categories, Industries, toObjectId} from '../../api/funnels/methods'
import PropTypes from 'prop-types';

// App component - represents the whole app
class FilterFunnelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            industries: {}
            ,categories: {},
            path:'',
            redirect:false
        }
    }
    componentDidMount(){
        const{industries, categories, params}=this.props;
        if(industries&&categories&&industries.length&&categories.length){
            this.setState({
                industries: this.initObj(industries, params.industries.split('-')),
                categories: this.initObj(categories, params.categories.split('-')),
                path: '',
                redirect: false
            });
        }
    }


    componentWillReceiveProps(nextProps){
        const{industries, categories, params}=nextProps;
        const {redirect, path} = this.state;
        if (industries && categories && industries.length && categories.length) {
            this.setState({
                industries: this.initObj(industries, params.industries.split('-')),
                categories: this.initObj(categories, params.categories.split('-')),
                path: '',
                redirect: false
            });
        }
    }

    initObj(tab,p){
        let a= {};
       tab.forEach(element => {
           let value= p.indexOf('all')>-1?false:(p.indexOf(element.devName)>-1);
          a[element._id._str] ={value:value, devName:element.devName};
       }); 
       return a;
    }
    setFilters(id, type,devName){
       let a=this.state[type];
      if(!a[id]) a[id]={value:false, devName:devName};
       a[id].value=!a[id].value;
       this.setState({[type]:a, path:this.buildPath()});
       this.setState({redirect:true});
    }

    buildPath(){
        let pathIndustry = 'all',
        pathCategory = 'all';
        const {industries, categories}=this.state;

        for (let key in categories) {
        // skip loop if the property is from prototype
        if (!categories.hasOwnProperty(key) || !categories[key].value) continue;
        if(pathCategory=='all'){
            pathCategory = categories[key].devName;
        } else {
            const str = categories[key].devName + '-' + pathCategory;
            pathCategory=str;
        }
        } 

        for (let key in industries) {
            // skip loop if the property is from prototype
            if (!industries.hasOwnProperty(key) || !industries[key].value) continue;
            if (pathIndustry=='all') {
                pathIndustry = industries[key].devName;
            } else {
                const str = industries[key].devName + '-' + pathIndustry;
                pathIndustry = str;
            }
        }
        return '/funnels/'+pathIndustry+'/'+pathCategory;

    }
    render() {
        const {industries, categories,params, funnels}=this.props;
        const {path,redirect}=this.state;
        if(redirect){
            return <Redirect push to={path}/>
        }
        return (
            <div className="ibox ">

                <div className="ibox-content">
                    <div className="file-manager">
                       { /** <h5>Show:</h5>
                        <a href="#" className="file-control active">Ale</a>
                        <a href="#" className="file-control">Documents</a>
                        <a href="#" className="file-control">Audio</a>
                        <a href="#" className="file-control">Images</a>*/}
                        <div className="hr-line-dashed"></div>
                        <Link to="/funnels/admin" className="btn btn-primary btn-block">Manage funnels</Link>
                        <Link to="/industries/admin" className="btn btn-primary btn-block">Manage industries</Link>
                        <Link to="/categories/admin" className="btn btn-primary btn-block">Manage categories</Link>
                        <div className="hr-line-dashed"></div>
                        { /**Industry here*/ }
                       {industries.length&&<div><h2>INDUSTRY</h2>
                            <div className="col-md-2" />
                            <div className = "col-md-10" >
                            <ul className="folder-list" style={{padding: 0}}>
                                {industries.map((industry)=>( <IcheckCheckbox key={industry._id} id={industry._id._str} devName={industry.devName} value={this.state.industries[industry._id._str]&&this.state.industries[industry._id._str].value} type="industries" label={industry.name} setFilters={(id,type,devName )=> this.setFilters(id, type, devName)} />)) }  
                            </ul>
                            </div>
                        </div>} 
                        {/**Category here*/}
                        {categories.length&&<div>
                            <h2>CATEGORY</h2>
                            <div className="col-md-2" />
                            <div className = "col-md-10" >
                            <ul className="folder-list" style={{padding: 0}}>
                                {categories.map((category,a=this.state)=>( <IcheckCheckbox key={category._id} id={category._id._str} devName={category.devName} value={this.state.categories[category._id._str]&&this.state.categories[category._id._str].value} type="categories" label={category.name} setFilters={(id,type,devName )=> this.setFilters(id, type, devName)} />)) }  
                            </ul>
                            </div>
                        </div>}
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FilterFunnelMenu;