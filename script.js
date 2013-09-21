$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).fadeTo("fast", 1); 
	   $(this).animate({
           height: '+=20px',
		   width: '+=20px'
       });
   });
   $('div').mouseleave(function() {
	   $(this).fadeTo("fast", .4);
       $(this).animate({
           height: '-=20px',
		   width: '-=20px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});