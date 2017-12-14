//call_token
// handle signals as a caller
function caller_signal_handler(event) {
 var signal = JSON.parse(event.data) ;
 if(signal.type === "callee arrived") {
  peer_connection.createoffer {
   new_description_created,
   log_error
   };
   } else ...
  }
  
  // handler to process new descriptions
  function new_description_created(description) {
	  peer_connection.setLocalDescription(
	  description,
	  function() {
		  signaling_server.send {
			  JSON.stringify({
				  call_token: call_token,
				  type:"new description" ,
				  sdp:descriptiom
			  })
			 );
		  },
		  log_error
	  };
	 )
  