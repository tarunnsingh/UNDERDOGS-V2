if(screen.width>800)
{
  document.getElementsByClassName("mobile")[0].style.display="none";
    document.getElementById("mobile-foot").style.display="none";
}
else{
  document.getElementsByClassName("big-screens")[0].style.display="none";
  document.getElementsByClassName("big-screens")[1].style.display="none";
}

function faq(){

  document.getElementsByClassName("introim")[0].style.opacity="0.5";
  document.getElementsByClassName("content-row")[0].style.opacity="0.5";
  document.getElementsByClassName("members")[0].style.opacity="0.5";
  document.getElementsByClassName("events")[0].style.opacity="0.5";
   document.getElementsByClassName("foot")[0].style.opacity="0.5";
     document.getElementsByClassName("navbar")[0].style.opacity="0.5";
  document.getElementsByClassName("faq")[0].style.display="block";

}
function close_faq(){
  document.getElementsByClassName("introim")[0].style.opacity="1";
  document.getElementsByClassName("content-row")[0].style.opacity="1";
  document.getElementsByClassName("members")[0].style.opacity="1";
  document.getElementsByClassName("events")[0].style.opacity="1";
   document.getElementsByClassName("foot")[0].style.opacity="1";
  document.getElementsByClassName("faq")[0].style.display="none";
    document.getElementsByClassName("navbar")[0].style.opacity="1";

}
function gallery(){
  document.getElementsByClassName("introim")[0].style.opacity="0.5";
    document.getElementsByClassName("navbar")[0].style.opacity="0.5";
  document.getElementsByClassName("content-row")[0].style.opacity="0.5";
  document.getElementsByClassName("members")[0].style.opacity="0.5";
  document.getElementsByClassName("events")[0].style.opacity="0.5";
   document.getElementsByClassName("foot")[0].style.opacity="0.5";
  document.getElementById("photogallery").style.display="block";
}
function close_gallery(){
  document.getElementsByClassName("introim")[0].style.opacity="1";
  document.getElementsByClassName("content-row")[0].style.opacity="1";
  document.getElementsByClassName("members")[0].style.opacity="1";
  document.getElementsByClassName("events")[0].style.opacity="1";
   document.getElementsByClassName("foot")[0].style.opacity="1";
    document.getElementById("photogallery").style.display="none";
    document.getElementsByClassName("navbar")[0].style.opacity="1";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
$(".smooth-scroll").click(function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      if(screen.width>800)
      {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800, function(){

        });
    }

    if(screen.width<400)
    {
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 90
    }, 800, function(){

      });
  }


  if(screen.width<800 && screen.width>=400)
  {
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 70
  }, 800, function(){

    });
}



    } // End if
  });
});



//GALLERY-section

var i=1;
function g1(){
  document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.display="none";
    i=1;
}
function g2(){
  document.getElementById("p1").style.display="none";
  document.getElementById("p2").style.display="block";
  i=2;
}

function leftgallery(){
  i--;
  if(i==1)
  {
  g1();
}
  else
  {
    g2();
  }
}

function rightgallery(){
  i++;
  if(i==1)
  {
  g1();
}
  else
  {
    g2();
  }
}
