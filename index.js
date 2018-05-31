function loader(){
document.getElementById("logo").style.display="none";
open_banner();
setTimeout(home,350);
}

function open_banner(){
  document.getElementsByClassName("left-banner")[0].style.width="0";
  document.getElementsByClassName("right-banner")[0].style.width="0";
}


function home(){
   document.getElementById("top").style.visibility="visible";
      document.getElementsByClassName("navbar")[0].style.visibility="visible";
      document.getElementById("homerow").style.visibility="visible";
        document.getElementsByClassName("content-row")[0].style.visibility="visible";
          document.getElementsByClassName("aboutus")[0].style.visibility="visible";
            document.getElementsByClassName("member-section")[0].style.visibility="visible";
              document.getElementsByClassName("events")[0].style.visibility="visible";
                document.getElementsByClassName("foot")[0].style.visibility="visible";
                document.getElementsByClassName("foot2")[0].style.visibility="visible";
                   document.getElementById("enroll-button").style.visibility="visible";
                   document.getElementsByClassName("navbar")[0].style.opacity="0.8";
                   document.getElementById("homerow").style.opacity="1";
                     document.getElementsByClassName("content-row")[0].style.opacity="1";
                       document.getElementsByClassName("aboutus")[0].style.opacity="1";
                       document.getElementById("enroll-button").style.opacity="1";
                       document.getElementsByTagName("BODY")[0].style.overflowY="initial";
                       document.getElementsByClassName("intro-msg-box")[0].style.opacity="0.8";
                       document.getElementsByClassName("intro-msg-box")[0].style.transform="rotateZ(360deg)";
                       document.getElementsByClassName("intro-msg-box")[0].style.height="365px";

}

//REMOVING INTRO BOX ON scroll

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll>150)
  {
    document.getElementsByClassName("intro-msg-box")[0].style.opacity="0";
    document.getElementsByClassName("intro-msg-box")[0].style.transform="rotateZ(0deg)";
    document.getElementsByClassName("intro-msg-box")[0].style.height="0px";
  }

  else{
  document.getElementsByClassName("intro-msg-box")[0].style.opacity="0.8";
  document.getElementsByClassName("intro-msg-box")[0].style.transform="rotateZ(360deg)";
  document.getElementsByClassName("intro-msg-box")[0].style.height="365px";
}
});



if(screen.width>800)
{
  document.getElementsByClassName("mobile")[0].style.display="none";
    document.getElementById("mobile-foot").style.display="none";
    var j=0;
    while(j<5)
    {
    document.getElementsByClassName("nav-item")[j].removeAttribute("data-toggle");
    j++;
  }
  document.getElementsByClassName("videog")[0].removeAttribute("href");
  document.body.removeAttribute("onscroll");
}
else{

  document.getElementsByClassName("big-screens")[0].style.display="none";
  document.getElementsByClassName("big-screens")[1].style.display="none";
  document.getElementsByClassName("videog")[0].setAttribute("href","#videogallery");
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
  document.getElementsByClassName("aboutus")[0].style.opacity="0.5";
  document.getElementsByClassName("members")[0].style.opacity="0.5";
  document.getElementsByClassName("events")[0].style.opacity="0.5";
   document.getElementsByClassName("foot")[0].style.opacity="0.5";
  document.getElementById("photogallery").style.display="block";
}
function close_gallery(){
  document.getElementsByClassName("introim")[0].style.opacity="1";
  document.getElementsByClassName("content-row")[0].style.opacity="1";
  document.getElementsByClassName("members")[0].style.opacity="1";
  document.getElementsByClassName("aboutus")[0].style.opacity="1";
  document.getElementsByClassName("events")[0].style.opacity="1";
   document.getElementsByClassName("foot")[0].style.opacity="1";
  document.getElementById("photogallery").style.display="none";
    document.getElementsByClassName("navbar")[0].style.opacity="1";

}

function videos(){
  document.getElementsByClassName("introim")[0].style.opacity="0.5";
    document.getElementsByClassName("navbar")[0].style.opacity="0.5";
  document.getElementsByClassName("content-row")[0].style.opacity="0.5";
  document.getElementsByClassName("members")[0].style.opacity="0.5";
  document.getElementsByClassName("events")[0].style.opacity="0.5";
   document.getElementsByClassName("foot")[0].style.opacity="0.5";
  document.getElementById("videogallery").style.display="block";
  videogal();
}

function close_videos(){
  document.getElementsByClassName("introim")[0].style.opacity="1";
  document.getElementsByClassName("content-row")[0].style.opacity="1";
  document.getElementsByClassName("members")[0].style.opacity="1";
  document.getElementsByClassName("events")[0].style.opacity="1";
   document.getElementsByClassName("foot")[0].style.opacity="1";
    document.getElementById("videogallery").style.display="none";
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
        scrollTop: $(hash).offset().top - 90
      }, 800);
    }

    if(screen.width<400)
    {
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 70
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
function videogal() {
    var dot = document.getElementsByClassName("dot")[0];
    setInterval(function dots(){

    if(dot.innerHTML.length > 4)
    {
    dot.innerHTML="";
}
    else

       dot.innerHTML+=".";
     },600);
     setTimeout(close_videos,5800);
}

//expanding phone-number box
 var k=1;
function phone_numbers()
{  if(k%2!=0)
  {
    document.getElementsByClassName("phone-number")[0].style.opacity="1";
  document.getElementsByClassName("phone-number")[0].style.width="400px";
}
  else{

    document.getElementsByClassName("phone-number")[0].style.opacity="0";
    document.getElementsByClassName("phone-number")[0].style.width="0px";
}
  k++;
}

function gender(){
  if(k%2!=0)
  document.getElementsByClassName("mobile-phone-number")[0].style.opacity="1";

  else
      document.getElementsByClassName("mobile-phone-number")[0].style.opacity="0";
  k++;
}
