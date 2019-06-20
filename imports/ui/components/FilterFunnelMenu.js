import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import IcheckCheckbox from '../GlobalComponents/IcheckCheckbox'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {toObjectId} from '../../utilities/'
import {Categories, Industries} from '../../api/collections'
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import ToggleButton from '../GlobalComponents/ToggleButton'


// App component - represents the whole app
class FilterFunnelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            industries: {}
            ,categories: {},
            path:'',
            redirect:false,
            search:'',
            enabled:true
         }
    }
    componentDidMount(){
        this.handleResize();
        window.addEventListener('resize',(event)=> this.handleResize(event))
        const{industries, categories, params}=this.props,
        propSearch=this.props.search;
            let search='';
          if (propSearch) {
              const tab = propSearch.split('search=');
              if (tab.length == 2 && tab[0] == '?') search = tab[1];
          }
        if(industries&&categories&&industries.length&&categories.length){
            this.setState({
                industries: this.initObj(industries, params.industries.split('-')),
                categories: this.initObj(categories, params.categories.split('-')),
                path: '',
                redirect: false,
                search:search
            });
        }
    }

    componentWillUnmount(){
        window.removeEventListener('resize', (event)=> this.handleResize(event));
    }

    componentWillReceiveProps(nextProps){
        const{industries, categories, params}=nextProps,
            propSearch=nextProps.search;
            let search='';
          if (propSearch) {
              const tab = propSearch.split('search=');
              if (tab.length == 2 && tab[0] == '?') search = tab[1];
          }
        const {redirect, path} = this.state;
        if (industries && categories && industries.length && categories.length) {
            this.setState({
                industries: this.initObj(industries, params.industries.split('-')),
                categories: this.initObj(categories, params.categories.split('-')),
                path: '',
                redirect: false,
                search:search
            });
        }
    }
    handleResize(e){
        if(e)e.preventDefault();
        if(window.innerWidth<1200 && this.state.enabled){
            this.setState({enabled:false});
        }
        if(!(window.innerWidth<1200) && !this.state.enabled){
            this.setState({enabled:true});
        }

    }

    searchChange(e){
        this.setState({search:e.target.value});
        this.setState({path:this.buildPath(e.target.value)});
        this.setState({redirect:true});
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
       this.setState({[type]:a});
       this.setState({path:this.buildPath(this.state.search)});
       this.setState({redirect:true});
    }

    buildPath(r){
        let pathIndustry = 'all',
        pathCategory = 'all',
        search = r;
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
        if(search)  return '/funnels/'+pathIndustry+'/'+pathCategory+'?search='+search;
        return '/funnels/' + pathIndustry + '/' + pathCategory;

    }
    render() {
        const {industries, categories,params, funnels}=this.props;
        const {path,redirect,search, enabled}=this.state;
        if(redirect){
            return <Redirect push to={path}/>
        }
        return (
            <Sticky enabled={enabled} top={80} bottomBoundary='#funnelListkamer'>
            <div className="ibox ">
                <div className="ibox-content">
                    <div className="file-manager">
                       { /** <h5>Show:</h5>
                        <a href="#" className="file-control active">Ale</a>
                        <a href="#" className="file-control">Documents</a>
                        <a href="#" className="file-control">Audio</a>
                        <a href="#" className="file-control">Images</a>*/}
                       { /**<div className="hr-line-dashed"></div>
                        <Link to="/funnels/admin" className="btn btn-primary btn-block">Manage funnels</Link>
                        <Link to="/industries/admin" className="btn btn-primary btn-block">Manage industries</Link>
                        <Link to="/categories/admin" className="btn btn-primary btn-block">Manage categories</Link>
                    <div className="hr-line-dashed"></div>*/}
                <div className="form-group">
                    <ToggleButton {...this.props} />
                </div>
                <div className="input-group">
                <input autoFocus={true} id="value" value={search} onChange={(e)=>this.searchChange(e)} className="form-control inputgui ng-not-empty" style={{display: 'block'}}
                    type="text" placeholder="search funnels" />
                    <span className="input-group-addon">
                    <i style={{cursor:'pointer'}} className="fa fa-search"></i>
                    </span>
              </div>
                    <div className="hr-line-dashed"></div>
                        { /**Industry here*/ }
                       {industries.length?<div className="col-md-12" ><h5 style={{marginBottom:'0px'}} >INDUSTRY</h5>
                            <div className = "col-md-10" >
                            <ul className="folder-list" style={{padding: 0}}>
                                {industries.map((industry)=>(
                                    <li key={industry._id}><IcheckCheckbox id={industry._id._str} devName={industry.devName} value={this.state.industries[industry._id._str]&&this.state.industries[industry._id._str].value} type="industries" label={industry.name} setFilters={(id,type,devName )=> this.setFilters(id, type, devName)} /></li>
                                    )) }  
                            </ul>
                            </div>
                        </div>:''} 
                        {/**Category here*/}
                        {/** 
                            categories.length ? < div className = "col-md-12" >
                            <h5 style={{marginBottom:'0px'}}>CATEGORY</h5>
                            <div className = "col-md-10" >
                            <ul className="folder-list" style={{padding: 0}}>
                                {categories.map((category,a=this.state)=>(<li key={category._id} > <IcheckCheckbox key={category._id} id={category._id._str} devName={category.devName} value={this.state.categories[category._id._str]&&this.state.categories[category._id._str].value} type="categories" label={category.name} setFilters={(id,type,devName )=> this.setFilters(id, type, devName)} /></li>)) }  
                            </ul>
                            </div>
                        < /div>:''*/
                        }
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            </Sticky>
        )
    }
}

export default FilterFunnelMenu;