/**
 * JSONCrossdomainRequest
 * Can do crossdomain JSON request.
 *

Copyright (c) 2009 Jaap van der Meer

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE. 
 */


var JSONCrossdomainRequest = {};
JSONCrossdomainRequest.fHolderId = "JSONCrossdomainRequest_holder";
JSONCrossdomainRequest.fSwfLocation = "jsoncrossdomainrequest.swf";


/**
 * Initializes the JSONCrossdomainRequest
 */
JSONCrossdomainRequest.init = function() {
	JSONCrossdomainRequest.addHolder();
	JSONCrossdomainRequest.addSWF();
	JSONCrossdomainRequest.fCallback = function() {alert('define function')};
}
	

JSONCrossdomainRequest.onLoadComplete = function() {
	alert('load complete')
}
	
/**
* Adds a holder for the SWF's
*/
JSONCrossdomainRequest.addHolder = function() {
	var lElement = document.createElement("div");
	lElement.id = this.fHolderId;
	lElement.style.width = "100px";
	lElement.style.height = "100px";	
	document.getElementsByTagName('body').item(0).appendChild(lElement);
}
	

/**
* Add the SWF
*/
JSONCrossdomainRequest.addSWF = function() {
	swfobject.embedSWF(JSONCrossdomainRequest.fSwfLocation, JSONCrossdomainRequest.fHolderId, '1', '1', '9.0.0', false, {}, {'allowscriptaccess':'always'}, {});
}


JSONCrossdomainRequest.getMovie = function() {
	return document.getElementById(JSONCrossdomainRequest.fHolderId);
}


JSONCrossdomainRequest.doRequest = function(pUrl, pParams, pMethod, pCallback) {
	var lMovie = this.getMovie();
	JSONCrossdomainRequest.fCallback = pCallback;
	lMovie.doRequest(pUrl, pParams, pMethod, "JSONCrossdomainRequest.handleCallback");
}

JSONCrossdomainRequest.handleCallback = function(pParams) {
	this.fCallback.call(null, pParams);
}





