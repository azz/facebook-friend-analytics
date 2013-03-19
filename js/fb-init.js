// Additional JS functions here
window.fbAsyncInit = function() {
	FB.init({
	  appId      : '260868700715509', // App ID
	  channelUrl : '//lucasazzola.com/fb-friend-analytics/channel.php', // Channel File
	  status     : true, // check login status
	  cookie     : true, // enable cookies to allow the server to access the session
	  xfbml      : true  // parse XFBML
	});

// Additional init code here
	FB.getLoginStatus(function(response) {
	  	App.fbLoaded(response);
	 });


};

// Load the SDK Asynchronously
(function(d){
	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement('script'); js.id = id; js.async = true;
	js.src = "//connect.facebook.net/en_US/all.js";
	ref.parentNode.insertBefore(js, ref);
}(document));