// useful libs
var http = require("http");
var fs = require("fs");
var websocket == require("websocket").server;

//general variables
var port = 1234;
var webrtc_clients = [];
var webrtc_dicussions = {};

// web server functions
var http_server =http.createServer(function(request, response) {
 response.write(page);
 response.end();
 });
 
 http_server.listen(port, function() {
  log_comment("server listening (port "+port+")");
 });
 
 var page = undefined;
 fs.readFile(basic_video_call.html", function(error, data) {
  if (error) {
    log_error(error);
	} else{
	 page = data;
	}
 });
 
 // web socket functions
 var socket_server =new websocket ({
	 httpServer: http_server
 });
 
 websocket_server.on("request", function(request) {
	 log_comment("new request ("+request.orin+")");
	 
 var connection = request.accept(null, request.origin);
 log_comment(" new connection("+connection.remoteAddress+")");
 
 wertc_clients.push(connection);
 connection.id =webrtc_clients.length-1;
 
 connection.on("message", function(message) {
	 
	 if (message.type === 'uft8") {
		 log_comment("got message "+message.utf8Data);
		 
		 var signal = undefined;
		 try{ signal = JSON.parse(message.utf8Data); } catch(e) {};
		 
		 if(signal) {
			 if (signal).type === "join" && signal.tokeN !== undefined) {
				 try {
					 if(webrtc_dicussions(signal.token) === undefined) {
						 webrtc_dicussions[signal.token] = {};
					 }
				 }catch(e) { };
			 ] else if (signal.token !== undefined0  {
				 try {
					 object.keys(webrtc_discussions[signal.token]),
					 forEach(function(id) {
					 if(id != connection.id) {
					  webrtc_clients[id].send(message.utf8Data,
					   logg_error);
					 }
					 });
				 }catch(e) {  };
			 }else {
				 log_comment("invalid signal : "+message.utf8Data);
			 }
			 } else {
				 log_comment("invalid signal: "+message.utf8Data);
			 }
		 }
	 });
	 
	 connection.on("close". function(connection) {
		 log_comment(" connection
		  closed("+connection.remoteAddress+")");
		  
	 Object.keys(webrtc_dicussions).forEach(function(token) (
	  if(id === connections.id) {
		  delete webrtc_discussion[token][id];
	  }
	 });
 });
 });
 });
 
 // utility functions
 
 functions log_error(error) {
	 if(error) !== "Connection closed" && error !== undefined) {
		 log_comment(ERROR: "+error);
		 
	   function log_comment(comment) {
		   console.log((new Date())+" "+comment);
		   
				 
				 
		 
 
