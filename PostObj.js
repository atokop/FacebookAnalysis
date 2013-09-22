
Parse.initialize("tLz05KGZMg5DF43aMm5wXpRNjowHEwtlyD4Z1F77", "8nWJO1UIQc7Q7RXNw99TSVOWatJtW1rZlwFxYkO2");

var PostObj = Parse.Object.extend("PostObj");

// Create a new instance of that class.
var PostObj = new PostObj();

var value = "test" ; 
var keyword = "test" ; 
var sender = "test" ; 
var recipient = "test" ;
var message = "test" ; 
 
PostObj.set("sentiment", value);
PostObj.set("keyword", keyword);
PostObj.set("sender", sender);
PostObj.set("recipient", recipient);
PostObj.set("message", message);

 
PostObj.save(null, {
  success: function(PostObj) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + PostObj.id);
  },
  error: function(PostObj, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.description);
  }
});

