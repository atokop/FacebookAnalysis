$(document).ready(function() {
   $('div').mouseover(function() {
       $(this).fadeTo("fast", 1); 
	   $(this).animate({
           height: '+=20px'
       });
   });
   $('div').mouseleave(function() {
	   $(this).fadeTo("fast", .4);
       $(this).animate({
           height: '-=20px'
		   
       }); 
   });
   $('div').click(function() {
       $(this).siblings().fadeTo("slow", 0);
   }); 
   /*$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });*/
  $('[value="Log in"]').click(function() {
    //alert("awwwwwwyeah");
    chrome.tabs.create({'url': 'https://www.facebook.com/dialog/oauth?client_id=597443020297898&response_type=token&scope=read_stream&redirect_uri=http://www.facebook.com/connect/login_success.html'}); 
    });
  var dimensions = {
	gender: 'm',
	source: 'web',
	dayType: 'weekend'
  };
//Parse.Analytics.track('signup', dimensions);
  });
  
