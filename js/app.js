// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('#home-definition-title').addClass('animated fadeInDown');
$('#definition-text').addClass('animated fadeInRight');
$('#logo-image').on

$( "#nav-container" ).hover(
  function() {
  	$('#h5projects').removeClass('animated fadeOutUp');
    $('#h5contact').removeClass('animated fadeOutUp');
    $('#h5projects').addClass('animated fadeInDown');
    $('#h5contact').addClass('animated fadeInDown');
  }, function() {
    $('#h5projects').removeClass('animated fadeInDown');
    $('#h5contact').removeClass('animated fadeInDown');
    $('#h5projects').addClass('animated fadeOutUp');
    $('#h5contact').addClass('animated fadeOutUp');
  }
);