import React from 'react'
import ApiManager from '../utility/ApiManager'
import Constants from '../utility/Constants'


//var apiData = '';
export default React.createClass({

  getInitialState: function() {
    return {apiData: ''};
  },

  getWorkItemData(id){
    var url = Constants.server + Constants.api_features + '/' + id + Constants.access_token_query;
    ApiManager.call(this, url);
  },
  componentDidMount(){
    this.getWorkItemData(this.props.params.id)
  },
  componentDidUpdate(prevProps, prevState){
    if(prevProps.params.id != this.props.params.id)
      this.getWorkItemData(this.props.params.id)
  },
  render(){
    if(this.state.apiData.data){
      return(
        <div>
          <h2>{this.props.params.id} Name - {this.state.apiData.data.name}</h2>
          <h4>Item Type - {this.state.apiData.data.custom_fields.custom_1} </h4>
          <div dangerouslySetInnerHTML={{__html:this.state.apiData.data.description}}></div>
        </div>
      )
    }
    else {
      return(<div>Nothing Selected!</div>)
    }
  }
})
