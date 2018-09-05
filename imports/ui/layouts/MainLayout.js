import React, { Component, Fragment } from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Location from '../components/Location'
import Main from '../components/Main'
import {Funnels, Categories, Industries} from '../../api/funnels/methods'


// App component - represents the whole app
class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const location = {
      path: ['Home', 'Funnels'],
      title: 'List of funnels'
    },
    {params, funnels, industries, categories}=this.props;
    return (
      <Fragment>
        <Location location={location} />
         <Main params={params} funnels={funnels} industries={industries} categories={categories} />
      </Fragment>
    )
  }
}

export default withTracker((props)=>{
  Meteor.subscribe('funnels');
  Meteor.subscribe('industries');
  Meteor.subscribe('categories');
  const industries = props.params.industries,
  categories = props.params.categories,
  listc=categories.split('-'),
  listi=industries.split('-');
  let queryc = {},
  queryi={},
  listIdi=[],
  listIdc=[];
  if(categories !='all') queryc={devName:{$in:listc}};
  if(industries !='all') queryi={devName:{$in:listi}};
  if (categories != 'all'){
      Categories.find(queryc).forEach((elt) => {
        listIdc.push(elt._id);
      });
  }
  if(industries!='all'){
     Industries.find(queryi).forEach((elt) => {
       listIdi.push(elt._id);
     });
  }
  let q={};

   if(categories !='all') q.category={$in:listIdc};
    if(industries !='all') q.industry ={$in:listIdi};
    return {
    funnels: Funnels.find(q).fetch(),
    industries: Industries.find({}).fetch(),
    categories: Categories.find({}).fetch()
  }
})(MainLayout)