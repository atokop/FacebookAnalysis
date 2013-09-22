
Parse.initialize("tLz05KGZMg5DF43aMm5wXpRNjowHEwtlyD4Z1F77", "8nWJO1UIQc7Q7RXNw99TSVOWatJtW1rZlwFxYkO2");

//var PostObj = Parse.Object.extend("PostObj");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    //alert("yay! it worked");
  }
});



/*
 
// Create a new instance of that class.
var sentiment = new PostObj();
 
sentiment.set("positive_or_negative", "positive");
sentiment.set("value", 86);

 
sentiment.save(null, {
  success: function(sentiment) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + sentiment.id);
  },
  error: function(sentiment, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.description);
  }
});

*/