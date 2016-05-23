import React from 'react'

module.exports = {
  call_rest_api: function(url, callback){
   $.ajax({
     type: 'GET',
     url: url,
     contentType: 'text/plain',
     async : true,
     success: function(data) {
       callback(data, false);
     },
     error: function(error) {
       callback(error, true);
       alert(JSON.stringify(error));
     }
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
