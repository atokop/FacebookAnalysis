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
   $(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });
  
});