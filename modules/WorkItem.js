import React from 'react'
import ApiManager from '../utility/ApiManager'
import Constants from '../utility/Constants'


//var apiData = '';
export default React.createClass({

  getInitialState: function() {
    return {api_response_data: ''};
  },

  getWorkItemData(id){
    var url = Constants.server + Constants.api_features + '/' + id + Constants.access_token_query;
    ApiManager.call_rest_api(this, url);
  },

  componentDidMount(){
    this.getWorkItemData(this.props.params.id)
  },

  componentDidUpdate(prevProps, prevState){
    if(prevProps.params.id != this.props.params.id)
      this.getWorkItemData(this.props.params.id)
  },

  render(){
    if(this.state.api_response_data.data){
      var result = this.state.api_response_data.data;
      return(
        <div>
          <h2>{this.props.params.id} {result.name}</h2>
          <h4>Item Type - {result.custom_fields.custom_1} </h4>
          <div dangerouslySetInnerHTML={{__html:result.description}}></div>
          <h5>Assigned to - {result.assigned_to.id} </h5>
        </div>
      )
    }
    else {
      return(<div>Nothing Selected!</div>)
    }
  }
})
