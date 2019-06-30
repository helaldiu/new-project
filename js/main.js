/*===================================
          Number Count Up 
=====================================*/
// This counter is made with easy_number_animate plugin -> https://www.jqueryscript.net/animation/Number-Count-Up-Down-Animation-jQuery.html

var paused = false;
if (window.location.pathname == '/index.html') {
  $(window).scroll(function() {
    var oTop = $("#counters").offset().top - window.innerHeight;
  
    if (!paused && $(window).scrollTop() > oTop) {
      $(".students-counter").easy_number_animate({
        start_value: 0,
        end_value: 32980,
        duration: 1000
      });
  
      $(".courses-counter").easy_number_animate({
        start_value: 0,
        end_value: 400,
        duration: 1000
      });
  
      $(".reviews-counter").easy_number_animate({
        start_value: 0,
        end_value: 10652,
        duration: 1000
      });
      paused = true;
    }
  });
} 


/*===================================
          Search Input Popup
=====================================*/
function sidebarSearch() {
  var searchTrigger = $(".search-active"),
    endTriggersearch = $(".search-close"),
    container = $(".main-search-active");

  searchTrigger.on("click", function(e) {
    e.preventDefault();
    container.toggleClass("search-visible");
  });

  endTriggersearch.on("click", function() {
    container.removeClass("search-visible");
  });
}
sidebarSearch();

/*===================================
        ScrollTop
=====================================*/

$("#scroll-top").click(function() {
  $("html").animate(
    {
      scrollTop: 0
    },
    "slow"
  );
  return false;
});

// Scroll then fixed

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#scroll-top").addClass("active");
  } else {
    $("#scroll-top").removeClass("active");
  }
});

// Show popup on Btn Click;

if(window.location.pathname == '/teacher.html') {
  $("#popup-toggle").click(function(){
    $(".contact-popup").toggleClass("show");
    console.log(this)
  })
}