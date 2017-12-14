// handle signals as a callee
function callee_signal_handler(event) {
  ... 
  } else if(signal.type === "new description") {
    peer_connection.setRemoteDescriptiom{
	 new rtc_session_description(signal.sdp) ,
	 function() {
	  if(peer_connection.remoteDescription.type == "offer") {
	   peer_connection.createAnswer(new description_created, 
	   log_error);
	   )
	   },
	   log_error
	   };
	  } else ...
	  }
	   