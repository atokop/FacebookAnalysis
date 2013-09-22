
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) 
{
  response.success("Hello world!");
});


Parse.initialize("r0VN7VBSbvnnBzNtK0T2TDYYLwN1vmf5OmLqDNJr", "LY1edm5qqxpdFOYwpSJhVmdXnYaTlZF12HjHhanh");
function getPostsFromFriend(friend)  {
  var arrayOfPosts;
  
  var post = Parse.Object.extend("PostObj");
  var query = new Parse.Query(post);
  
  
  query.equalTo("sender", friend);
  query.find({
    success: function(results) {
      alert("Successfully retrieved " + results.length + " posts.");
      // Do something with the returned Parse.Object values
      
      for (var i = 0; i < results.length; i++) {
	var postsAndStatuses[i] = results[i];
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return arrayOfPosts;
}
function getPostsWithKeyword(keyword) {
  var arrayOfPosts;
  
  var post = Parse.Object.extend("PostObj");
  var query = new Parse.Query(post);
  
  
  query.equalTo("keyword", keyword);
  query.find({
    success: function(results) {
      alert("Successfully retrieved " + results.length + " posts.");
      // Do something with the returned Parse.Object values
      
      for (var i = 0; i < results.length; i++) {
	var postsAndStatuses[i] = results[i];
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return arrayOfPosts;
}
function getAllPostsFromUser(user) {
  var postsAndStatuses;
  
  var post = Parse.Object.extend("PostObj");
  var query = new Parse.Query(post);
  
  
  query.equalTo("sender", user);
  query.find({
    success: function(results) {
      alert("Successfully retrieved " + results.length + " posts.");
      // Do something with the returned Parse.Object values
      
      for (var i = 0; i < results.length; i++) {
	var postsAndStatuses[i] = results[i];
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return postsAndStatuses;
}

function getAllPostsToUser(user) {
  var postsAndStatuses;
  
  var post = Parse.Object.extend("PostObj");
  var query = new Parse.Query(post);
  
  
  query.equalTo("recipient", user);
  query.find({
    success: function(results) {
      alert("Successfully retrieved " + results.length + " posts.");
      // Do something with the returned Parse.Object values
      
      for (var i = 0; i < results.length; i++) {
	var postsAndStatuses[i] = results[i];
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return postsAndStatuses;
}
//function getPostsWithUserTags() {
  // var arrayOfPosts;
  //return arrayOfPosts;
  //}
  function userHappiness(user){
    var happiness;
    var pos = 0;
    var neg = 0;
    var userPosts = getAllPostsFromUser(user);
    for(var i = 0; i < userPosts.length; i++)
    {
      if(userPosts[i].sentiment == -1)
	neg++;
      else if(userPosts[i].sentiment == 1)
	pos++;
    }
    happiness = pos/neg;
    //Some kind of int or double
    return happiness;
  }
  function friendHappiness(friend){ 
    var happiness;
    var pos = 0;
    var neg = 0;
    var friendPosts = getAllPostsFromFriend(friend);
    for(var i = 0; i < friendPosts.length; i++)
    {
      if(friendPosts[i].sentiment == -1)
	neg++;
      else if(friendPosts[i].sentiment == 1)
	pos++;
    }
    happiness = pos/neg;
    //Some kind of int or double
    return happiness;
  }
  function sentimentTowardUser(user){ 
    var sentiment;
    var pos = 0;
    var neg = 0;
    var toUserPosts = getAllPostsToUser(user);
    for(var i = 0; i < toUserPosts.length; i++)
    {
      if(toUserPosts[i].sentiment == -1)
	neg++;
      else if(toUserPosts[i].sentiment == 1)
	pos++;
    }
    sentiment = pos/neg;
    //Some kind of int or double
    return sentiment;
  }
  