import React from 'react'
import NavigationLink from './NavigationLink'
import ApiManager from '../utility/ApiManager'
import Constants from '../utility/Constants'

export default React.createClass({
  getInitialState: function() {
    return {api_response_data: ''};
  },

  getWorkItemList(){
    var items = [];
    var result = this.state.api_response_data.data;
    for(var i= 0; i<result.length; i++){
      items.push(<li key={i}><NavigationLink to={"/workitem/"+result[i].id}>{result[i].name}</NavigationLink></li>);
    }
    return items;
  },
  componentDidMount(){
    var url = Constants.server + Constants.api_features + Constants.access_token_query;
    ApiManager.call_rest_api(this, url);
  },
  render() {
      if(this.state.api_response_data.data){
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
