import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import IcheckCheckbox from './IcheckCheckbox'
// App component - represents the whole app
class FilterFunnelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            industry: {
                b2b: false,
                ecommerce:false,
            }, category: {
                lead: false,
                sell: false,
            }
        }
    }
    setFilters(name, type){
       let a=this.state[type];
       a[name]=!a[name];
       this.setState({[type]:a}); 
       const path = this.buildPath();
    }

    buildPath(){
        let pathIndustry = 'all',
        pathCategory = 'all';
        const {industry, category}=this.state;

        for (let key in category) {
        // skip loop if the property is from prototype
        if (!category.hasOwnProperty(key) || !category[key]) continue;
        if(pathCategory=='all'){
            pathCategory = key;
        } else {
            const str = key+'-'+pathCategory;
            pathCategory=str;
        }
        } 

        for (let key in industry) {
            // skip loop if the property is from prototype
            if (!industry.hasOwnProperty(key) || !industry[key]) continue;
            if (pathIndustry=='all') {
                pathIndustry = key;
            } else {
                const str = key + '-' + pathIndustry;
                pathIndustry = str;
            }
        }
        return '/'+pathIndustry+'/'+pathCategory

    }
    render() {
        const industries = [{
            cname: 'E-commerce',
            tname: 'ecommerce'
        }, {
            cname: 'B2B',
            tname: 'b2b'
        }];
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
                        <div className="hr-line-dashed"></div>
                        <h2>INDUSTRY</h2>
                        <div className="col-md-2" />
                        <div className = "col-md-10" >
                        <ul className="folder-list" style={{padding: 0}}>
                            {industries.map((industry, index)=>( <IcheckCheckbox key={index} name={industry.tname} type="industry" label={industry.cname} setFilters={(name,type)=> this.setFilters(name, type)} />)) }  
                        </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FilterFunnelMenu;