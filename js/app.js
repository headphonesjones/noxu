// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$("#ryan-info").hover(
  function() {
    $(this).addClass( "hover-box" );
  }, function() {
    $(this).removeClass( "hover-box" );
  }
);