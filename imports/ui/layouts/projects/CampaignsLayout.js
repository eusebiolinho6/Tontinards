import React, { Component, Fragment } from 'react';
import MainLayout from '../MainLayout';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ProjectItem from '../../components/projects/ProjectItem';
import {Categories, Funnels} from '../../../api/collections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import campaignPageFr from '../../../../traduction/campaignPage/fr.json';
import campaignPageEn from '../../../../traduction/campaignPage/en.json'



const emptyIcon = <FontAwesomeIcon icon={faBan} size="3x"/>

class CampaignsLayout extends Component {
  constructor(props) {
    super(props);
    this.state={
      projectList : [],
      firstRender: true
    }
  }


/**
 * 
 * @param {Array} projects is the array of projects we will map to display each of them
 * @param {string} sop stands for State Of Projects, is the state of the projects ("pending", "validated", "Campaign" or "refused")
 * @returns rendered Components 
 * @Author Cindy and Junior
 */
  renderProjects(projects, sop , categoryId){
    let campaigns = []
    console.log(projects)
    if(categoryId == null){
      return projects.map((project, index)=>(
        <ProjectItem key={index} project={project} stateOfProject={sop} user={this.props.user}/>
      ))
    }else{
       projects.map((project, index)=>(
        project.category == categoryId ?
        campaigns.push(<ProjectItem key={index} project={project} stateOfProject={sop} user={this.props.user}/>) 
        : "")
      )
    }
    this.setState({
      projectList: campaigns,
      firstRender: false
    })
  }



  /**
   * 
   * @param {state} state: it is a state of the component, since component is automatically
   * redrawn when state changes, we actually use states to render projects in order to
   * display more projects without refreshing the page  
   * @param {Array} initialArray: this is the array of rendred projects before more projects
   * are loaded
   * returns nothing, just sets the state to it new value
   */
  pushMoreProjects(state, initialArray ){
    for (let i=0; i<4; i++){
      this.setState({
        state: initialArray.push(fakeValidatedProjects[i])
      })
    } 
  }



  render() {
    let lg = campaignPageFr;
    let lang = localStorage.getItem('lang')
      lang == 'fr'?
          lg = campaignPageFr
          :
          lg = campaignPageEn;
          
    const {funnels, userId, user, categories} = this.props;
    const campaigns = [];
    funnels.map((project) => {
      project.projectState ? 
        project.projectState == "START CAMPAIGN" ? 
          campaigns.push(project)
          : 
          null
      : 
      null
    })
    let AllCampaigns = this.renderProjects(campaigns, "START CAMPAIGN")
    return (
      <div className="container-fluid no-padding">
        <div className="row projectsPageHeader">
            <br/>
            <h1>{lg.selectStartup}</h1>
            <br/>
            {/* <hr/> */}
        </div>

        {/* ---- FILTER ---- */}
        <div className="filerMenu col-md-3" id="filterCategory">
          <h1 className="transparent">.</h1>
          <form className="form">
            <h2>{lg.filterByCategory}</h2>
      
            {
              categories.map((category)=>{
               return(
                <div className="inputGroup">
                    <input id={category._id._str} name="radio" type="radio" onChange={()=>this.renderProjects(campaigns, "START CAMPAIGN" , category._id._str)} />
                    <label for={category._id._str}><span>{category.name}</span></label>
                </div>
               ) 
          })
          }

          </form>

        </div>

        

        {/*---- Begining zone of Campaigns ------*/}
        <div className="container-fluid row col-md-9">
          {
            campaigns.length == 0 ? 
            "" 
            :
          <div className="row text-center validatedProjectsConatiner">
              {/* <hr/> */}
              {/* <h2>Campaigns</h2> */}
              <div className="projects">
                  {/* {this.renderProjects(campaigns, "START CAMPAIGN")} */}
                  {this.state.firstRender ? AllCampaigns : 
                    this.state.projectList.length == 0 ? 
                    <div className="noProject">
                      <span>{emptyIcon}</span>
                      <h3>{lg.NoProject}</h3>
                    </div>
                    :
                    this.state.projectList
                    }

              </div>
              <br/>
              <br/>
              {/* <a type="button" onClick={()=> this.pushMoreProjects("rejectedProjects", this.state.rejectedProjects)} className="btn-lg viewMoreProjectsBtn btn-danger">View More</a> */}
          </div>
          }
        </div>
        {/*---- End zone of Rejected Projects ------*/}
        
       
      </div>
    )
  }
}

export default withTracker((props)=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('categories');  
  Meteor.subscribe('users');
  let q={};
  return {
    funnels: Funnels.find(q).fetch(),
    categories: Categories.find(q).fetch(),
    userId: Meteor.userId(),
    user: Meteor.user()
  }
})(CampaignsLayout);