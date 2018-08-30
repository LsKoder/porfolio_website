/** Content: JS Scripts for Website
    Author:  Sergio Manetta **/
    
// Scroll with slow animation when navigation link is clicked
$("#myNavbar a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1200, function(){
      window.location.hash = hash;
    });
  }
});

// Show resume section and hide home section
function show_resume(){
  $("#home_content").hide();
  $("#resume_content").show();
  $("#jumbotron").addClass("jumbotron-resized");
}
// Show resume section and hide home section
function show_main(){
  $("#resume_content").hide();
  $("#home_content").show();
  $("#jumbotron").removeClass("jumbotron-resized");
}