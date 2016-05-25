import React from 'react'
import NavigationLink from './NavigationLink'
import ApiManager from '../utility/ApiManager'
import Constants from '../utility/Constants'

const Releases = React.createClass({
  getInitialState: function(){
    return {api_response_data:''};
  },
  getReleaseList(releaseList, level, parent){
    var items = [];
    for(var i=0; i<releaseList.length; i++){
      items.push(<li key={level.toString()+i.toString()}> {parent} <NavigationLink to={"/release/"+releaseList[i].id}> <b>{releaseList[i].name}</b></NavigationLink></li>);
      if(releaseList[i].children)
      {
        var childArray = this.getReleaseList(releaseList[i].children, ++level,<div> {parent} <NavigationLink to={"/release/"+releaseList[i].id}> <b>{releaseList[i].name}</b></NavigationLink> </div>);
        items.push(<ul key={level.toString()}>{childArray}</ul>);
      }
    }
    return items;
  },
  getReleases()
  {
    var result = this.state.api_response_data.data;
    return this.getReleaseList(result, 0, "");
  },
  api_callback(data, is_error){
    if(is_error)
      this.setState({api_response_error: data});
    else
      this.setState({api_response_data: data});
  },

  componentDidMount(){
  var url = Constants.server + Constants.api_releases + Constants.access_token_query;
  ApiManager.call_rest_api(url, this.api_callback);
},
render() {
    if(this.state.api_response_data.data){
      return (
        <div>
          <div><b>Releases</b></div>
          <div className="workItemsDiv">
          <ul>
            {this.getReleases()}
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
});

export default Releases;
