$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 669) {
      $('#nav_bar').addClass('sticky-top');
    }
    if ($(window).scrollTop() < 670) {
      $('#nav_bar').removeClass('sticky-top');
    }
  });
});
