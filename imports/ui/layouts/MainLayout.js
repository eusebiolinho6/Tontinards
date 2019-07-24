import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Location from '../globalComponents/Location';
import Main from '../components/Main';
import {Categories, Funnels} from '../../api/collections'

// App component - represents the whole app
class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const location = {
      path: ['Home', 'Funnels'],
      projectName: 'List of funnels'
    },
    {params, isFree, funnels, userId, search, categories}=this.props;
    // console.log(funnels);
    // console.log(categories);
    return (
      <Fragment>
        {/* <Location location={location} /> */}
         <Main {...this.props} params={params} userId={userId} search={search} funnels={funnels} categories={categories} />
      </Fragment>
    )
  }
}

export default withTracker((props)=>{
  
  Meteor.subscribe('funnels');
  Meteor.subscribe('categories');
  categories = props.params.categories,
  propSearch=props.search,
  // console.log(Funnels.findAll());
  listc=categories.split('-');
  let queryc = {},
  queryi={},
  listIdi=[],
  listIdc=[],
  search = '';
  if(categories !='all') queryc={devName:{$in:listc}};
  if (categories != 'all'){
      Categories.find(queryc).forEach((elt) => {
        listIdc.push(elt._id);
      });
  }
  let q={};
  if(propSearch){
    const tab = propSearch.split('search=');
    if(tab.length==2 && tab[0]=='?') search=tab[1];
  }
   if(categories !='all') q.category={$in:listIdc};
    if(search) q.projectName ={$regex: search, $options: 'i'};
    if(props.isFree) q.phoneNumber='0';
    return {
    funnels: Funnels.find(q).fetch(),
    categories: Categories.find({}).fetch(),
    userId:Meteor.userId()
  }
})(MainLayout)