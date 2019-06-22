import React, { Fragment, Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HeaderLayout from '../layouts/HeaderLayout'
import AdminPage from '../pages/AdminPage';
import AdminIndustryPage from '../pages/AdminIndustryPage';
import AdminCategoryPage from '../pages/AdminCategoryPage';
import authenticate from '../../utilities/authenticate';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

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
      this.renderUI();  
    })
  }

  componentWillMount(){
    this.asyncCall();
  }
  

  renderUI(){
    this.setState({
      wholePage: <div>
        <Switch>
          <Fragment>
            <HeaderLayout />
            {this.state.user? 
              this.state.user.profile.role == "admin" ?
              <div>
                <Route exact path='/admin/funnels' component={authenticate(AdminPage)}/>
                <Route exact path='/admin/industries' component={authenticate(AdminIndustryPage)}/>
                <Route exact path='/admin/categories' component={authenticate(AdminCategoryPage)}/>
              </div> :
              <Redirect to="/funnels/all/all" /> 
              :
            <Redirect to="/funnels/all/all" />
          }
          </Fragment>
        </Switch>
      </div>
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
