// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require skrollr
//= require skrollr.stylesheets.min
//= require placeholder.min

document.addEventListener('page:change', function() {
  $('#portal_div').addClass('animated fadeIn');
});
document.addEventListener('page:fetch', function() {
  $('#portal_div').addClass('animated fadeOut');
});


function resizeVideo() {
  var videoWidth = $("video").width();
  var screenWidth = $(window).width();
  $("video").css({ left: ((screenWidth - videoWidth) * 0.44) + 'px' })
};

var resizeTimer;
$(window).resize(function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeVideo, 150);
});

$(function() {
  resizeVideo();
  var video = $("video")[0];
  video.addEventListener('loadeddata', function() {
    resizeVideo();
  }, false);
  fadeLogoIn();
});

function fadeLogoIn() {
  setTimeout(function() {
    $('.logo').addClass('animated fadeIn zoomIn')
  }, 3000);
}



