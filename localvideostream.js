// set up stream from local camera
function setup_video() {
 get_user_media(
 {
  "audio": true, // request access to microphone
  "video": true // request access to camera
  },
  function(local stream) { // sucess callback
   // preview the local microphone & camera stream
   connect_stream_to_src{
    local_stream,
	document.getElementById("local video"0
	};
	...
	},
	log_error // error callback
	};
}
 