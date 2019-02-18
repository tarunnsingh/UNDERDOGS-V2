function loader() {
  document.getElementById("logo").style.display = "none";
  open_banner();
  setTimeout(home, 350);
}

function open_banner() {
  document.getElementsByClassName("left-banner")[0].style.width = "0";
  document.getElementsByClassName("right-banner")[0].style.width = "0";
}

function home() {
  document.getElementsByClassName("navbar")[0].style.visibility = "visible";
  document.getElementById("homerow").style.visibility = "visible";
  document.getElementsByClassName("content-row")[0].style.visibility =
    "visible";
  document.getElementsByClassName("aboutus")[0].style.visibility = "visible";
  document.getElementsByClassName("member-section")[0].style.visibility =
    "visible";
  document.getElementsByClassName("events")[0].style.visibility = "visible";
  document.getElementsByClassName("foot")[0].style.visibility = "visible";
  document.getElementsByClassName("foot2")[0].style.visibility = "visible";
  document.getElementById("enroll-button").style.visibility = "visible";
  document.getElementsByClassName("navbar")[0].style.opacity = "1.0";
  document.getElementById("homerow").style.opacity = "1";
  document.getElementsByClassName("content-row")[0].style.opacity = "1";
  document.getElementsByClassName("aboutus")[0].style.opacity = "1";
  document.getElementById("enroll-button").style.opacity = "1";
  document.getElementsByTagName("BODY")[0].style.overflowY = "initial";
  document.getElementsByClassName("intro-msg-box")[0].style.opacity = "0.8";
  document.getElementsByClassName("intro-msg-box")[0].style.transform =
    "rotateZ(360deg)";
  document.getElementsByClassName("intro-msg-box")[0].style.height = "200px";
}

//REMOVING INTRO BOX ON scroll

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 150) {
    document.getElementsByClassName("intro-msg-box")[0].style.opacity = "0";
    document.getElementsByClassName("intro-msg-box")[0].style.transform =
      "rotateZ(0deg)";
    document.getElementsByClassName("intro-msg-box")[0].style.height = "0px";
  } else {
    document.getElementsByClassName("intro-msg-box")[0].style.opacity = "0.8";
    document.getElementsByClassName("intro-msg-box")[0].style.transform =
      "rotateZ(360deg)";
    document.getElementsByClassName("intro-msg-box")[0].style.height = "200px";
  }
});

if (screen.width > 800) {
  document.getElementsByClassName("mobile")[0].style.display = "none";
  document.getElementById("mobile-foot").style.display = "none";
  var j = 0;
  while (j < 5) {
    document
      .getElementsByClassName("nav-item")
      [j].removeAttribute("data-toggle");
    j++;
  }
} else {
  document.getElementsByClassName("big-screens")[0].style.display = "none";
}

function gallery() {
  document.getElementsByClassName("introduction")[0].style.opacity = "0.5";
  document.getElementsByClassName("navbar")[0].style.opacity = "0.5";
  document.getElementsByClassName("content-row")[0].style.opacity = "0.5";
  document.getElementsByClassName("aboutus")[0].style.opacity = "0.5";
  document.getElementsByClassName("members")[0].style.opacity = "0.5";
  document.getElementsByClassName("events")[0].style.opacity = "0.5";
  document.getElementsByClassName("foot")[0].style.opacity = "0.5";
  document.getElementById("photogallery").style.display = "block";
}
function close_gallery() {
  document.getElementsByClassName("introduction")[0].style.opacity = "1";
  document.getElementsByClassName("content-row")[0].style.opacity = "1";
  document.getElementsByClassName("members")[0].style.opacity = "1";
  document.getElementsByClassName("aboutus")[0].style.opacity = "1";
  document.getElementsByClassName("events")[0].style.opacity = "1";
  document.getElementsByClassName("foot")[0].style.opacity = "1";
  document.getElementById("photogallery").style.display = "none";
  document.getElementsByClassName("navbar")[0].style.opacity = "1";
}

$(".smooth-scroll").click(function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 200
      },
      800
    );
  }
});

//GALLERY-section

var i = 1;
function g1() {
  document.getElementById("p1").style.display = "block";
  document.getElementById("p2").style.display = "none";
  document.getElementById("p3").style.display = "none";
  i = 1;
}
function g2() {
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "block";
  document.getElementById("p3").style.display = "none";
  i = 2;
}
function g3() {
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "none";
  document.getElementById("p3").style.display = "block";
  i = 3;
}

function leftgallery() {
  i--;
  if (i == 1) {
    g1();
  } else if (i == 2) {
    g2();
  } else {
    g3();
  }
}

function rightgallery() {
  i++;
  if (i == 1) {
    g1();
  } else if (i == 2) {
    g2();
  } else {
    g3();
  }
}

//expanding phone-number box
var k = 1;
function phone_numbers() {
  if (k % 2 != 0) {
    document.getElementsByClassName("phone-number")[0].style.opacity = "1";
    document.getElementsByClassName("phone-number")[0].style.width = "400px";
  } else {
    document.getElementsByClassName("phone-number")[0].style.opacity = "0";
    document.getElementsByClassName("phone-number")[0].style.width = "0px";
  }
  k++;
}

function gender() {
  if (k % 2 != 0)
    document.getElementsByClassName("mobile-phone-number")[0].style.opacity =
      "1";
  else
    document.getElementsByClassName("mobile-phone-number")[0].style.opacity =
      "0";
  k++;
}

//gallery-loader

function loader_gallery() {
  document.getElementById("logo1").style.display = "none";
  open_banner();
  setTimeout(home_gallery, 350);
}

function open_banner() {
  document.getElementsByClassName("left-banner")[0].style.width = "0";
  document.getElementsByClassName("right-banner")[0].style.width = "0";
}

function home_gallery() {
  document.getElementById("photogallery").style.display = "block";
}

$(document).ready(function() {
  $(".member-carousel").slick({
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<a class= "carbtn btn carl " ><i class="fas fa-chevron-left" ></i></a>',
    nextArrow:
      '<a class= "carbtn btn carr " ><i class="fas fa-chevron-right" ></i></a>',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
