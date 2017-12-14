// setup stream from the local camera
function setup_video() {
  getUserMedia{
   {
     "audio": true, // request access to local microphone
	 "video": true //request access to local camera
	 },
	 function(local_stream) { // sucess callback
	 ...
	 //add local stream to peer_connection ready to be sent to remot peer
	 
		peer_connection.addstream(local_stream);
		},
		log_error // error callback
	 };
	}
	
	// diplay remote video stream when they arrive
	 peer_connection.onaddstream = function(event) {
	 // hide placeholder and show remote video
	 connect_stream_to_src {
	  event.stream,
	  document.getElementById("remote video")
	  }:
	};
	 
