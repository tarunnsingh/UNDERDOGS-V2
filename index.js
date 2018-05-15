if(screen.width>800)
{
  document.getElementsByClassName("mobile")[0].style.display="none";
    document.getElementById("mobile-footer").style.display="none";
}
else{
  document.getElementsByClassName("big-screens")[0].style.display="none";
  document.getElementsByClassName("big-screens")[1].style.display="none";
  document.getElementsByClassName("big-screens")[2].style.display="none";
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
function faq(){

  document.getElementsByClassName("introim")[0].style.opacity="0.5";
  document.getElementsByClassName("content-row")[0].style.opacity="0.5";
  document.getElementsByClassName("members")[0].style.opacity="0.5";
  document.getElementsByClassName("events")[0].style.opacity="0.5";
   document.getElementsByClassName("foot")[0].style.opacity="0.5";
  document.getElementsByClassName("faq")[0].style.display="block";

}
function close_faq(){
  document.getElementsByClassName("introim")[0].style.opacity="1";
  document.getElementsByClassName("content-row")[0].style.opacity="1";
  document.getElementsByClassName("members")[0].style.opacity="1";
  document.getElementsByClassName("events")[0].style.opacity="1";
   document.getElementsByClassName("foot")[0].style.opacity="1";
  document.getElementsByClassName("faq")[0].style.display="none";

}
