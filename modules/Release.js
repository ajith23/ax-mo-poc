import React from 'react'
import ApiManager from '../utility/ApiManager'
import Constants from '../utility/Constants'


//var apiData = '';
export default React.createClass({

  getInitialState: function() {
    return {api_response_data: ''};
  },
  getReleaseData(id){
    var url = Constants.server + Constants.api_releases + '/' + id + Constants.access_token_query;
    ApiManager.call_rest_api(url, this.api_callback);
  },
  api_callback(data, is_error){
    if(is_error)
      this.setState({api_response_error: data});
    else
      this.setState({api_response_data: data});
  },
  componentDidMount(){
    this.getReleaseData(this.props.params.id)
  },

  componentDidUpdate(prevProps, prevState){
    if(prevProps.params.id != this.props.params.id)
      this.getReleaseData(this.props.params.id)
  },

  render(){
    if(this.state.api_response_data.data){
      var result = this.state.api_response_data.data;
      return(
        <div>
          <h2>{this.props.params.id} {result.name}</h2>
          <h3> Release Type - {result.release_type.name}</h3>
        </div>
      )
    }
    else {
      return(<div>Nothing Selected!</div>)
    }
  }
})
