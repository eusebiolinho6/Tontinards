import React, { Component } from 'react';
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
            , categories: {}
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({industries:this.initObj(nextProps.industries),
             categories:this.initObj(nextProps.categories)})
    }
    initObj(tab){
        let a= {};
       tab.forEach(element => {
          a[element._id._str] ={value:false, devName:element.devName};
       }); 
       return a;
    }
    setFilters(id, type){
       let a=this.state[type];
       a[id].value=!a[id].value;
       this.setState({[type]:a}); 
       const path = this.buildPath();
       console.log(path);
    }

    buildPath(){
        let pathIndustry = 'all',
        pathCategory = 'all',
        listIdc =[],
        listIdi=[];
        const {industries, categories}=this.state;

        for (let key in categories) {
        // skip loop if the property is from prototype
        if (!categories.hasOwnProperty(key) || !categories[key].value) continue;
        listIdc.push(toObjectId(key));
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
            listIdi.push(toObjectId(key));
            if (pathIndustry=='all') {
                pathIndustry = industries[key].devName;
            } else {
                const str = industries[key].devName + '-' + pathIndustry;
                pathIndustry = str;
            }
        }
        return {url:'/'+pathIndustry+'/'+pathCategory, listIdc:listIdc,listIdi:listIdi}

    }
    render() {
        const {industries, categories}=this.props;
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
                        <h2>INDUSTRY</h2>
                        <div className="col-md-2" />
                        <div className = "col-md-10" >
                        <ul className="folder-list" style={{padding: 0}}>
                            {industries.map((industry)=>( <IcheckCheckbox key={industry._id} name={industry._id._str} type="industries" label={industry.name} setFilters={(name,type)=> this.setFilters(name, type)} />)) }  
                        </ul>
                        </div>
                        {/**Category here*/}
                        <h2>CATEGORY</h2>
                        <div className="col-md-2" />
                        <div className = "col-md-10" >
                        <ul className="folder-list" style={{padding: 0}}>
                            {categories.map((category)=>( <IcheckCheckbox key={category._id} name={category._id._str} type="categories" label={category.name} setFilters={(name,type)=> this.setFilters(name, type)} />)) }  
                        </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withTracker(()=>{
Meteor.subscribe('industries');
Meteor.subscribe('categories');
return {
    industries: Industries.find({}).fetch(),
    categories:Categories.find({}).fetch()
}

})(FilterFunnelMenu)