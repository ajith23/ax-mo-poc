import React from 'react'

module.exports = {
  call: function(componentObject, url){
   $.ajax({
     type: 'GET',
     url: url,
     contentType: 'text/plain',
     async : true,
     success: function(data) {
       componentObject.setState({apiData: data})
     }.bind(componentObject),
     error: function(error) {
       componentObject.setState({error: error})
       alert(JSON.stringify(error));
     }.bind(componentObject)
   });
 },

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
 },
  makeAjaxCall(){
   var xhr = this.createCORSRequest('GET', url);
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
   xhr.send();
 },*/
}
