import React from 'react'
import NavigationLink from './NavigationLink'

var Feature = React.createClass({
  getInitialState: function(){
    return {
      accessCode: ''
    }
  },
  componentDidMount: function(){
    this.serverRequest = $.get(this.props.source, function (result) {
      var feature = result[0];
      this.setState({
        accessCode: feature,
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.accessCode}

      </div>
    );
  }

})


export default React.createClass({

  /*createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  },*/


  makeAjaxCall(){
    var url = "https://ajt.axosoft.com/api/v1/features?access_token=4a0d56ed-082b-4aa4-92e0-f5ebe809ce99";
    $.ajax({
      type: 'GET',
      url: url,
      contentType: 'text/plain',
      xhrFields: {
        withCredentials: true
      },
      headers: {
        "Access-Control-Allow-Origin":false
      },
      success: function(data) {
        alert(JSON.stringify(data));
      },
      error: function(error) {
        alert(JSON.stringify(error));
      }
    });

    /*var xhr = this.createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
    xhr.onload = function() {
      var text = xhr.responseText;
      alert('Response from CORS request to ' + url + ': ' + text);
    };
    xhr.onerror = function(error) {
      alert(JSON.stringify(error));
    };
    xhr.send();*/
  },

  getWorkItemList(){
    {this.makeAjaxCall()}
    var items = [];
    for(var i=1; i<5; i++){
      items.push(<li><NavigationLink to={"/workitem/"+i}>WorkItem - {i}</NavigationLink></li>);
    }
    return items;
  },
  render() {
    return (
      <div>
        <Feature source="https://ajt.axosoft.com/api/v1/features?access_token=4a0d56ed-082b-4aa4-92e0-f5ebe809ce99"></Feature>

        <div><b>Work Items</b></div>
        <ul>
          {this.getWorkItemList()}
        </ul>

        {this.props.children}
      </div>
    )
  }
})
