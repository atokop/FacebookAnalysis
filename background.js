/*Parse.initialize("r0VN7VBSbvnnBzNtK0T2TDYYLwN1vmf5OmLqDNJr", "LY1edm5qqxpdFOYwpSJhVmdXnYaTlZF12HjHhanh");
Parse.FacebookUtils.init();*/
var successURL = 'www.facebook.com/connect/login_success.html';
//https://www.facebook.com/dialog/oauth?client_id=597443020297898&response_type=token&scope=read_stream&redirect_uri=http://www.facebook.com/connect/login_success.html
successUrl = "https://www.facebook.com/connect/blank.html#_=_"
function onFacebookLogin(){
  if (!localStorage.getItem('accessToken')) {
    console.log("no token yet");
    chrome.tabs.query({}, function(tabs) { // get all tabs from every window
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url.indexOf(successURL) !== -1) {
        	// alert("this");
          // below you get string like this: access_token=...&expires_in=...
          var params = tabs[i].url.split('#')[1];

          // in my extension I have used mootools method: parseQueryString. The following code is just an example ;)
          var accessToken = params.split('&')[0];
          accessToken = accessToken.split('=')[1];
          localStorage.setItem('accessToken', accessToken);
          console.log("token set");
          console.log(localStorage.getItem('accessToken'));
          chrome.tabs.remove(tabs[i].id);
        }
      }
    });
  }

/*(localStorage.getItem('accessToken')) {
  $.get("fql?q=SELECT+uid2+FROM+friend+WHERE+uid1=me()&access_token=CAACEdEose0cBALrMfkaI8IywsgNdeZB9pNCFBxu9YvsfnWaQrQGp4JXU44Cfzyy5zt6UxriuIh7j8bCrfVYH41ro7gftZCArGXm1etTVkCoXHNDVPRa8G1lsQjyYRwFjJxmiiG1CDPRKOxXtVnh67Twgboi19R8ZBNDYpkwJWPZAQow59mGzeqRtPqMwY2wZD",
      function(data) {
        console.log("data");
      })
*/
 else {
    console.log("token removed")
    localStorage.removeItem('accessToken') 
   }
//$("div");
}

chrome.tabs.onUpdated.addListener(onFacebookLogin);
    /*console.log("token removed")
    localStorage.removeItem('accessToken') */
