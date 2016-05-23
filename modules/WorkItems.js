import React from 'react'
import NavigationLink from './NavigationLink'
import ApiManager from '../utility/ApiManager'
import Constants from '../utility/Constants'

export default React.createClass({
  getInitialState: function() {
    return {apiData: ''};
  },

  getWorkItemList(){
    var items = [];
    for(var i= 0; i<this.state.apiData.data.length; i++){
      items.push(<li key={i}><NavigationLink to={"/workitem/"+this.state.apiData.data[i].id}>{this.state.apiData.data[i].name}</NavigationLink></li>);
    }
    return items;
  },
  componentDidMount(){
    var url = Constants.server + Constants.api_features + Constants.access_token_query;
    ApiManager.call(this, url);
  },
  render() {
      if(this.state.apiData.data){
    return (
      <div>
        <div><b>Work Items</b></div>
        <div className="workItemsDiv">
        <ul>
          {this.getWorkItemList()}
        </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
  else {
    return(<div>Nothing Selected!</div>)
  }
  }
})
