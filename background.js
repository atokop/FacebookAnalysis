/*Parse.initialize("r0VN7VBSbvnnBzNtK0T2TDYYLwN1vmf5OmLqDNJr", "LY1edm5qqxpdFOYwpSJhVmdXnYaTlZF12HjHhanh");
Parse.FacebookUtils.init();*/
var successURL = 'www.facebook.com/connect/login_success.html';
https://www.facebook.com/dialog/oauth?client_id=597443020297898&response_type=token&redirect_uri=http://www.facebook.com/connect/login_success.html
function onFacebookLogin(){
	alert("blah");
  if (!localStorage.getItem('accessToken')) {
    chrome.tabs.query({}, function(tabs) { // get all tabs from every window
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url.indexOf(successURL) !== -1) {
        	alert("this");
          // below you get string like this: access_token=...&expires_in=...
          var params = tabs[i].url.split('#')[1];

          // in my extension I have used mootools method: parseQueryString. The following code is just an example ;)
          var accessToken = params.split('&')[0];
          accessToken = accessToken.split('=')[1];

          localStorage.setItem('accessToken', accessToken);
          chrome.tabs.remove(tabs[i].id);
        }
      }
    });
  }
}

chrome.tabs.onUpdated.addListener(onFacebookLogin);