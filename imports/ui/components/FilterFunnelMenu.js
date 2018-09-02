import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// App component - represents the whole app
class FilterFunnelMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <h5>Folders</h5>
                        <ul className="folder-list" style={{padding: 0}}>
                            <li><a href=""><i className="fa fa-folder"></i> Files</a></li>
                            <li><a href=""><i className="fa fa-folder"></i> Pictures</a></li>
                            <li><a href=""><i className="fa fa-folder"></i> Web pages</a></li>
                            <li><a href=""><i className="fa fa-folder"></i> Illustrations</a></li>
                            <li><a href=""><i className="fa fa-folder"></i> Films</a></li>
                            <li><a href=""><i className="fa fa-folder"></i> Books</a></li>
                        </ul>
                        <h5 className="tag-title">Tags</h5>
                        <ul className="tag-list" style={{padding: 0}}>
                            <li><a href="">Family</a></li>
                            <li><a href="">Work</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Children</a></li>
                            <li><a href="">Holidays</a></li>
                            <li><a href="">Music</a></li>
                            <li><a href="">Photography</a></li>
                            <li><a href="">Film</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FilterFunnelMenu;