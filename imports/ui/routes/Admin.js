import React, { Fragment, Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderLayout from '../globalComponents/layouts/HeaderLayout';
import AdminPage from '../pages/admins/AdminPage';
import AdminIndustryPage from '../pages/admins/AdminIndustryPage';
import AdminCategoryPage from '../pages/admins/AdminCategoryPage';
import AdminFoundRaiseAsPage from '../pages/admins/AdminFoundRaiseAsPage';
import AdminForWhoFoundsRaisePage from '../pages/admins/AdminForWhoFoundsRaisePage'
import authenticate from '../../utilities/authenticate';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AdminDashboard from '../pages/admins/AdminDashboard';
import ProjectDetails from '../components/funnels/ProjectDetails';


// The Roster component matches one of two different routes
// depending on the full pathname

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      wholePage: <span></span>
    }
  }

  loadUser = () => {
    let loadedUser = Meteor.users.findOne({_id: this.props.userId});
    this.setState({
      user: loadedUser
    })
  }

  resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Meteor.users.findOne({_id: Meteor.userId()}));
      }, 1000);
    })
  }
  
  asyncCall = async() => {
    await this.resolveAfter2Seconds()
    .then(res => {
      this.setState({
        user: res
      })
    }).then(res => {
      this.renderUI();  
      // console.log(res);
    })
  }

  componentWillMount(){
    this.asyncCall();
  }
  

  renderUI(){
    this.setState({
      wholePage: <span>
        <Switch>
          <Fragment>
            <HeaderLayout />
            {this.state.user? 
              this.state.user.profile.role == "admin" ?
              <span>
                <Route exact path='/admin/funnels' component={authenticate(AdminPage)}/>
                <Route exact path='/admin/categories' component={authenticate(AdminCategoryPage)}/>
                <Route exact path='/admin/foundRaiseAs' component={authenticate(AdminFoundRaiseAsPage)}/>
                <Route exact path='/admin/forWhoFoundsRaisePage' component={authenticate(AdminForWhoFoundsRaisePage)}/>
                <Route exact path='/admin/admindashboard' component={AdminDashboard}/>
                <Route exact path='/admin/projectdetails' component={ProjectDetails}/>

              </span> :
              <Redirect to="/funnels/all/all" /> 
              :
            <Redirect to="/funnels/all/all" />
          }
          </Fragment>
        </Switch>
      </span>
    })
  }


  render(){   
    return(
      <span>{this.state.wholePage}</span>
    )
  }
  
}

export default withTracker(props=>{
  
  return {
    userId:  Meteor.userId()
  }

})(Admin)
